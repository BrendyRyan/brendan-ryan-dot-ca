<script>
  import { page } from '$app/stores';
  const routes = [
    { href: '/', name: 'Home' },
    { href: '/blog', name: 'Blog' },
    { href: '/projects', name: 'Projects' },
  ];
</script>

<header>
  <nav class="h-16 border-b-2 border-black flex">
    <ul class="flex justify-center">
      {#each routes as route}
        <li
          class={`m-4 active:underline hover:font-bold ${
            route.href === $page.path ? 'text-indigo-400 font-bold' : 'text-black'
          }`}
        >
          <a href={route.href}>{route.name}</a>
        </li>
      {/each}
    </ul>
    <div class="flex-grow" />
    <ul class="flex justify-center">
      <li class="m-4 hover:font-bold">
        <a class="flex items-center" href="https://github.com/BrendyRyan" target="_blank" rel="noopener noreferrer">
          <img class="max-h-8 mr-1" src="../../../static/GitHub-Mark-32px.png" alt="GitHub Logo" />Github</a
        >
      </li>
      <li class="m-4 hover:font-bold">
        <a
          class="flex items-center"
          href="https://www.linkedin.com/in/brendan-ryan-95850986/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="max-h-8 mr-1" src="../../../static/LI-In-Bug.png" alt="Linked In Logo" />LinkedIn</a
        >
      </li>
    </ul>
  </nav>
</header>
