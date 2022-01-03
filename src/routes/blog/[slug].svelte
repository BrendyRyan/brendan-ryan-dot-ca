<script context="module">
  export async function load({ page }) {
    try {
      const Post = await import(`../../lib/posts/${page.params.slug}/${page.params.slug}.md`);
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

<div class="flex justify-center">
  <div class="inline-flex bg-white p-20 shadow-xl">
    <article class="prose prose-zinc dark:prose-invert">
      <!-- makes it reactive -->
      <svelte:component this={Post} />
    </article>
  </div>
</div>
