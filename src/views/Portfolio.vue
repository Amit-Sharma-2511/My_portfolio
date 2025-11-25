<template>
  <section>
    <div class="container">
      <div class="section-heading">
        <p class="section-eyebrow">Work</p>
        <h2>Live projects and experiments</h2>
        <p class="section-subtitle">
          Selected work ranging from client websites to personal explorations. Each project includes a short changelog.
        </p>
      </div>

      <div class="portfolio-grid">
        <article v-for="project in projects" :key="project.title" class="glass-card project-card">
          <div class="project-badge">
            <span>{{ project.category }}</span>
            <span>{{ project.year }}</span>
          </div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>

          <ul class="list-reset project-points">
            <li v-for="point in project.highlights" :key="point">{{ point }}</li>
          </ul>

          <div class="tech-stack">
            <span v-for="tech in project.stack" :key="tech" class="stack-chip">{{ tech }}</span>
          </div>

          <div class="project-actions">
            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              rel="noreferrer"
              class="btn btn-secondary"
            >
              Live demo
            </a>
            <router-link
              v-if="project.caseStudyPath"
              :to="project.caseStudyPath"
              class="btn btn-ghost"
            >
              Case study
            </router-link>
            <a
              v-else-if="project.repoUrl"
              :href="project.repoUrl"
              target="_blank"
              rel="noreferrer"
              class="btn btn-ghost"
            >
              Case study
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const projects = [
  {
    title: 'Wellness Clinic Website',
    description: 'Redesigned a healthcare site with appointment booking, service pages, and bilingual content.',
    highlights: ['Reusable content blocks', 'CMS handoff documentation', '95+ Lighthouse performance'],
    stack: ['Vue 3', 'TypeScript', 'Headless CMS', 'Netlify'],
    category: 'Client',
    year: '2024',
    demoUrl: 'https://fortisphysiotherapy.com/',
    caseStudyPath: '/case-studies/fortis-physiotherapy'
  },
  {
    title: 'Personal Portfolio v2',
    description: 'This site — designed with soft gradients, accessible colors, and motion principles.',
    highlights: ['Theme toggle with persistence', 'Component library driven layout', 'Responsive nav system'],
    stack: ['Vue', 'Vite', 'CSS Modules'],
    category: 'Personal',
    year: '2024',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    title: 'Python Analytics Dashboard',
    description: 'Simple analytics dashboard for tracking engagement metrics with downloadable reports.',
    highlights: ['Flask API endpoints', 'JWT auth for admin view', 'CSV export for weekly reports'],
    stack: ['Python', 'Flask', 'Chart.js', 'SQLite'],
    category: 'Study',
    year: '2023',
    demoUrl: '#',
    repoUrl: '#'
  }
]
</script>

<style scoped>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-badge {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.project-points li {
  padding-left: 1.1rem;
  position: relative;
  color: var(--text-secondary);
}

.project-points li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent);
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
}

.btn-ghost {
  background: transparent;
}
</style>
