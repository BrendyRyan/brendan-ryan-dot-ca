<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  const routes = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About Me' },
    { href: '/blog', name: 'Blog' },
    { href: '/projects', name: 'Projects' },
    { href: '/credit', name: 'Credit' },
  ];

  onMount(() => {
    // Grab HTML Elements
    const btn = document.querySelector('button.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');

    // Add Event Listeners
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  });
</script>

<header class="bg-white top-0 sticky inset-x-0">
  <nav class="h-16 shadow">
    <div class="container mx-auto flex">
      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center ml-4">
        <button class="outline-none mobile-menu-button">
          <svg
            class="w-6 h-6 text-zinc-800"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <!-- Regular menu -->
      <ul class="hidden md:flex">
        {#each routes as route}
          <li class={`mt-5 mb-5 mr-5 hover:font-bold ${route.href === $page.path ? 'font-bold active' : 'text-black'}`}>
            <a href={route.href}>{route.name}</a>
          </li>
        {/each}
      </ul>
      <div class="flex-grow" />
      <!-- Social Links Regular -->
      <ul class="flex">
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
  <!-- Mobile menu -->
  <div class="hidden mobile-menu absolute shadow-lg bg-white w-40">
    <ul class="text-center">
      {#each routes as route}
        <li class={`m-5 hover:font-bold ${route.href === $page.path ? 'font-bold active' : 'text-black'}`}>
          <a href={route.href}>{route.name}</a>
        </li>
      {/each}
    </ul>
  </div>
</header>

<style>
  .active {
    box-shadow: 0 2px 0 red;
  }
</style>
