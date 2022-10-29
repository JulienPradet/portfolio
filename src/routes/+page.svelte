<script lang="ts">
	import Headline from '../components/Headline.svelte';
	import EditionMore from '../components/EditionMore.svelte';
	import EditionPreview from '../components/EditionPreview.svelte';

    import featherPreview from '../images/projects/collections/as-light-as-a-feather/preview.metadata.json';
	import feather3 from '../images/projects/collections/as-light-as-a-feather/3.metadata.json';
	import feather14 from '../images/projects/collections/as-light-as-a-feather/14.metadata.json';
	import feather63 from '../images/projects/collections/as-light-as-a-feather/63.metadata.json';
	import feather77 from '../images/projects/collections/as-light-as-a-feather/77.metadata.json';
	import feather95 from '../images/projects/collections/as-light-as-a-feather/95.metadata.json';
	import feather150 from '../images/projects/collections/as-light-as-a-feather/150.metadata.json';
	import feather166 from '../images/projects/collections/as-light-as-a-feather/166.metadata.json';
	import feather236 from '../images/projects/collections/as-light-as-a-feather/236.metadata.json';
	import feather252 from '../images/projects/collections/as-light-as-a-feather/252.metadata.json';

    import felurePreview from '../images/projects/collections/felure/preview.metadata.json';
    import felure3 from '../images/projects/collections/felure/3.metadata.json';
    import felure8 from '../images/projects/collections/felure/8.metadata.json';
    import felure34 from '../images/projects/collections/felure/34.metadata.json';
    import felure42 from '../images/projects/collections/felure/42.metadata.json';
    import felure55 from '../images/projects/collections/felure/55.metadata.json';
    import felure60 from '../images/projects/collections/felure/60.metadata.json';
    import felure70 from '../images/projects/collections/felure/70.metadata.json';
    import felure101 from '../images/projects/collections/felure/101.metadata.json';
    import felure137 from '../images/projects/collections/felure/137.metadata.json';
    import felure178 from '../images/projects/collections/felure/178.metadata.json';
    import felure222 from '../images/projects/collections/felure/222.metadata.json';

    let preview = "Preview" as const;
    let featherCollection = [
        {editionNumber: preview, image: featherPreview, url: "https://www.fxhash.xyz/generative/18713"},
        {editionNumber: 3, image: feather3, url: "https://www.fxhash.xyz/gentk/1122057"},
        {editionNumber: 14, image: feather14, url: "https://www.fxhash.xyz/gentk/1122068"},
        {editionNumber: 63, image: feather63, url: "https://www.fxhash.xyz/gentk/1122118"},
        {editionNumber: 77, image: feather77, url: "https://www.fxhash.xyz/gentk/1122132"},
        {editionNumber: 95, image: feather95, url: "https://www.fxhash.xyz/gentk/1122150"},
        {editionNumber: 150, image: feather150, url: "https://www.fxhash.xyz/gentk/1122205"},
        {editionNumber: 166, image: feather166, url: "https://www.fxhash.xyz/gentk/1122221"},
        {editionNumber: 236, image: feather236, url: "https://www.fxhash.xyz/gentk/1122295"},
        {editionNumber: 252, image: feather252, url: "https://www.fxhash.xyz/gentk/1122312"},
    ]
    let feathersUrl = "https://portfolio.julienpradet.fr/collections/as-light-as-a-feather/explorer"

    let featherSizes = "(min-width: 300px) 226px, 80vw";

    let felureCollection = [
        {editionNumber: preview, image: felurePreview, url: "https://www.fxhash.xyz/gentk/1173750"},
        {editionNumber: 3, image: felure3, url: "https://www.fxhash.xyz/gentk/1173750"},
        {editionNumber: 8, image: felure8, url: "https://www.fxhash.xyz/gentk/1173755"},
        {editionNumber: 34, image: felure34, url: "https://www.fxhash.xyz/gentk/1173781"},
        {editionNumber: 42, image: felure42, url: "https://www.fxhash.xyz/gentk/1173789"},
        {editionNumber: 55, image: felure55, url: "https://www.fxhash.xyz/gentk/1173802"},
        {editionNumber: 60, image: felure60, url: "https://www.fxhash.xyz/gentk/1173807"},
        {editionNumber: 70, image: felure70, url: "https://www.fxhash.xyz/gentk/1173817"},
        {editionNumber: 101, image: felure101, url: "https://www.fxhash.xyz/gentk/1173849"},
        {editionNumber: 137, image: felure137, url: "https://www.fxhash.xyz/gentk/1173885"},
        {editionNumber: 178, image: felure178, url: "https://www.fxhash.xyz/gentk/1173926"},
        {editionNumber: 222, image: felure222, url: "https://www.fxhash.xyz/gentk/1173970"},
    ]
    let felureUrl = "https://portfolio.julienpradet.fr/collections/felure/explorer"
</script>

<Headline headline="Hi, I'm Julien&nbsp;Pradet," subtitle="nice to meet you :)" />
<p>
	I'm a kind human and an aspiring generative artist. <a href="/about">Learn more about me.</a>
</p>

<hr />

<section>
	<h2>Collections</h2>

	<article class="creation">
		<h3>Fêlure</h3>
		<p>September 2022 on <a href="https://www.fxhash.xyz/generative/slug/felure">fxhash</a></p>
        <p><a href={felureUrl}>Explore collection</a></p>

		<ul>
            {#each felureCollection as item, index}
                <li>
                    <EditionPreview
                        url={item.url}
                        image={item.image}
                        sizes={featherSizes}
                        name="As Light As A Feather"
                        editionNumber={item.editionNumber}
                        lazyload={index > 1}
                    />
                </li>
            {/each}
			<li>
				<EditionMore
                    url={felureUrl}
                    --aspect-ratio="{felureCollection[0].image.width} / {felureCollection[0].image.height}"
                    --height="{felureCollection[0].image.height}px"
                />
			</li>
		</ul>
	</article>

	<article class="creation">
		<h3>As Light As A Feather</h3>
		<p>August 2022 on <a href="https://www.fxhash.xyz/generative/slug/as-light-as-a-feather">fxhash</a></p>
        <p><a href={feathersUrl}>Explore collection</a></p>

		<ul>
            {#each featherCollection as item}
                <li>
                    <EditionPreview
                        url={item.url}
                        image={item.image}
                        sizes={featherSizes}
                        name="As Light As A Feather"
                        editionNumber={item.editionNumber}
                    />
                </li>
            {/each}
			<li>
				<EditionMore
                    url={feathersUrl}
                    --aspect-ratio="{featherCollection[0].image.width} / {featherCollection[0].image.height}"
                    --height="{featherCollection[0].image.height}px"
                />
			</li>
		</ul>
	</article>
</section>

<style>
	hr {
		margin-top: 3rem;
		margin-bottom: 0;
		margin-left: calc(-1 * var(--global-margin));
		margin-right: calc(-1 * var(--global-margin));
		border: none;
		border-top: 1px solid #181716;
		opacity: 0.1;
	}

	section {
		padding-top: 3rem;
		padding-bottom: 3rem;
		margin-left: calc(-1 * var(--global-margin));
		margin-right: calc(-1 * var(--global-margin));
		padding-left: var(--global-margin);
		padding-right: var(--global-margin);
		background: #fffdfd;
		border-bottom: 1px solid rgb(24 23 22 / 10%);
	}

	h2 {
		margin-top: 0;
		font-weight: normal;
	}

	h3 {
		font-size: 1.44rem;
		font-weight: normal;
		margin-bottom: 0;
	}

	section p {
		margin: 0.25rem 0 1rem;
		color: #605d59;
	}

	.creation {
		margin: 2rem 0;
	}

	.creation ul {
		display: flex;
		padding: 0 calc(var(--global-margin) - 0.5rem);
		margin: 0 calc(-1 * var(--global-margin));
		overflow-x: scroll;
		-ms-overflow-style: none; /* for Internet Explorer, Edge */
		scrollbar-width: none; /* for Firefox */
	}

	.creation ul::-webkit-scrollbar {
		display: none; /* for Chrome, Safari, and Opera */
	}

	.creation li {
		display: block;
		padding: 0.5rem;
		margin: 0;
	}
</style>
