<script context="module">
  export async function load() {
    //get all blog posts, map over the list and return the metadata for each one.
    const posts = import.meta.globEager('/src/lib/posts/**/*.md');
    const postsList = Object.values(posts);
    let postsMeta = postsList
      .map((post) => {
        return post.metadata;
      })
      .sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));

    // get a flat array of tags from each blog post
    const tagsList = postsMeta
      .map((tag) => {
        return tag.tags;
      })
      .flat()
      .sort();
    // get just unique tags
    const tags = [...new Set(tagsList)];

    return {
      props: {
        postsList: postsMeta,
        tags: tags,
      },
    };
  }
</script>

<script>
  import { onMount } from 'svelte';
  export let postsList;
  export let tags;
  import BlogPost from '$lib/components/BlogPost.svelte';

  let tagFilter = '';
  let posts = postsList;

  onMount(() => {
    // Grab HTML Elements
    const btn = document.querySelector('button.tags-menu-button');
    const menu = document.querySelector('.tag-menu');

    // Add Event Listeners
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  });

  // filter for tags
  function getTag(tag) {
    tagFilter = tag;
    // if user filters tags, then update postsMeta with filtered data
    if (tagFilter !== '') {
      posts = postsList.filter((post) => {
        return post.tags.includes(tagFilter);
      });
    } else {
      posts = postsList;
    }
  }
</script>

<svelte:head>
  <title>Blog Posts</title>
</svelte:head>

<h2 class="text-3xl bg-white mx-auto shadow-lg p-4 rounded border">Blog</h2>
<div class="flex justify-between">
  <div>
    <h3 class="mt-4">I write about Excel, Javascript, accounting programs, and more.</h3>
  </div>
  <div class="hidden md:flex md:w-24">
    <div class="self-end">
      <h3>Tags</h3>
    </div>
  </div>
  <div class="md:hidden flex items-center self-end">
    <button class="outline-none tags-menu-button bg-blue-200 p-1 rounded w-20">Tags</button>
  </div>
</div>
<hr class="border-0 bg-zinc-800 h-px" />
<!-- Repeat structure of above so blogs and tags fall under the right column -->
<div class="flex justify-between">
  <!-- Blog posts -->
  <section class="grid gap-4 grid-cols-1 mt-2 lg:grid-cols-2 xl:grid-cols-3">
    {#each posts as post}
      <BlogPost {post} />
    {/each}
  </section>
  <!-- Regular tags menu -->
  <div class="hidden md:block ml-4">
    <ul class="mt-2">
      <li
        class={`rounded p-1 mb-2 w-28 ${tagFilter === '' ? 'font-bold bg-blue-200' : 'bg-blue-100'} hover:bg-blue-200`}
      >
        <button on:click={() => getTag('')} class="block w-full h-full">#All posts</button>
      </li>
      {#each tags as tag}
        <li class={`rounded p-1 mb-2 ${tag === tagFilter ? 'font-bold bg-blue-200' : 'bg-blue-100'} hover:bg-blue-200`}>
          <button on:click={() => getTag(tag)} class="block w-full h-full">#{tag}</button>
        </li>
      {/each}
    </ul>
  </div>
  <!-- Mobile menu -->
  <div class="hidden tag-menu absolute right-0 shadow-lg bg-white">
    <ul class="text-center">
      <li class={`rounded p-1 mb-2 w-28 ${tagFilter === '' ? 'font-bold bg-blue-200' : ''} active:bg-blue-200`}>
        <button on:click={() => getTag('')} class="block w-full h-full">#All posts</button>
      </li>
      {#each tags as tag}
        <li class={`rounded p-1 mb-2 ${tag === tagFilter ? 'font-bold bg-blue-200' : ''} active:bg-blue-200`}>
          <button on:click={() => getTag(tag)} class="block w-full h-full">#{tag}</button>
        </li>
      {/each}
    </ul>
  </div>
</div>
