<template>
  <section>
    <div class="container">
      <div class="section-heading">
        <p class="section-eyebrow">Contact</p>
        <h2>Let’s build something great together</h2>
        <p class="section-subtitle">
          Prefer email over meetings? Same here. Send a quick note and I'll respond within 24 hours.
        </p>
      </div>

      <div class="contact-grid">
        <div class="contact-details glass-card">
          <div class="detail-card" v-for="card in contactCards" :key="card.title">
            <div class="detail-icon">{{ card.icon }}</div>
            <div>
              <p class="detail-title">{{ card.title }}</p>
              <p class="detail-value">{{ card.value }}</p>
            </div>
          </div>

          <div class="socials">
            <p class="detail-title">Elsewhere</p>
            <div class="social-chips">
              <a v-for="social in socials" :key="social.label" :href="social.url" class="tag" target="_blank"
                rel="noreferrer">
                {{ social.label }}
              </a>
            </div>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="contact-form glass-card" novalidate>
          <h3>Get in touch</h3>
          <div class="form-grid">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="form.name" required placeholder="Your name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" required placeholder="name@email.com" />
            </div>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" rows="5" required
              placeholder="What’s on your mind?"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Send message' }}
          </button>
          <p>The form is currently under development. Please email me directly for any inquiries.</p>
          <p v-if="submitMessage" class="submit-message" :class="submitMessage.variant" role="status"
            aria-live="polite">
            {{ submitMessage.text }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitMessage = ref<{ text: string; variant: 'success' | 'error' } | null>(null)
const isSubmitting = ref(false)

const contactCards = [
  { icon: '📧', title: 'Email', value: 'sharmaamit99526@gmail.com' },
  { icon: '📱', title: 'Phone', value: '+91 9015205260' },
  { icon: '🗣️', title: 'Languages', value: 'Hindi & English' }
]

const socials = [
  { label: 'GitHub', url: 'https://github.com/Amit-Sharma-2511' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/amit-sharma-14a020253/' },
  { label: 'Resume', url: '#' }
]

const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    submitMessage.value = null

    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })

    const result = await response.json()

    if (response.ok && result.success) {
      submitMessage.value = { text: 'Message sent successfully!', variant: 'success' }
      form.value = { name: '', email: '', message: '' }
    } else {
      submitMessage.value = {
        text: result?.error || 'Failed to send message. Please try again or email me directly.',
        variant: 'error'
      }
    }
  } catch (error) {
    submitMessage.value = {
      text: 'Network error. Please contact me directly at sharmaamit99526@gmail.com while I resolve this issue.',
      variant: 'error'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-card {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid color-mix(in srgb, var(--border) 70%, transparent);
}

.detail-card:last-of-type {
  border-bottom: none;
  padding-bottom: 0;
}

.detail-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: var(--accent-soft);
  display: grid;
  place-items: center;
  font-size: 1.4rem;
}

.detail-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.detail-value {
  color: var(--text-secondary);
}

.socials {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 600;
}

input,
textarea {
  width: 100%;
  padding: 0.9rem;
  border-radius: 1rem;
  border: 1px solid color-mix(in srgb, var(--border) 80%, transparent);
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: inherit;
}

input:focus,
textarea:focus {
  outline: 2px solid color-mix(in srgb, var(--accent) 50%, transparent);
  border-color: var(--accent);
}

.contact-form button {
  width: fit-content;
}

.submit-message {
  margin-top: 1rem;
  font-weight: 600;
}

.submit-message.success {
  color: #22c55e;
}

.submit-message.error {
  color: #f97316;
}

@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
