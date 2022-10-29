<script lang="ts">
	export let headline: string;
	export let subtitle: string;
</script>

<h1>{headline}<br /><span class="subline">{subtitle}</span></h1>

<style>
	h1 {
		font-weight: normal;
		line-height: 0.8;
		margin-bottom: 1.92rem;
	}

	.subline {
		font-size: 0.64em;
		color: #605d59;
	}
</style>
