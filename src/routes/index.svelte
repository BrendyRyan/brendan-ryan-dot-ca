<script context="module">
  export async function load() {
    //get all blog posts, map over the list and return the metadata for each one.
    const posts = import.meta.globEager('../../src/posts/**/*.md');
    const postsList = Object.values(posts);
    let postsMeta = postsList
      .map((post) => {
        return post.metadata;
      })
      .sort((a, b) => (a.id > b.id ? -1 : b.id > a.id ? 1 : 0))
      .splice(0, 3);

    return {
      props: {
        posts: postsMeta,
      },
    };
  }
</script>

<script>
  export let posts;
  import BlogPost from '$lib/BlogPost.svelte';
</script>

<svelte:head>
  <title>BrendanRyan.ca</title>
</svelte:head>

<div class="mt-8">
  <h1 class="font-bold text-3xl col-span-10">Hi, my name is Brendan.</h1>
  <p class="mt-8">
    I'm an accountant from London, Canada and an aspiring full-stack Javascript developer. This is my personal website
    where I blog about projects I am working on and useful things I've learned.
  </p>
  <h2 class="mt-8 text-2xl">Most recent blog posts</h2>
  {#each posts as post}
    <BlogPost {post} />
  {/each}
  <h2 class="mt-8 text-2xl">Interesting projects</h2>
  <ul>
    <li>Upload CSV into database</li>
    <li>Mini CRM</li>
    <li>SvelteKit Pokedex</li>
  </ul>
</div>
