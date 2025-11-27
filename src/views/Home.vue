<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-content glass-card">
        <p class="chip">Based in India · Available for freelance</p>
        <h1>Creating thoughtful websites with clean code.</h1>
        <p class="hero-description">
          I recently graduated with a BE/BTech degree and already shipped live projects.
          I combine Vue.js, JS and HTML. I have strong communication skills in (Hindi & English) and build experiences
          that feel effortless for users.
        </p>
        <div class="hero-cta">
          <router-link to="/portfolio" class="btn btn-primary">Explore projects</router-link>
          <router-link to="/contact" class="btn btn-ghost">Schedule a call</router-link>
        </div>
        <div class="stat-grid">
          <div v-for="stat in stats" :key="stat.label" class="stat-card">
            <p class="stat-value">{{ stat.value }}</p>
            <p class="stat-label">{{ stat.label }}</p>
            <p class="stat-detail">{{ stat.detail }}</p>
          </div>
        </div>
      </div>

      <div class="hero-media glass-card">
        <div class="hero-photo">
          <img :src="profilePhoto" alt="Amit Sharma portrait" loading="lazy" />
          <div class="photo-badge">
            <span class="badge-dot"></span>
            Crafting web experiences daily
          </div>
        </div>
        <div class="hero-media-inner">
          <p class="eyebrow">Tech stack</p>
          <div class="skill-cloud">
            <span v-for="skill in primaryStack" :key="skill" class="stack-chip">{{ skill }}</span>
          </div>
          <div class="hero-highlight">
            <p class="hero-highlight-title">Live projects shipped</p>
            <p class="hero-highlight-value">01</p>
            <p class="hero-highlight-desc">Portfolio, business sites & dashboards</p>
          </div>
          <div class="availability">
            <span class="availability-dot"></span>
            Currently accepting new work
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="approach">
    <div class="container">
      <div class="section-heading">
        <p class="section-eyebrow">Process</p>
        <h2>My design process</h2>
        <p class="section-subtitle">
          Every build goes through a tight loop of discovery, design, development, and launch support so the final
          product reflects your business needs.
        </p>
      </div>
      <div class="approach-grid">
        <article v-for="step in approachSteps" :key="step.title" class="glass-card approach-card">
          <p class="approach-step">{{ step.step }}</p>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
          <ul class="list-reset approach-list">
            <li v-for="point in step.points" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-heading">
        <p class="section-eyebrow">What I bring</p>
        <h2>Blend of visual sense and engineering discipline</h2>
        <p class="section-subtitle">
          I focus on performance, accessibility, and user empathy so that every interaction feels polished.
        </p>
      </div>
      <div class="highlight-grid">
        <article v-for="highlight in highlights" :key="highlight.title" class="glass-card highlight-card">
          <div class="highlight-icon">{{ highlight.icon }}</div>
          <div>
            <h3>{{ highlight.title }}</h3>
            <p>{{ highlight.description }}</p>
          </div>
          <ul class="list-reset highlight-list">
            <li v-for="point in highlight.points" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <section class="skills">
    <div class="container">
      <div class="section-heading">
        <p class="section-eyebrow">Toolkit</p>
        <h2>Technologies I work with daily</h2>
        <p class="section-subtitle">
          From design systems to backend APIs, I stay close to modern practices and documented workflows.
        </p>
      </div>
      <div class="skills-grid">
        <div v-for="skill in skillAreas" :key="skill.title" class="glass-card skill-card">
          <div class="skill-card-header">
            <span class="skill-icon">{{ skill.icon }}</span>
            <div>
              <h3>{{ skill.title }}</h3>
              <p>{{ skill.subtitle }}</p>
            </div>
          </div>
          <div class="skill-progress">
            <div class="skill-progress-bar" :style="{ width: skill.confidence + '%' }"></div>
          </div>
          <div class="skill-tags">
            <span v-for="tag in skill.tags" :key="tag" class="stack-chip">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const profilePhoto = new URL('../aseast/photo.jpg', import.meta.url).href

const stats = [
  { label: 'Live websites', value: '01', detail: 'Fully deployed projects' },
  { label: 'Tech stack', value: '04+', detail: 'HTML · Vue · JS · CSS' },
  { label: 'Languages', value: '2', detail: 'Hindi + English' }
]

const primaryStack = ['Vue.js', 'TypeScript', 'Python', 'REST APIs', 'Tailwind', 'Figma']

const approachSteps = [
  {
    step: '01 · Discover',
    title: 'Research & strategy',
    description: 'Kickoff conversations, audits, and moodboards ensure the solution is anchored in real goals.',
    points: ['Existing site review', 'Persona & journey mapping', 'Scope + success metrics']
  },
  {
    step: '02 · Design',
    title: 'Structure & visuals',
    description: 'I iterate on layouts, typography, and interaction patterns directly in Figma and quick prototypes.',
    points: ['Information architecture', 'Responsive wireframes', 'UI components + tokens']
  },
  {
    step: '03 · Build',
    title: 'Coding sprints',
    description: 'Vue components, utility-first CSS, and performance budgets keep the build clean and maintainable.',
    points: ['Composable Vue setup', 'Accessible interactions', 'Performance + QA checkpoints']
  },
  {
    step: '04 · Launch',
    title: 'Handoff & support',
    description: 'Deployment, documentation, and post-launch monitoring close the loop with confidence.',
    points: ['CMS/editor training', 'Bug fixing window', 'Analytics + iteration plan']
  }
]

const highlights = [
  {
    icon: '🎯',
    title: 'Goal-driven solutions',
    description: 'I dissect requirements, document scope, and prototype flows that support business goals.',
    points: ['User journey mapping', 'Wireframes & prototypes', 'KPIs baked into dev']
  },
  {
    icon: '🚀',
    title: 'Rocket-fast delivery',
    description: 'Razor-sharp performance budgets plus DX tooling keep launches on schedule.',
    points: ['Code-splitting + caching', 'Automated lighthouse gates', 'CI-driven releases']
  },
  {
    icon: '🤝',
    title: 'Handshake-level trust',
    description: 'Transparent collaboration ensures every stakeholder stays aligned and confident.',
    points: ['Weekly checkpoints', 'Recorded walkthroughs', 'Actionable next steps']
  }
]

const skillAreas = [
  {
    title: 'Frontend craft',
    subtitle: 'Vue, Vite, Component driven',
    icon: '💻',
    confidence: 85,
    tags: ['Vue 3', 'Composition API', 'State Mgmt', 'Animations']
  },
  {
    title: 'Backend basics',
    subtitle: ' & Express APIs',
    icon: '🧱',
    confidence: 65,
    tags: ['REST', 'Express', 'Authentication', 'ORMs']
  },
  {
    title: 'UI systems',
    subtitle: 'Reusable design tokens',
    icon: '🎨',
    confidence: 75,
    tags: ['Design systems', 'Figma', 'Accessibility', 'Microcopy']
  },
  {
    title: 'Collaboration',
    subtitle: 'Docs, reviews, handoffs',
    icon: '🧭',
    confidence: 80,
    tags: ['Notion', 'GitHub', 'Agile notes', 'Client handoff']
  }
]
</script>

<style scoped>
.hero {
  padding-top: 4rem;
  background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent 45%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.4), transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--border) 70%, transparent);
}

.hero-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  align-items: stretch;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-description {
  font-size: 1.05rem;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.stat-card {
  padding: 1rem;
  border-radius: 1rem;
  background: color-mix(in srgb, var(--bg-secondary) 85%, transparent);
  border: 1px dashed color-mix(in srgb, var(--border) 80%, transparent);
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
}

.stat-label {
  font-weight: 600;
  margin-top: 0.35rem;
}

.stat-detail {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.hero-media {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    160deg,
    color-mix(in srgb, var(--bg-secondary) 85%, transparent),
    color-mix(in srgb, var(--bg-primary) 92%, rgba(15, 23, 42, 0.75))
  );
  border: 1px solid color-mix(in srgb, var(--border) 55%, transparent);
  box-shadow: 0 25px 60px color-mix(in srgb, rgba(15, 23, 42, 0.18), transparent);
}

.hero-photo {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--border) 45%, transparent);
  background: radial-gradient(circle at 30% 25%, color-mix(in srgb, var(--accent-soft) 40%, transparent), transparent 70%);
}

.hero-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.025);
  filter: saturate(0.92) contrast(1.05) brightness(1.02);
}

.hero-photo::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    185deg,
    color-mix(in srgb, var(--bg-primary) 40%, transparent) 0%,
    transparent 45%,
    color-mix(in srgb, rgba(15, 23, 42, 0.7), transparent) 100%
  );
  mix-blend-mode: soft-light;
  pointer-events: none;
}

.photo-badge {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--bg-primary) 35%, rgba(15, 23, 42, 0.75));
  color: var(--text-primary);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  backdrop-filter: blur(8px);
}

.badge-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fbbf24, #f97316);
  box-shadow: 0 0 12px rgba(249, 115, 22, 0.8);
}

.hero-media-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 0.25rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.skill-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hero-highlight {
  background: color-mix(in srgb, var(--bg-secondary) 90%, transparent);
  border-radius: 1.25rem;
  padding: 1.5rem;
  border: 1px solid color-mix(in srgb, var(--border) 70%, transparent);
}

.hero-highlight-title {
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
}

.hero-highlight-value {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  margin: 0.3rem 0;
}

.hero-highlight-desc {
  color: var(--text-secondary);
}

.availability {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
  font-weight: 600;
  width: fit-content;
}

.availability-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 6px rgba(34, 197, 94, 0.2);
}

.approach {
  background: color-mix(in srgb, var(--bg-secondary) 88%, transparent);
}

.approach-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.approach-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border: 1px solid color-mix(in srgb, var(--border) 70%, transparent);
}

.approach-step {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--accent);
}

.approach-list {
  display: grid;
  gap: 0.4rem;
  color: var(--text-secondary);
}

.approach-list li {
  padding-left: 1.1rem;
  position: relative;
}

.approach-list li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent);
}

.highlight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.highlight-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.highlight-icon {
  font-size: 2rem;
}

.highlight-list li {
  padding-left: 1.1rem;
  position: relative;
  color: var(--text-secondary);
}

.highlight-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent);
}

.skills {
  background: color-mix(in srgb, var(--bg-secondary) 60%, transparent);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-card-header {
  display: flex;
  gap: 1rem;
}

.skill-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--accent-soft);
  color: var(--accent);
  display: grid;
  place-items: center;
  font-size: 1.5rem;
}

.skill-progress {
  height: 6px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--border) 60%, transparent);
  overflow: hidden;
}

.skill-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-hover));
  border-radius: inherit;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .hero-cta {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>

