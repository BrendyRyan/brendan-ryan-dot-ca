<script>
  import { scale, fly } from 'svelte/transition';
  export let post;
</script>

<div class="mt-4 max-w-md mx-auto shadow-lg background p-4" in:scale out:fly>
  <a href={`/blog/${post.slug}`} class="grid grid-rows-layout h-full items-center">
    <div>
      <h4 class="font-bold border-b-2 inline-block">{post.title}</h4>
      <p class="mt-4">{post.summary}</p>
    </div>
    <img src={post.image} alt="Blog pic" class="mb-4 bg-white rounded max-h-44 mt-4 shadow justify-self-center" />
    <div>
      <p class="text-xs">Published: {new Date(post.date).toDateString()} || {post.readTime} read</p>
      <p class="text-xs">Updated: {new Date(post.updatedDate).toDateString()}</p>
    </div>
  </a>
</div>

<style>
  .background {
    background: rgb(219, 234, 254);
    background: linear-gradient(315deg, rgba(219, 234, 254, 1) 25%, rgba(255, 255, 255, 1) 75%);
  }
</style>
