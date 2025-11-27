<template>
  <section>
    <div class="container">
      <div class="section-heading">
        <p class="section-eyebrow">Feedback</p>
        <h2>Clients describe working with me as calm & collaborative</h2>
        <p class="section-subtitle">A few kind words from recent partners and mentors.</p>
      </div>

      <div class="testimonial-grid">
        <article v-for="testimonial in testimonials" :key="testimonial.name" class="glass-card testimonial-card">
          <div class="testimonial-rating">
            <span v-for="n in testimonial.rating" :key="n">★</span>
          </div>
          <p class="quote">“{{ testimonial.quote }}”</p>
          <div class="testimonial-footer">
            <div>
              <p class="author">{{ testimonial.name }}</p>
              <p class="role">{{ testimonial.role }}</p>
            </div>
            <span class="tag">{{ testimonial.project }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: 'nul',
    role: 'Clinic Director',
    project: 'nul',
    rating: 0,
    quote: 'No review yet'
  },
  // {
  //   name: 'Raghav Gupta',
  //   role: 'Startup Mentor',
  //   project: 'Portfolio revamp',
  //   rating: 5,
  //   quote: 'He brings a product mindset to every screen. Communication was bilingual and crystal-clear every step of the way.'
  // },
  // {
  //   name: 'Sonia Roy',
  //   role: 'Entrepreneur',
  //   project: 'Landing page',
  //   rating: 4,
  //   quote: 'Attention to detail is fantastic. The site loads fast on mobile and the content updates were handled without fuss.'
  // }
]
</script>

<style scoped>
.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.testimonial-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.testimonial-rating {
  color: #fbbf24;
  letter-spacing: 0.2em;
  font-size: 1.1rem;
}

.quote {
  font-size: 1rem;
  color: var(--text-primary);
  font-style: italic;
}

.testimonial-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.author {
  font-weight: 700;
  color: var(--text-primary);
}

.role {
  color: var(--text-secondary);
  font-size: 0.9rem;
}
</style>
