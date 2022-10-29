import sharp from 'sharp';
import { dirname, join } from 'node:path';
import { mkdir, readdir, readFile, writeFile, access, constants } from 'node:fs/promises';

const inputDir = join(process.cwd(), 'src/images');
const outputDir = join(process.cwd(), 'static/images');
const staticDir = join(process.cwd(), 'static');

await mkdir(outputDir, { recursive: true });

async function generateImages(path, config) {
	let imageConfig;
	try {
		imageConfig = (await readFile(path.replace(/\.\w+$/, '.json'))).toString();
	} catch (e) {
		// no config file
	}
	const sharpConfigs = imageConfig ? JSON.parse(imageConfig) : config;

	if (!sharpConfigs) {
		throw new Error(`No config found for ${path}`);
	}

	const metadataPath = path.replace(/\.\w+$/, `.metadata.json`);
	try {
		await access(metadataPath, constants.R_OK);
		return;
	} catch (error) {
		// No cache, regenerate
	}

	const metadata = {};
	for await (let { width, height, format } of sharpConfigs) {
		const outputPath = path.replace(inputDir, outputDir).replace(/\.\w+$/, `-${width}w.${format}`);
		if (!metadata.width || !metadata.height) {
			metadata.width = width;
			metadata.height = height;
		}
		await sharp(path)
			.resize(width, height)
			.toFormat(format === 'base64' ? 'png' : format)
			.toBuffer()
			.then(async (buffer) => {
				if (format === 'base64') {
					metadata.src = `data:image/png;base64,${buffer.toString('base64')}`;
				} else {
					await mkdir(dirname(outputPath), { recursive: true });
					await writeFile(outputPath, buffer);
					console.log(outputPath);

					if (!metadata[format]) {
						metadata[format] = [];
					}
					metadata[format].push({
						src: outputPath.replace(staticDir, ''),
						width: width
					});
				}
			});
	}

	console.log(JSON.stringify(metadata));
	await writeFile(metadataPath, JSON.stringify(metadata));
}

async function compileImages(path, config) {
	const items = await readdir(path, { withFileTypes: true });

	let dirConfig = config;
	const hasConfig = items.some((item) => item.name === 'config.json');

	const configPath = join(path, 'config.json');
	dirConfig = hasConfig ? JSON.parse((await readFile(configPath)).toString()) : config;

	for await (let item of items) {
		if (item.isDirectory()) {
			await compileImages(join(path, item.name), dirConfig);
		} else if (item.isFile() && /\.png*/.test(item.name)) {
			await generateImages(join(path, item.name), dirConfig);
		}
	}
}

await compileImages(inputDir);
