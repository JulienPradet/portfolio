let observer: IntersectionObserver;

function updateAttributes(element: HTMLElement) {
	if (element.dataset.src) {
		element.setAttribute('src', element.dataset.src);
	}
	if (element.dataset.srcset) {
		element.setAttribute('srcset', element.dataset.srcset);
	}
}

function load(node: HTMLPictureElement | HTMLImageElement) {
	let img: HTMLImageElement;

	try {
		if (node instanceof HTMLPictureElement) {
			const image = node.querySelector('img');
			if (image === null) {
				throw new Error('Invalid picture element: no <img> tag.');
			}
			img = image;
			node.querySelectorAll('source').forEach((source) => updateAttributes(source));
		} else {
			img = node;
			if (img.getAttribute('loading') !== 'lazy') {
				return;
			}
			updateAttributes(img);
		}
		img.classList.add('loaded');
	} catch (e) {
		console.error(e);
	}
}

export function lazy(node: HTMLPictureElement | HTMLImageElement) {
	if (!observer) {
		observer = new IntersectionObserver(
			function (entries) {
				entries.forEach((entry) => {
					if (
						entry.isIntersecting &&
						(entry.target instanceof HTMLPictureElement || entry.target instanceof HTMLImageElement)
					) {
						load(entry.target);
					}
				});
			},
			{
				rootMargin: '200px 200px'
			}
		);
	}

	observer.observe(node);

	return {
		destroy: function destroy() {
			observer.unobserve(node);
		}
	};
}
