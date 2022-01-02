<script context="module">
  export async function load() {
    //get all blog posts, map over the list and return the metadata for each one.
    const posts = import.meta.globEager('../../src/lib/posts/**/*.md');
    const postsList = Object.values(posts);
    let postsMeta = postsList
      .map((post) => {
        return post.metadata;
      })
      .sort((a, b) => (a.id > b.id ? -1 : b.id > a.id ? 1 : 0))
      .splice(0, 3);

    // get latest 3 projects

    return {
      props: {
        posts: postsMeta,
      },
    };
  }
</script>

<script>
  import { projects } from '$lib/utils/projects';
  const projectList = projects.sort((a, b) => (a.id > b.id ? -1 : b.id > a.id ? 1 : 0)).splice(0, 3);
  export let posts;
  import BlogPost from '$lib/components/BlogPost.svelte';
  import Project from '$lib/components/Project.svelte';
</script>

<svelte:head>
  <title>BrendanRyan.ca</title>
</svelte:head>

<div class="">
  <h1 class="font-bold text-3xl col-span-10">Hi, my name is Brendan.</h1>
  <p class="mt-8">
    I'm an accountant from London, Canada and an aspiring full-stack Javascript developer. This is my personal website
    where I write about projects I am working on and useful things I've learned.
  </p>
  <h2 class="mt-8 text-2xl">Recent blog posts</h2>
  <section class="grid gap-8 grid-cols-1 mt-2 lg:grid-cols-2 xl:grid-cols-3">
    {#each posts as post}
      <BlogPost {post} />
    {/each}
  </section>
  <h2 class="mt-8 text-2xl">Recent projects</h2>
  <section class="grid gap-8 grid-cols-1 mt-2 lg:grid-cols-2">
    {#each projectList as project}
      <Project {project} />
    {/each}
  </section>
</div>
