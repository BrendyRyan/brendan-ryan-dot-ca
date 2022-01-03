<!-- Assign current routes path to 'key' prop -->
<script context="module">
  export async function load({ page }) {
    return {
      props: {
        key: page.path,
      },
    };
  }
</script>

<script>
  import '../app.css';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import PageTransition from '$lib/components/PageTransition.svelte';
  export let key;
</script>

<div class="h-screen text-zinc-800 grid grid-rows-layout">
  <Header />
  <main class="container mx-auto mt-4 text-lg">
    <!-- Pass key prop to component so it knows when to transition -->
    <PageTransition refresh={key}>
      <slot />
    </PageTransition>
  </main>
  <Footer />
</div>
