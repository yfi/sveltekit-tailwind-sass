<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style lang="scss">
    h1{
        @extend .cc;
    }

    p{
        @extend h1;
        @apply bg-red-100 bg-opacity-75 h-96;
    }
</style>