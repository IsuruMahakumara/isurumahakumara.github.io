<template>
  <div class="resume-page">
    <app-navigation></app-navigation>
    <main class="resume-main">
      <div class="resume-container">
        <article class="resume">
          <div class="resume-paper">
            <!-- PDF download button -->
            <div class="resume-actions">
              <button @click="downloadPDF" class="btn btn-primary btn-lg" :disabled="!isLoaded">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10l5 5l5-5"></path>
                  </g>
                </svg>
                <span>{{ isLoaded ? 'Download PDF' : 'Loading...' }}</span>
              </button>
            </div>
            
            <!-- Resume content rendered here -->
            <div id="resume" class="resume-content" v-html="resumeContent"></div>
          </div>
        </article>
      </div>
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
  title: 'Resume - Isuru Mahakumara',
  meta: [
    { property: 'og:title', content: 'Resume - Isuru Mahakumara' },
  ],
})

const resumeContent = ref('')
const isLoaded = ref(false)

onMounted(async () => {
  try {
    const response = await fetch('/resume.html')
    const html = await response.text()
    // Extract only the body content from the HTML
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
.resume-page {
  width: 100%;
  display: block;
  min-height: 100vh;
  background: var(--color-surface-elevated);
}

.resume-main {
  padding: var(--spacing-4xl) 0;
}

.resume-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.resume {
  margin-bottom: 2rem;
}

.resume-paper {
  background: var(--color-surface);
  border-radius: var(--border-radius-lg);
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.08),
    0 8px 30px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.resume-content {
  padding: 3rem;
}

.resume-actions {
  padding: 1.5rem 3rem 0;
  display: flex;
  justify-content: flex-end;
}

/* Markdown content styles */
.resume-content :deep(header) {
  margin-bottom: 1.5rem;
}

.resume-content :deep(h1) {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-surface);
  margin-bottom: 0.5rem;
  letter-spacing: var(--letter-spacing-heading);
}

.resume-content :deep(header > p:first-of-type) {
  font-family: var(--font-family-body);
  font-size: var(--font-size-lg);
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  font-weight: var(--font-weight-medium);
}

.resume-content :deep(header > p:last-of-type) {
  font-family: var(--font-family-body);
  font-size: var(--font-size-sm);
  color: var(--color-on-surface-secondary);
  margin-bottom: 0;
}

.resume-content :deep(h2) {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-surface);
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-primary);
  display: inline-block;
  width: auto;
  min-width: 100px;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-heading);
}

.resume-content :deep(h3) {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-surface);
  margin-top: 1.25rem;
  margin-bottom: 0.25rem;
}

.resume-content :deep(h3 + p) {
  font-family: var(--font-family-body);
  font-size: var(--font-size-sm);
  color: var(--color-on-surface-secondary);
  margin-bottom: 0.75rem;
}

.resume-content :deep(p) {
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  line-height: var(--line-height-body);
  color: var(--color-on-surface-secondary);
  margin-bottom: 0.75rem;
}

.resume-content :deep(ul) {
  margin: 0.75rem 0;
  padding-left: 1.25rem;
}

.resume-content :deep(li) {
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  line-height: var(--line-height-body);
  color: var(--color-on-surface-secondary);
  margin-bottom: 0.4rem;
  position: relative;
}

.resume-content :deep(li::marker) {
  color: var(--color-primary);
}

.resume-content :deep(strong) {
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface);
}

.resume-content :deep(a) {
  color: var(--color-primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.resume-content :deep(a:hover) {
  border-bottom-color: var(--color-primary);
}

.resume-content :deep(hr) {
  border: none;
  height: 1px;
  background: var(--color-border);
  margin: 1.5rem 0;
}

.resume-content :deep(section) {
  margin-bottom: 1.5rem;
}

.resume-content :deep(article) {
  margin-bottom: 1.25rem;
}

@media (max-width: 768px) {
  .resume-content {
    padding: 1.5rem;
  }

  .resume-actions {
    padding: 1rem 1.5rem 0;
  }

  .resume-content :deep(h1) {
    font-size: var(--font-size-2xl);
  }

  .resume-content :deep(h2) {
    font-size: var(--font-size-lg);
  }
}

/* Print styles */
@media print {
  .resume-page {
    background: white !important;
  }
  
  .resume-main {
    padding: 0 !important;
  }
  
  .resume-container {
    max-width: none !important;
    padding: 0 !important;
  }
  
  .resume-paper {
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
  }
  
  .resume-actions {
    display: none !important;
  }
  
  /* Hide navigation and footer in print */
  .navigation-container1,
  .footer-container1 {
    display: none !important;
  }
}
</style>
