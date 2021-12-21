<script context="module">
  export async function load({ page }) {
    const tagFilter = page.query.get('tag') || '';

    //get all blog posts, map over the list and return the metadata for each one.
    const posts = import.meta.globEager('../../../src/posts/**/*.md');
    const postsList = Object.values(posts);
    let postsMeta = postsList
      .map((post) => {
        return post.metadata;
      })
      .sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));

    // get a flat array of tags from each blog post
    const tagsList = postsMeta
      .map((tag) => {
        return tag.tags;
      })
      .flat()
      .sort();
    // get just unique tags
    const tags = [...new Set(tagsList)];

    // if user filters tags, then update postsMeta with filtered data
    if (tagFilter !== '') {
      postsMeta = postsMeta.filter((post) => {
        return post.tags.includes(tagFilter);
      });
    }

    return {
      props: {
        posts: postsMeta,
        tags: tags,
        tagFilter: tagFilter,
      },
    };
  }
</script>

<script>
  export let posts;
  export let tags;
  export let tagFilter;
  import BlogPost from '$lib/BlogPost.svelte';
</script>

<svelte:head>
  <title>Blog Posts</title>
</svelte:head>

<div class="flex justify-between">
  <div class="mr-16">
    <h2 class="text-3xl">Blog</h2>
    <h3 class="text-base mt-4">I write about Excel, Javascript, accounting systems, and more!</h3>
    <hr class="border-0 bg-zinc-800 h-px" />
    {#each posts as post}
      <BlogPost {post} />
    {/each}
  </div>
  <div class="mt-12">
    <h2>Tags</h2>
    <hr class="border-0 bg-zinc-800 h-px" />
    <ul class="mt-2">
      <li class={`rounded p-1 mb-2 w-28 ${tagFilter === '' ? 'font-bold bg-red-200' : 'bg-red-100'} hover:bg-red-200`}>
        <a href="/blog">#All posts</a>
      </li>
      {#each tags as tag}
        <li class={`rounded p-1 mb-2 ${tag === tagFilter ? 'font-bold bg-red-200' : 'bg-red-100'} hover:bg-red-200`}>
          <a href={`/blog?tag=${tag}`}>#{tag}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>
