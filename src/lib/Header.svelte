<script>
  import { page } from '$app/stores';
  const routes = [
    { href: '/', name: 'Home' },
    { href: '/blog', name: 'Blog' },
    { href: '/projects', name: 'Projects' },
  ];
</script>

<header class="bg-white">
  <nav class="h-16 border-b-2 border-black">
    <div class="container mx-auto flex">
      <ul class="flex justify-center">
        {#each routes as route}
          <li
            class={`m-4 hover:font-bold hover:text-blue-600 ${
              route.href === $page.path ? 'text-blue-600 font-bold underline' : 'text-black'
            }`}
          >
            <a href={route.href}>{route.name}</a>
          </li>
        {/each}
      </ul>
      <div class="flex-grow" />
      <ul class="flex justify-center">
        <li class="m-4 hover:font-bold hover:text-blue-600">
          <a class="flex items-center" href="https://github.com/BrendyRyan" target="_blank" rel="noopener noreferrer">
            <img class="max-h-8 mr-1" src="/GitHub-Mark-32px.png" alt="GitHub Logo" />Github</a
          >
        </li>
        <li class="m-4 hover:font-bold hover:text-blue-600">
          <a
            class="flex items-center"
            href="https://www.linkedin.com/in/brendan-ryan-95850986/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="max-h-8 mr-1" src="/LI-In-Bug.png" alt="Linked In Logo" />LinkedIn</a
          >
        </li>
      </ul>
    </div>
  </nav>
</header>
