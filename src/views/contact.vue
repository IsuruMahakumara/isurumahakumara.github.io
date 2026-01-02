<template>
  <div class="contact-page">
    <app-navigation></app-navigation>
    <main class="contact-main">
      <div class="container">
        <div class="contact-content">
          <h1 class="contact-title">Get in Touch</h1>
          <p class="contact-subtitle">Feel free to reach out for collaborations or opportunities.</p>
          
          <div class="contact-links">
            <a href="mailto:imahakumara@gmail.com" class="contact-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div class="contact-info">
                <span class="contact-label">Email</span>
                <span class="contact-value">imahakumara@gmail.com</span>
              </div>
            </a>

            <a href="tel:+94713377500" class="contact-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div class="contact-info">
                <span class="contact-label">Phone</span>
                <span class="contact-value">+94 71 33 77 500</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/isuru-mahakumara-631983103/" target="_blank" rel="noopener" class="contact-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <div class="contact-info">
                <span class="contact-label">LinkedIn</span>
                <span class="contact-value">isuru-mahakumara</span>
              </div>
            </a>

            <a href="https://github.com/IsuruMahakumara" target="_blank" rel="noopener" class="contact-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </div>
              <div class="contact-info">
                <span class="contact-label">GitHub</span>
                <span class="contact-value">IsuruMahakumara</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import AppNavigation from '../components/navigation.vue'
import AppFooter from '../components/footer.vue'

useHead({
  title: 'Contact - Isuru Mahakumara',
  meta: [
    { property: 'og:title', content: 'Contact - Isuru Mahakumara' },
  ],
})
</script>

<style scoped>
.contact-page {
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: var(--color-surface-elevated);
}

.contact-main {
  flex: 1;
  display: flex;
  padding: var(--spacing-4xl) 0;
  align-items: center;
}

.contact-content {
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}

.contact-title {
  color: var(--color-on-surface);
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-3xl);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-heading);
  letter-spacing: var(--letter-spacing-heading);
  text-transform: uppercase;
}

.contact-subtitle {
  color: var(--color-on-surface-secondary);
  margin: 0 0 var(--spacing-3xl);
  font-size: var(--font-size-lg);
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.contact-item {
  gap: var(--spacing-lg);
  display: flex;
  padding: var(--spacing-xl);
  background: var(--color-surface);
  align-items: center;
  border-radius: var(--border-radius-lg);
  text-decoration: none;
  border: 1px solid var(--color-border);
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.contact-item:hover {
  transform: translateX(4px);
  border-color: var(--color-primary);
}

.contact-icon {
  color: var(--color-primary);
  width: 48px;
  height: 48px;
  display: flex;
  flex-shrink: 0;
  background: color-mix(in srgb, var(--color-primary) 10%, transparent);
  align-items: center;
  border-radius: var(--border-radius-md);
  justify-content: center;
}

.contact-info {
  display: flex;
  text-align: left;
  flex-direction: column;
}

.contact-label {
  color: var(--color-on-surface-secondary);
  font-size: var(--font-size-sm);
}

.contact-value {
  color: var(--color-on-surface);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
}

@media (max-width: 479px) {
  .contact-item {
    padding: var(--spacing-lg);
  }

  .contact-icon {
    width: 40px;
    height: 40px;
  }
}
</style>

