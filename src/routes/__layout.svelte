<script>
  import '../app.css';
  /*   import '../../styles/normalize.css';
  import '../../styles/reset.css'; */
  import Footer from '$lib/Footer.svelte';
  import Header from '$lib/Header.svelte';
</script>

<div class="container mx-auto">
  <Header>
    <main class="flex-grow p-8"><slot /></main>
  </Header>
  <Footer />
</div>

<slot />
