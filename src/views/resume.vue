<template>
  <div class="page">
    <app-navigation></app-navigation>
    
    <main>
      <section class="section">
        <div class="resume-container">
          <div class="resume-header">
            <h1 class="page-title">Resume</h1>
            <button @click="downloadPDF" class="btn btn-primary" :disabled="!isLoaded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10l5 5l5-5"></path>
              </svg>
              <span>{{ isLoaded ? 'Download PDF' : 'Loading...' }}</span>
            </button>
          </div>
          
          <article class="resume-paper">
            <div id="resume" class="resume-content" v-html="resumeContent"></div>
          </article>
        </div>
      </section>
    </main>

    <app-footer></app-footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import AppNavigation from '../components/navigation.vue'
import AppFooter from '../components/footer.vue'
import '../assets/resume-print.css'

useHead({
  title: 'Resume — Isuru Mahakumara',
  meta: [
    { property: 'og:title', content: 'Resume — Isuru Mahakumara' },
  ],
})

const resumeContent = ref('')
const isLoaded = ref(false)

onMounted(async () => {
  try {
    const response = await fetch('/resume.html')
    const html = await response.text()
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)
    resumeContent.value = bodyMatch ? bodyMatch[1] : html
    isLoaded.value = true
  } catch (error) {
    console.error('Failed to load resume:', error)
    resumeContent.value = '<p>Failed to load resume content.</p>'
    isLoaded.value = true
  }
})

function downloadPDF() {
  window.print()
}
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

.resume-container {
  max-width: 48rem;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.resume-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
}

.page-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: -0.02em;
  margin: 0;
}

.resume-paper {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}

.resume-content {
  padding: var(--spacing-2xl);
}

/* Markdown content styles */
.resume-content :deep(header) {
  margin-bottom: var(--spacing-2xl);
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid var(--color-border);
}

.resume-content :deep(h1) {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: -0.02em;
  margin: 0 0 var(--spacing-xs);
}

.resume-content :deep(header > p:first-of-type) {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  margin: 0 0 var(--spacing-xs);
}

.resume-content :deep(header > p:last-of-type) {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin: 0;
}

.resume-content :deep(h2) {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin: var(--spacing-2xl) 0 var(--spacing-lg);
}

.resume-content :deep(h3) {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  margin: var(--spacing-lg) 0 var(--spacing-xs);
}

.resume-content :deep(h3 + p) {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin: 0 0 var(--spacing-sm);
}

.resume-content :deep(p) {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
  color: var(--color-text-secondary);
  margin: 0 0 var(--spacing-sm);
}

.resume-content :deep(ul) {
  margin: var(--spacing-sm) 0;
  padding-left: var(--spacing-lg);
}

.resume-content :deep(li) {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xs);
}

.resume-content :deep(strong) {
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.resume-content :deep(a) {
  color: var(--color-text);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.resume-content :deep(a:hover) {
  color: var(--color-text-secondary);
}

.resume-content :deep(hr) {
  border: none;
  height: 1px;
  background: var(--color-border);
  margin: var(--spacing-xl) 0;
}

.resume-content :deep(section) {
  margin-bottom: var(--spacing-xl);
}

.resume-content :deep(article) {
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
}

.resume-content :deep(article:last-child) {
  border-bottom: none;
  padding-bottom: 0;
}

@media (max-width: 640px) {
  .resume-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .resume-content {
    padding: var(--spacing-lg);
  }
}

/* Print styles */
@media print {
  .page {
    background: white !important;
  }
  
  main {
    padding: 0 !important;
  }
  
  .resume-container {
    max-width: none !important;
    padding: 0 !important;
  }
  
  .resume-paper {
    border: none !important;
    border-radius: 0 !important;
  }
  
  .resume-header {
    display: none !important;
  }
  
  nav, footer {
    display: none !important;
  }
}
</style>
