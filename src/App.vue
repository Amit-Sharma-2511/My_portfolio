<template>
  <div :data-theme="theme" class="app-shell">
    <header class="navbar">
      <div class="container nav-container">
        <router-link to="/" class="logo" @click="closeMenu">
          Amit<span>Sharma</span>
        </router-link>

        <nav :class="['nav-links', { open: isMenuOpen }]">
          <router-link
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="nav-link"
            @click="closeMenu"
          >
            {{ item.label }}
          </router-link>
        </nav>

        <div class="nav-actions">
          <button class="theme-toggle" @click="toggleTheme" :aria-label="themeLabel">
            <span class="theme-icon">{{ themeIcon }}</span>
            <span class="theme-label">{{ themeLabel }}</span>
          </button>
          <router-link to="/contact" class="btn btn-primary">Let's talk</router-link>
        </div>

        <button class="hamburger" :class="{ active: isMenuOpen }" @click="toggleMenu" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div v-if="isMenuOpen" class="nav-overlay" @click="closeMenu"></div>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="footer">
      <div class="container footer-grid">
        <div>
          <p class="footer-title">Amit Sharma</p>
          <p class="footer-text">Building thoughtful digital experiences.</p>
        </div>
        <div class="footer-meta">
          <p>&copy; 2025 Amit Sharma</p>
          <p class="footer-text">Designed and developed in Vue.js, JS and HTML</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

const theme = ref<'light' | 'dark'>('light')
const isMenuOpen = ref(false)

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' }
]

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const themeLabel = computed(() => (theme.value === 'light' ? 'Dark mode' : 'Light mode'))
const themeIcon = computed(() => (theme.value === 'light' ? '🌙' : '☀️'))

onMounted(() => {
  if (typeof window === 'undefined') return

  const storedTheme = window.localStorage.getItem('theme') as 'light' | 'dark' | null
  if (storedTheme) {
    theme.value = storedTheme
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.value = 'dark'
  }

  document.documentElement.setAttribute('data-theme', theme.value)
})

watch(theme, (value) => {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('theme', value)
  document.documentElement.setAttribute('data-theme', value)
})
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-shell main {
  flex: 1;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(20px);
  background: color-mix(in srgb, var(--bg-primary) 85%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--border) 60%, transparent);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1rem 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: var(--text-primary);
}

.logo span {
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  color: var(--text-secondary);
  font-weight: 500;
  transition: color 0.2s ease, background 0.2s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 10%, transparent);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.theme-toggle {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border: 1px solid var(--border);
  background: color-mix(in srgb, var(--bg-secondary) 80%, transparent);
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  cursor: pointer;
  color: var(--text-secondary);
  transition: border 0.2s ease, color 0.2s ease;
}

.theme-toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.theme-icon {
  font-size: 1.1rem;
}

.theme-label {
  font-size: 0.9rem;
  font-weight: 500;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.nav-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
}

.footer {
  margin-top: auto;
  border-top: 1px solid var(--border);
  padding: 2rem 0;
  background: color-mix(in srgb, var(--bg-secondary) 90%, transparent);
}

.footer-grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.footer-title {
  font-weight: 700;
  font-size: 1.1rem;
}

.footer-text {
  color: var(--text-secondary);
}

.footer-meta {
  text-align: right;
}

@media (max-width: 900px) {
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--bg-primary);
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--border);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-actions {
    margin-left: auto;
  }

  .hamburger {
    display: flex;
  }
}

@media (max-width: 600px) {
  .nav-container {
    padding: 0.75rem 0;
  }

  .nav-actions {
    display: none;
  }

  .nav-links {
    padding-bottom: 2rem;
  }
}
</style>
