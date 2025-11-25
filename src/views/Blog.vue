<template>
  <section>
    <div class="container">
      <div class="section-heading">
        <p class="section-eyebrow">Notes</p>
        <h2>Writing about code, craft, and career</h2>
        <p class="section-subtitle">Lightweight essays and templates I share with mentees and clients.</p>
      </div>

      <div class="blog-grid">
        <article v-for="post in posts" :key="post.title" class="glass-card blog-card">
          <div class="blog-meta">
            <span>{{ post.date }}</span>
            <span class="tag">{{ post.category }}</span>
          </div>
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <div class="blog-tags">
            <span v-for="tag in post.tags" :key="tag" class="stack-chip">{{ tag }}</span>
          </div>
          <a :href="post.url" class="btn btn-ghost">Read article</a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const posts = [
  {
    title: 'Designing navigation that guides users gently',
    description: 'My step-by-step approach to create nav bars that scale across viewports without overwhelming users.',
    date: 'Nov 2024',
    category: 'Product',
    tags: ['UX', 'Accessibility', 'Vue'],
    url: '#'
  },
  {
    title: 'Setting up a Vue + Express contact flow',
    description: 'How I connect frontend forms to an Express API with validation, rate limiting, and simple monitoring.',
    date: 'Oct 2024',
    category: 'Engineering',
    tags: ['Vue', 'Express', 'Forms'],
    url: '#'
  },
  {
    title: 'Self-review checklist for junior devs',
    description: 'The template I use before handing off work. It keeps reviews smoother and reduces back-and-forth.',
    date: 'Sep 2024',
    category: 'Career',
    tags: ['Growth', 'Process'],
    url: '#'
  }
]
</script>

<style scoped>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.blog-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.btn-ghost {
  width: fit-content;
}
</style>
