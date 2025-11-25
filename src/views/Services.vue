<template>
  <section>
    <div class="container">
      <div class="section-heading">
        <p class="section-eyebrow">Services</p>
        <h2>Full-stack support for your next launch</h2>
        <p class="section-subtitle">
          From initial wireframe to production deployment, I cover the essentials so you can focus on the business outcome.
        </p>
      </div>

      <div class="services-grid">
        <article v-for="service in services" :key="service.title" class="glass-card service-card">
          <div class="service-icon">{{ service.icon }}</div>
          <div class="service-body">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul class="list-reset service-list">
              <li v-for="item in service.items" :key="item">{{ item }}</li>
            </ul>
            <div class="service-tags">
              <span v-for="tag in service.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>

      <div class="process glass-card">
        <h3>How we can work together</h3>
        <ol class="process-list">
          <li v-for="step in process" :key="step.title">
            <span>{{ step.step }}</span>
            <div>
              <h4>{{ step.title }}</h4>
              <p>{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Product-ready websites',
    description: 'Marketing sites, landing pages, and dashboards that feel polished on every device.',
    icon: '🌐',
    items: ['Component-driven UI', 'Animation & micro-interactions', 'SEO & analytics baked in'],
    tags: ['Vue', 'GSAP', 'Responsive']
  },
  {
    title: 'Design systems & handoff',
    description: 'Translate brand styles into reusable tokens, document components, and create Figma guidelines.',
    icon: '🎨',
    items: ['Token library', 'Accessible color palettes', 'Developer docs'],
    tags: ['Figma', 'Design tokens']
  },
  {
    title: 'Backend pairing',
    description: 'Lightweight APIs to support contact forms, newsletters, and dashboards.',
    icon: '⚙️',
    items: ['Express/Python services', 'Data validation', 'Email & form integrations'],
    tags: ['REST', 'Express', 'Python']
  },
  {
    title: 'Care & maintenance',
    description: 'Version upgrades, bug fixes, and performance audits with actionable reports.',
    icon: '🛠️',
    items: ['Uptime monitoring', 'Dependency updates', 'Content tweaks'],
    tags: ['CI/CD', 'Testing']
  }
]

const process = [
  { step: '01', title: 'Discovery sprint', description: 'Clarify goals, success metrics, and constraints within 2–3 syncs.' },
  { step: '02', title: 'Design & prototype', description: 'Craft wireframes and clickable demos to validate flow early.' },
  { step: '03', title: 'Build & iterate', description: 'Ship development in weekly batches with demos and changelog notes.' },
  { step: '04', title: 'Launch & support', description: 'Handle deployments, docs, and QA to keep things running smoothly.' }
]
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.service-card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.service-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--accent-soft);
  display: grid;
  place-items: center;
  font-size: 1.5rem;
}

.service-list li {
  color: var(--text-secondary);
  padding-left: 1.1rem;
  position: relative;
}

.service-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent);
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.process {
  margin-top: 2rem;
}

.process-list {
  list-style: none;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  counter-reset: step;
  padding: 0;
}

.process-list li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: flex-start;
}

.process-list span {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--bg-secondary);
  display: grid;
  place-items: center;
  font-weight: 600;
  color: var(--accent);
}
</style>
