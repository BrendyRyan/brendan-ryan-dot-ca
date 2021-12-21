<script>
  export let post;
</script>

<div class="mb-8 mt-4 shadow-md rounded p-2 h-64 bg-zinc-100">
  <a href={`/blog/${post.slug}`}>
    <img src={post.image} alt="Blog pic" class="max-h-32 max-w-xs mb-4 bg-white rounded" />
    <h4 class="font-bold">{post.title}</h4>
    <p class="text-base">{post.summary}</p>
    <p class="text-xs">Published: {new Date(post.date).toDateString()} || {post.readTime} read</p>
    <p class="text-xs">Updated: {new Date(post.updatedDate).toDateString()}</p>
  </a>
</div>
