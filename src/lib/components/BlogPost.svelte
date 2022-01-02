<script>
  export let post;
</script>

<div class="p-2 shadow rounded bg-yellow-300 max-w-md mx-auto">
  <a href={`/blog/${post.slug}`} class="">
    <h4 class="font-bold">{post.title}</h4>
    <p class="text-base">{post.summary}</p>
    <img src={post.image} alt="Blog pic" class="mb-4 bg-white rounded max-h-44" />
    <div class="">
      <p class="text-xs">Published: {new Date(post.date).toDateString()} || {post.readTime} read</p>
      <p class="text-xs">Updated: {new Date(post.updatedDate).toDateString()}</p>
    </div>
  </a>
</div>
