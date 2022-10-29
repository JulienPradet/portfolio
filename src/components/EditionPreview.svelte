<script lang="ts">
	import { lazy } from "./lazyAction";

    enum ImageFormatEnum {"jpeg" = "jpeg", "webp" = "webp"}
    type ImageMetadata = {
        src: string,
        width: number,
        height: number,
    } & {
        [key in ImageFormatEnum]: {
            src: string,
            width: number
        }[]
    }
    export let image: ImageMetadata
	export let sizes: string;
	export let name: string;
	export let url: string;
	export let editionNumber: number | 'Preview';
    export let lazyload = true;

    function toSrcset (definition: {
            src: string,
            width: number
        }[]): string {
            return definition.map(({src, width}) => `${src} ${width}w`).join(',')
        }
</script>

<a href={url}>
	<figure>
        {#if lazyload}
            <picture use:lazy>
                <source type="image/webp" data-srcset={toSrcset(image.webp)} sizes={sizes} />
                <img
                    alt="{name} #{editionNumber}"
                    src={image.src}
                    data-srcset={toSrcset(image.jpeg)}
                    decoding="async"
                    sizes={sizes}
                    style="
                        --aspect-ratio: {image.width} / {image.height};
                        --height: {image.height}px;
                    " />
            </picture>
        {:else}
            <picture>
                <source type="image/webp" srcset={toSrcset(image.webp)} sizes={sizes} />
                <img
                    alt="{name} #{editionNumber}"
                    src={image.src}
                    srcset={toSrcset(image.jpeg)}
                    fetchpriority="high"
                    decoding="async"
                    sizes={sizes}
                    class="loaded"
                    style="
                        --aspect-ratio: {image.width} / {image.height};
                        --height: {image.height}px;
                    " />
            </picture>
        {/if}
		<figcaption>#{editionNumber}</figcaption>
	</figure>
</a>

<style>
    picture {
        display: block;
        overflow: hidden;
    }

	img {
		display: block;
        max-width: calc(90vw - 2 * var(--global-margin));
        max-height: calc((90vw - 2 * var(--global-margin)) / (var(--aspect-ratio)));
        height: var(--height);
        width: auto;
		aspect-ratio: var(--aspect-ratio);
		margin-bottom: 0.5rem;
        filter: blur(15px);
    }

    img:global(.loaded) {
        filter: none;
	}

	figure {
		margin: 0;
	}

	figcaption {
		text-align: right;
	}
</style>
