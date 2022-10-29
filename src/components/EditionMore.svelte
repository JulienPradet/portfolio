<script lang="ts">
	export let url: string;
</script>

<a href={url}>
	<span class="img" aria-hidden>+</span>
	<span class="caption">Explore the collection </span>
</a>

<style>
	a {
		display: block;
	}

	.img {
		display: block;
        max-width: calc(90vw - 2 * var(--global-margin));
        max-height: calc((90vw - 2 * var(--global-margin)) / (var(--aspect-ratio)));
        height: var(--height);
        width: auto;
		aspect-ratio: var(--aspect-ratio);
		background: #181716;
		color: #fefdfc;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.5rem;
		font-size: 4rem;
	}

	.caption {
		display: block;
		text-align: right;
	}
</style>
