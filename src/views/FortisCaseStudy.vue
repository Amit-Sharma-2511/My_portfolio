<template>
  <section class="case-study">
    <div class="container case-layout">
      <header class="case-hero glass-card">
        <p class="case-label">Case Study · Healthcare & Wellness</p>
        <h1>Fortis Physiotherapy — Wellness Clinic Website Redesign</h1>
        <p class="case-lede">
          Complete rebuild of a Canadian clinic’s digital presence. I led the Vue.js frontend,
          introduced a reusable component system, and wired an SMTP email workflow so patients
          could reach the team without friction.
        </p>
        <dl class="case-meta">
          <div>
            <dt>Role</dt>
            <dd>Frontend Developer, SMTP integration</dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>Q4 2024 · 6 weeks</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>Vue 3, Tailwind CSS, Node.js, PHPMailer</dd>
          </div>
        </dl>
      </header>

      <article class="glass-card case-content">
        <section>
          <h2>Project Context</h2>
          <p>
            Fortis Physiotherapy is a Canadian wellness clinic offering physiotherapy, health,
            massage therapy, and rehabilitation services. Their legacy website was slow, visually
            inconsistent, and difficult to update, which hurt trust with prospective patients.
            I was tasked with rebuilding the entire experience from scratch—UI, responsiveness,
            and a simple backend handoff.
          </p>
        </section>

        <section>
          <h2>Challenges</h2>
          <ul class="list-reset feature-list">
            <li>Outdated visuals that no longer reflected the clinic’s modern care standards</li>
            <li>Slow performance from legacy code, no mobile-first layout, and confusing navigation</li>
            <li>No reliable contact workflow; emails were manual and often missed</li>
          </ul>
        </section>

        <section>
          <h2>Goals</h2>
          <ul class="list-reset feature-list">
            <li>Create a clean, modern, and professional UI/UX that matched the brand</li>
            <li>Improve speed, responsiveness, and accessibility across all devices</li>
            <li>Build reusable Vue components so the team could update content easily</li>
            <li>Implement an SMTP-backed contact form to capture patient enquiries</li>
          </ul>
        </section>

        <section>
          <h2>Implementation</h2>
          <div class="implementation-grid">
            <div v-for="step in implementationSteps" :key="step.title" class="implementation-card">
              <p class="implementation-label">{{ step.title }}</p>
              <ul class="list-reset">
                <li v-for="item in step.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Results</h2>
          <ul class="list-reset feature-list">
            <li>Modern UI shipped with a cohesive type system and consistent spacing</li>
            <li>Faster performance scores and smoother navigation thanks to component reuse</li>
            <li>Responsive layouts validated across major breakpoints and devices</li>
            <li>Reliable PHPMailer/SMTP workflow powering the contact form submissions</li>
            <li>Positive feedback from both the client and my senior developer; first production launch</li>
          </ul>
        </section>

        <section>
          <h2>Testimonial</h2>
          <blockquote class="testimonial">
            “We are extremely happy with the new Fortis Physiotherapy website. The design is modern,
            clean, and much faster than before. Great work by the development team.”
          </blockquote>
        </section>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const implementationSteps = [
  {
    title: 'Design',
    items: [
      'Audited the outdated experience and mapped new information architecture',
      'Built a fresh UI system with clear typography, sections, and calming gradients',
      'Defined reusable components for hero areas, service cards, and testimonials'
    ]
  },
  {
    title: 'Development',
    items: [
      'Implemented Vue 3 components with Tailwind utility layers for consistency',
      'Crafted responsive layouts with smooth transitions and focus states',
      'Integrated a lightweight Node/PHPMailer SMTP endpoint for form delivery'
    ]
  },
  {
    title: 'Testing',
    items: [
      'Cross-device QA for performance, animation smoothness, and accessibility',
      'Validated navigation flows and contact form delivery on staging and production',
      'Paired with senior dev for final polish, bug fixes, and go-live sign-off'
    ]
  }
]
</script>

<style scoped>
.case-study {
  padding: 4rem 0;
}

.case-layout {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.case-hero h1 {
  font-size: clamp(2rem, 3vw, 2.8rem);
  margin-bottom: 1rem;
}

.case-label {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  color: var(--accent);
  margin-bottom: 1rem;
}

.case-lede {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.case-meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.case-meta dt {
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: var(--text-secondary);
}

.case-meta dd {
  margin: 0.25rem 0 0;
  font-weight: 600;
}

.case-content section + section {
  margin-top: 2rem;
}

.feature-list {
  display: grid;
  gap: 0.75rem;
  color: var(--text-secondary);
  margin-top: 1rem;
}

.feature-list li {
  padding-left: 1rem;
  position: relative;
}

.feature-list li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent);
}

.implementation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.implementation-card {
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.25rem;
  background: color-mix(in srgb, var(--bg-secondary) 80%, transparent);
}

.implementation-card ul {
  margin-top: 0.75rem;
  display: grid;
  gap: 0.5rem;
  color: var(--text-secondary);
}

.implementation-label {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.85rem;
  color: var(--accent);
}

.testimonial {
  margin-top: 1rem;
  padding: 1.5rem;
  border-left: 4px solid var(--accent);
  background: color-mix(in srgb, var(--bg-secondary) 85%, transparent);
  font-style: italic;
  color: var(--text-secondary);
}

@media (max-width: 700px) {
  .case-study {
    padding: 3rem 0;
  }

  .case-meta {
    grid-template-columns: 1fr;
  }
}
</style>

