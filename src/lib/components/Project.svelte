<script>
  import { scale, fly } from 'svelte/transition';
  export let project;
</script>

<div class="mt-4 max-w-md mx-auto shadow-lg background p-4" in:scale out:fly>
  <a href={`/projects/${project.slug}`} class="grid grid-rows-layout h-full items-center">
    <div>
      <h4 class="font-bold border-b-2 inline-block">{project.title}</h4>
      <p class="mt-4 text-base">{project.summary}</p>
      <p class="mt-4 text-base border-b inline-block">Tech used:</p>
      <ul class="grid grid-cols-2">
        {#each project.tags as tag}
          <li class="text-base">{tag}</li>
        {/each}
      </ul>
    </div>
    <img src={project.image} alt="Project pic" class="mb-4 bg-white rounded max-h-44 mt-4 shadow justify-self-center" />
    <div>
      <p class="text-xs">Published: {new Date(project.date).toDateString()}</p>
      <p class="text-xs">Updated: {new Date(project.updatedDate).toDateString()}</p>
    </div>
  </a>
</div>

<style>
  .background {
    background: rgb(219, 234, 254);
    background: linear-gradient(315deg, rgba(219, 234, 254, 1) 25%, rgba(255, 255, 255, 1) 75%);
  }
</style>
