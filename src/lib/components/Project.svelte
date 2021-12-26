<script>
  export let project;
</script>

<div class="p-2 shadow-md rounded bg-blue-100">
  <a href={`/projects/${project.slug}`}>
    <img src={project.image} alt="Project pic" class="mb-4 bg-white rounded max-h-44" />
    <h4 class="font-bold">{project.title}</h4>
    <p class="text-base">{project.summary}</p>
    <p class="text-base">Tech used: {project.tech}</p>
    <p class="text-xs">Published: {new Date(project.date).toDateString()}</p>
    <p class="text-xs">Updated: {new Date(project.updatedDate).toDateString()}</p>
  </a>
</div>
