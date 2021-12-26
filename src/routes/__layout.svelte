<script>
  import '../app.css';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
</script>

<div class="background">
  <div class="h-screen flex flex-col justify-between text-zinc-800 pt-16">
    <Header />
    <main class="container mx-auto flex-grow pt-8 text-lg"><slot /></main>
    <Footer />
  </div>
</div>

<style>
  /*   div.background {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%239c9c9c' fill-opacity='0.07'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  } */
</style>
