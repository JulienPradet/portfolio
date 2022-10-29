<script lang="ts">
    export let alt: string;
    export let 
</script>
        <picture>
            <source type="image/webp" srcset={toSrcset(image.webp)} sizes={sizes} />
            <img
                alt="{alt}"
                src={image.src}
                srcset={toSrcset(image.jpeg)}
                loading="lazy"
                sizes={sizes}
                style="
                    --aspect-ratio: {image.width} / {image.height};
                    --height: {image.height}px;
                " />
        </picture>