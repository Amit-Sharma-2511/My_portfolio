<template>
  <section>
    <div class="container">
      <div class="section-heading">
        <p class="section-eyebrow">About Amit</p>
        <h2>Engineer with a product mindset</h2>
        <p class="section-subtitle">
          I care about the humans using the software as much as the code powering it. That means
          asking better questions, documenting decisions, and iterating quickly with feedback.
        </p>
      </div>

      <div class="about-grid">
        <article class="glass-card">
          <h3>Journey so far</h3>
          <p>
            Fresh BE/BTech graduate who immediately jumped into client work, shipping responsive frontends,
            connecting APIs, and handling deployments. I approach every project with a discovery-first lens.
          </p>
          <ul class="list-reset about-points">
            <li>Led 3+ end-to-end website launches for small businesses</li>
            <li>Translated requirements into modular Vue components</li>
            <li>Documented testing steps for hassle-free handoffs</li>
          </ul>
        </article>

        <article class="glass-card">
          <h3>Working style</h3>
          <p>
            Transparency and structure keep projects calm. I keep async-friendly notes, send short video demos,
            and highlight risks early.
          </p>
          <ul class="list-reset about-points">
            <li>Collaboration in Hindi & English</li>
            <li>Weekly status updates and Loom walkthroughs</li>
            <li>Thoughtful documentation for future contributors</li>
          </ul>
        </article>
      </div>

      <div class="timeline glass-card">
        <h3>Timeline</h3>
        <div class="timeline-items">
          <div v-for="item in timeline" :key="item.title" class="timeline-item">
            <div class="timeline-dot"></div>
            <div>
              <p class="timeline-period">{{ item.period }}</p>
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="values-grid">
        <article v-for="value in values" :key="value.title" class="glass-card value-card">
          <span class="value-icon">{{ value.icon }}</span>
          <div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const timeline = [
  {
    period: '2024 · Present',
    title: 'Freelance Web Developer',
    description: 'Crafted responsive marketing sites & dashboards with Vue + Express.'
  },
  {
    period: '2020 - 2024',
    title: 'BE/BTech Degree',
    description: 'Studied core CS fundamentals, data structures, networking, and software engineering.'
  }
]

const values = [
  {
    icon: '🧩',
    title: 'Systems thinking',
    description: 'Break problems into reusable components to keep codebases maintainable.'
  },
  {
    icon: '🗣️',
    title: 'Clear words',
    description: 'Documentation, meeting notes, and bilingual updates keep everyone aligned.'
  },
  {
    icon: '🧲',
    title: 'User empathy',
    description: 'Pair design research with analytics to refine flows rooted in real needs.'
  }
]
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.about-points li {
  padding-left: 1.1rem;
  position: relative;
  color: var(--text-secondary);
}

.about-points li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent);
}

.timeline {
  margin-bottom: 2rem;
}

.timeline-items {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: flex-start;
}

.timeline-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent);
  margin-top: 0.4rem;
  box-shadow: 0 0 0 6px var(--accent-soft);
}

.timeline-period {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.value-card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.value-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--accent-soft);
  display: grid;
  place-items: center;
  font-size: 1.5rem;
}
</style>
