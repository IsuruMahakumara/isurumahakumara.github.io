<template>
  <div class="page">
    <app-navigation></app-navigation>
    
    <main class="not-found">
      <div class="container">
        <span class="error-code">404</span>
        <h1 class="error-title">Page not found</h1>
        <p class="error-message">The page you're looking for doesn't exist.</p>
        <router-link to="/" class="btn btn-outline">Go Home</router-link>
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
  title: '404 — Page Not Found',
})
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.not-found {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-4xl) var(--spacing-xl);
}

.error-code {
  display: block;
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-muted);
  letter-spacing: -0.03em;
  margin-bottom: var(--spacing-md);
}

.error-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-sm);
}

.error-message {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}
</style>
