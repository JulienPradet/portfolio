<svelte:head>
	<link rel="preload" as="font" type="font/woff2" href="/ovo.woff2" crossorigin />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#181716">
    <meta name="apple-mobile-web-app-title" content="Julien Pradet">
    <meta name="application-name" content="Julien Pradet">
    <meta name="msapplication-TileColor" content="#fff7f1">
    <meta name="theme-color" content="#fff7f1">
    <meta name="viewport" content="width=device-width,viewport-fit=cover">
    <title>Hi, I'm Julien Pradet</title>
</svelte:head>


<header id="top" tabIndex="-1">
    <a href="#main" class="screen-reader screen-reader-focusable">Go to main content</a>
	<nav>
		<ul>
			<li><a href="/"><span aria-label="Home">🏠</span></a></li>
			<li><a href="https://twitter.com/JulienPradetArt">@JulienPradetArt</a></li>
			<li><a href="https://github.com/JulienPradet">Github</a></li>
			<li><a href="https://www.fxhash.xyz/u/Julien%20Pradet">Fxhash</a></li>
		</ul>
	</nav>
</header>

<main id="main" tabIndex="-1">
    <slot />
</main>

<footer>
    <a href="#top">Back to top</a>
    <a href="#main" class="screen-reader screen-reader-focusable">Go to main content</a>
</footer>

<style>
	/* latin */
	@font-face {
		font-family: 'Ovo';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(/ovo.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	:global(:root) {
		--global-margin: 1.5rem;
		padding: 3rem var(--global-margin);
		font-family: Ovo, serif;
		line-height: 1.5;
		background: #fff7f1;
		color: #181716;
	}

	:global(body) {
		margin: 0;
	}

	:global(h1) {
		font-size: 2.488rem;
	}

	:global(h2) {
		font-size: 2.074rem;
	}

	:global(h3) {
		font-size: 1.728rem;
	}

	:global(h4) {
		font-size: 1.44rem;
	}

	:global(a) {
		color: inherit;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.4em;
		text-decoration-color: rgb(118 114 110 / 50%);
		transition: opacity 0.1s ease-in-out, text-decoration-color 0.1s ease-in-out;
	}

	:global(a:hover, a:focus) {
		opacity: 0.8;
		text-decoration-color: rgb(118 114 110 / 100%);
	}

	:global(strong) {
		position: relative;
		display: inline-block;
		font-weight: normal;
	}
	:global(strong::before) {
		content: '';
		position: absolute;
		top: 0.2em;
		bottom: 0.2em;
		/* height: 0.5em; */
		left: -0.2em;
		right: -0.2em;
		background: rgb(118 114 110 / 25%);
	}

    /**
    * Visually hide an element, but leave it available for screen readers
    * @link https://github.com/h5bp/html5-boilerplate/blob/49b7a124699d719b6bd5f0655225e7e8f471da3e/dist/css/style.css#L109
    * @link http://snook.ca/archives/html_and_css/hiding-content-for-accessibility
    */
    :global(.screen-reader) {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
    /**
    * Extends the .screen-reader class to allow the element to be focusable when navigated to via the keyboard
    * @link https://github.com/h5bp/html5-boilerplate/blob/master/dist/css/main.css
    * @link https://www.drupal.org/node/897638
    */
    :global(.screen-reader-focusable:active),
    :global(.screen-reader-focusable:focus) {
        clip: auto;
        height: auto;
        margin: 0;
        overflow: visible;
        position: static;
        white-space: normal;
        width: auto;
    }

    a.screen-reader:focus {
        position: absolute;
        top: 0;
        left: 0;
    }
    footer {
        position: relative;
    }
    footer a.screen-reader:focus {
        top: auto;
        bottom: -100%;
        right: 0;
    }

	header {
		margin-bottom: 3rem;
        scroll-margin: 3rem;
	}

	nav ul {
		display: flex;
        flex-wrap: wrap;
		margin: 0;
		padding: 0;
		gap: 0.5rem 1rem;
	}

	nav li {
		display: block;
		margin: 0;
		padding: 0;
	}

    main {
        outline: none;
    }

    footer {
        text-align: right;
        margin-top: 3rem;
    }

	@media (max-width: 400px) {
		:global(:root) {
			font-size: 1em;
		}

		:global(h1) {
			font-size: 2.074rem;
		}

		:global(h2) {
			font-size: 1.728rem;
		}

		:global(h3) {
			font-size: 1.44rem;
		}

		:global(h4) {
			font-size: 1.2rem;
		}
	}

	@media (min-width: 720px) {
		:global(:root) {
			--global-margin: 6rem;
			padding: var(--global-margin);
			font-size: 1.125em;
		}

		header {
			margin-bottom: 4rem;
		}
	}
</style>
