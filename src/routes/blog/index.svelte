<script context="module">
  export async function load({ page }) {
    const tagFilter = page.query.get('tag') || '';

    //get all blog posts, map over the list and return the metadata for each one.
    const posts = import.meta.globEager('../../../src/posts/*.md');
    const postsList = Object.values(posts);
    let postsMeta = postsList.map((post) => {
      return post.metadata;
    });

    // get a flat array of tags from each blog post
    const tagsList = postsMeta
      .map((tag) => {
        return tag.tags;
      })
      .flat();
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
      },
    };
  }
</script>

<script>
  export let posts;
  export let tags;
</script>

<svelte:head>
  <title>Blog Posts</title>
</svelte:head>

<h1>Blog Posts</h1>
<hr class="border-0 bg-black text-black h-px" />

<div class="grid">
  <ul class="item-a">
    {#each posts as post}
      <li>
        <a href={`/blog/${post.slug}`}>{post.title}</a>
        <p>{post.summary}</p>
        <p class="date">{new Date(post.date).toDateString()}</p>
      </li>
    {/each}
  </ul>
  <div class="item-b">
    <h2>Tags</h2>
    <ul>
      <li><a href="/blog">#All posts</a></li>
      {#each tags as tag}
        <li>
          <a href={`/blog?tag=${tag}`}>#{tag}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  .item-a {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  a {
    text-decoration: underline;
    font-weight: bold;
  }
  li {
    margin-bottom: 0.5rem;
  }
  p.date {
    font-style: italic;
  }
</style>
