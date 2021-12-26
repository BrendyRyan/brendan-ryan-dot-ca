<script context="module">
  import { projects } from '$lib/utils/projects';
  export async function load({ page }) {
    const tagFilter = page.query.get('tag') || '';

    //get all blog posts, map over the list and return the metadata for each one.
    let projectsList = projects.sort((a, b) => (a.id > b.id ? -1 : b.id > a.id ? 1 : 0));

    // get a flat array of tags from each blog post
    const tagsList = projectsList
      .map((tag) => {
        return tag.tags;
      })
      .flat()
      .sort();
    // get just unique tags
    const tags = [...new Set(tagsList)];

    // if user filters tags, then update postsMeta with filtered data
    if (tagFilter !== '') {
      projectsList = projectsList.filter((post) => {
        return post.tags.includes(tagFilter);
      });
    }

    return {
      props: {
        projectsList: projectsList,
        tags: tags,
        tagFilter: tagFilter,
      },
    };
  }
</script>

<script>
  import { onMount } from 'svelte';
  export let projectsList;
  export let tags;
  export let tagFilter;
  import Project from '$lib/components/Project.svelte';

  onMount(() => {
    // Grab HTML Elements
    const btn = document.querySelector('button.tags-menu-button');
    const menu = document.querySelector('.tag-menu');

    // Add Event Listeners
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  });
</script>

<svelte:head>
  <title>Blog Posts</title>
</svelte:head>

<div class="flex justify-between">
  <div>
    <h2 class="text-3xl">Projects</h2>
    <h3 class="text-base mt-4">Projects that I've worked on.</h3>
  </div>
  <div class="hidden md:flex md:w-24">
    <div class="self-end">
      <h3 class="text-base">Tech Used</h3>
    </div>
  </div>
  <!-- mobile menu -->
  <div class="md:hidden flex items-center self-end">
    <button class="outline-none tags-menu-button bg-blue-200 p-1 rounded w-20">Tech</button>
  </div>
</div>
<hr class="border-0 bg-zinc-800 h-px" />
<!-- Repeat structure of above so blogs and tags fall under the right column -->
<div class="flex justify-between">
  <!-- Blog posts -->
  <section class="grid gap-4 grid-cols-1 mt-2 xl:grid-cols-2">
    {#each projectsList as project}
      <Project {project} />
    {/each}
  </section>
  <!-- Regular tags menu -->
  <div class="hidden md:block ml-4">
    <ul class="mt-2">
      <li class={`rounded p-1 mb-2 ${tagFilter === '' ? 'font-bold bg-blue-200' : 'bg-blue-100'} hover:bg-blue-200`}>
        <a href="/projects" class="block w-full h-full">#All projects</a>
      </li>
      {#each tags as tag}
        <li
          class={`rounded p-1 mb-2 min-w-max ${
            tag === tagFilter ? 'font-bold bg-blue-200' : 'bg-blue-100'
          } hover:bg-blue-200`}
        >
          <a href={`/projects?tag=${tag}`} class="block w-full h-full">#{tag}</a>
        </li>
      {/each}
    </ul>
  </div>
  <!-- Mobile menu -->
  <div class="hidden tag-menu absolute right-0 shadow-lg bg-white">
    <ul class="text-center">
      <li class={`rounded p-1 mb-2 ${tagFilter === '' ? 'font-bold bg-blue-200' : ''} active:bg-blue-200`}>
        <a href="/projects">#All projects</a>
      </li>
      {#each tags as tag}
        <li class={`rounded p-1 mb-2 ${tag === tagFilter ? 'font-bold bg-blue-200' : ''} active:bg-blue-200`}>
          <a href={`/projects?tag=${tag}`}>#{tag}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>
