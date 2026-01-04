<template>
  <div class="page">
    <app-navigation></app-navigation>

    <main>
      <!-- Header -->
      <section class="section">
        <div class="container">
          <header class="page-header">
            <h1 class="page-title">About</h1>
            <p class="page-intro">
              Data Scientist with a background in computational physics and machine learning.
            </p>
          </header>

          <!-- Education -->
          <div class="content-block">
            <h2 class="section-title">Education</h2>
            <div class="edu-item">
              <div class="edu-header">
                <h3 class="edu-degree">B.Sc (Hons) in Physics</h3>
                <span class="edu-period">2017 — 2020</span>
              </div>
              <p class="edu-institution">University of Sri Jayewardenepura</p>
              <p class="edu-details">Minors in Computer Science & Mathematics. Research in Computational Quantum Mechanics.</p>
            </div>
          </div>

          <!-- Background -->
          <div class="content-block">
            <h2 class="section-title">Background</h2>
            <div class="background-list">
              <div class="background-item">
                <h3 class="background-title">Physics</h3>
                <p class="background-desc">Classical and quantum mechanics, statistical physics, computational methods.</p>
              </div>
              <div class="background-item">
                <h3 class="background-title">Computer Science</h3>
                <p class="background-desc">Algorithms, data structures, software development.</p>
              </div>
              <div class="background-item">
                <h3 class="background-title">Mathematics</h3>
                <p class="background-desc">Linear algebra, calculus, statistics, numerical methods.</p>
              </div>
            </div>
          </div>

          <!-- Certifications -->
          <div class="content-block">
            <h2 class="section-title">Certifications</h2>
            <div class="cert-list">
              <div class="cert-item">
                <span class="cert-name">Microsoft AI & ML Engineering Professional Certificate</span>
                <span class="cert-issuer">Coursera • 2026</span>
              </div>
              <div class="cert-item">
                <span class="cert-name">Microsoft Python Development Professional Certificate</span>
                <span class="cert-issuer">Coursera • 2026</span>
              </div>
            </div>
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
  title: 'About — Isuru Mahakumara',
  meta: [
    { property: 'og:title', content: 'About — Isuru Mahakumara' },
    { name: 'description', content: 'Data Scientist with a strong foundation in physics and computational modelling.' },
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
}

.page-header {
  margin-bottom: var(--spacing-4xl);
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
  max-width: 36rem;
}

.content-block {
  margin-bottom: var(--spacing-3xl);
  padding-bottom: var(--spacing-3xl);
  border-bottom: 1px solid var(--color-border);
}

.content-block:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

/* Education */
.edu-item {
  max-width: 36rem;
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xs);
}

.edu-degree {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  margin: 0;
}

.edu-period {
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  white-space: nowrap;
}

.edu-institution {
  color: var(--color-text-secondary);
  margin: 0 0 var(--spacing-sm);
}

.edu-details {
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  margin: 0;
}

/* Background */
.background-list {
  display: grid;
  gap: var(--spacing-xl);
  max-width: 36rem;
}

.background-item {
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
}

.background-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.background-title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--spacing-xs);
}

.background-desc {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  margin: 0;
}

/* Certifications */
.cert-list {
  display: grid;
  gap: var(--spacing-md);
  max-width: 36rem;
}

.cert-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-lg);
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid var(--color-border);
}

.cert-item:last-child {
  border-bottom: none;
}

.cert-name {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.cert-issuer {
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  white-space: nowrap;
}

@media (max-width: 640px) {
  .edu-header,
  .cert-item {
    flex-direction: column;
    gap: var(--spacing-xs);
  }
}
</style>
