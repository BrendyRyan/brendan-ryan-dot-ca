<script>
  import { page } from '$app/stores';
  const routes = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About Me' },
    { href: '/blog', name: 'Blog' },
    { href: '/projects', name: 'Projects' },
  ];
</script>

<header class="bg-white sticky top-0">
  <nav class="h-16 shadow">
    <div class="container mx-auto flex">
      <ul class="flex justify-center">
        {#each routes as route}
          <li class={`m-5 hover:font-bold ${route.href === $page.path ? 'font-bold active' : 'text-black'}`}>
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

<style>
  .active {
    box-shadow: 0 2px 0 red;
  }
</style>
