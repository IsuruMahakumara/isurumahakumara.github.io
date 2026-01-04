<template>
  <div class="page">
    <app-navigation></app-navigation>

    <main>
      <section class="section contact-section">
        <div class="container">
          <header class="page-header">
            <h1 class="page-title">Contact</h1>
            <p class="page-intro">
              Feel free to reach out for collaborations or opportunities.
            </p>
          </header>

          <div class="contact-list">
            <a href="mailto:imahakumara@gmail.com" class="contact-item">
              <span class="contact-label">Email</span>
              <span class="contact-value">imahakumara@gmail.com</span>
            </a>

            <a href="tel:+94713377500" class="contact-item">
              <span class="contact-label">Phone</span>
              <span class="contact-value">+94 71 33 77 500</span>
            </a>

            <a href="https://www.linkedin.com/in/isuru-mahakumara-631983103/" target="_blank" rel="noopener" class="contact-item">
              <span class="contact-label">LinkedIn</span>
              <span class="contact-value">isuru-mahakumara</span>
            </a>

            <a href="https://github.com/IsuruMahakumara" target="_blank" rel="noopener" class="contact-item">
              <span class="contact-label">GitHub</span>
              <span class="contact-value">IsuruMahakumara</span>
            </a>

            <a href="https://www.kaggle.com/isurumahakumara" target="_blank" rel="noopener" class="contact-item">
              <span class="contact-label">Kaggle</span>
              <span class="contact-value">isurumahakumara</span>
            </a>
          </div>
        </div>
      </section>
    </main>

    <app-footer></app-footer>
  </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import AppNavigation from '../components/navigation.vue'
import AppFooter from '../components/footer.vue'

useHead({
  title: 'Contact — Isuru Mahakumara',
  meta: [
    { property: 'og:title', content: 'Contact — Isuru Mahakumara' },
  ],
})
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  display: flex;
  align-items: center;
}

.contact-section {
  width: 100%;
}

.page-header {
  margin-bottom: var(--spacing-3xl);
}

.page-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: -0.02em;
  margin-bottom: var(--spacing-md);
}

.page-intro {
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
}

.contact-list {
  max-width: 28rem;
}

.contact-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-xl);
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid var(--color-border);
  transition: border-color 0.15s ease;
}

.contact-item:first-child {
  border-top: 1px solid var(--color-border);
}

.contact-item:hover {
  border-color: var(--color-text);
}

.contact-label {
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
}

.contact-value {
  color: var(--color-text);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

@media (max-width: 480px) {
  .contact-item {
    flex-direction: column;
    gap: var(--spacing-xs);
  }
}
</style>
