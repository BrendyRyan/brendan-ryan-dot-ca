<script context="module">
  export async function load({ page }) {
    try {
      const Post = await import(`../../posts/${page.params.slug}/${page.params.slug}.md`);
      console.log(Post.metadata.title);

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

<Post />
