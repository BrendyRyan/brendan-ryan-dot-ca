<script context="module">
  export async function load({ page }) {
    try {
      const Post = await import(`../../posts/${page.params.slug}/${page.params.slug}.md`);
      return {
        props: {
          Post: Post.default,
          Title: Post.metadata.title,
        },
      };
    } catch (e) {
      return {
        status: 307,
        redirect: '/blog',
      };
    }
  }
</script>

<script>
  export let Post;
  export let Title;
</script>

<svelte:head>
  <title>{Title}</title>
</svelte:head>

<article class="mx-auto prose prose-zinc dark:prose-invert">
  <!-- makes it reactive -->
  <svelte:component this={Post} />
</article>
