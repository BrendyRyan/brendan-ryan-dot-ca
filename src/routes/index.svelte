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
      .slice(0, 3);

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
  const projectList = projects.sort((a, b) => (a.id > b.id ? -1 : b.id > a.id ? 1 : 0)).slice(0, 3);
  export let posts;
  import BlogPost from '$lib/components/BlogPost.svelte';
  import Project from '$lib/components/Project.svelte';
</script>

<svelte:head>
  <title>BrendanRyan.ca</title>
</svelte:head>

<div class="rounded p-4 background shadow-lg grid grid-cols-4 items-center">
  <div class="col-span-3">
    <h1 class="font-bold text-3xl col-span-10">Hi, my name is Brendan.</h1>
    <p class="mt-8">I'm an accountant from London, Canada and an aspiring full-stack Javascript developer.</p>
    <p>This is my personal website where I display projects I'm working on and write about things I've learned.</p>
  </div>
  <img src="/BR-cropped.jpg" alt="Brendan Ryan" class="h-36 max-w-xl rounded-full justify-self-center shadow-xl" />
</div>
<div class="bg-yellow-200 mt-8 p-4 mb-4">
  <h2 class="text-2xl bg-white mx-auto shadow-lg p-4 rounded border">Recent blog posts</h2>
  <section class="grid gap-8 grid-cols-1 mt-2 lg:grid-cols-2 xl:grid-cols-3">
    {#each posts as post}
      <BlogPost {post} />
    {/each}
  </section>
</div>
<div class="bg-yellow-200 mt-8 p-4 mb-4">
  <h2 class="text-2xl bg-white mx-auto shadow-lg p-4 rounded border">Fun projects</h2>
  <section class="grid gap-8 grid-cols-1 mt-2 lg:grid-cols-2 xl:grid-cols-3">
    {#each projectList as project}
      <Project {project} />
    {/each}
  </section>
</div>

<style>
  .background {
    background: rgb(219, 234, 254);
    background: linear-gradient(315deg, rgba(219, 234, 254, 1) 25%, rgba(255, 255, 255, 1) 25%);
  }
</style>
