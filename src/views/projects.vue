<template>
  <div class="page">
    <app-navigation></app-navigation>

    <main>
      <section class="section">
        <div class="container">
          <header class="page-header">
            <h1 class="page-title">Projects</h1>
            <p class="page-intro">
              Data science and machine learning case studies.
            </p>
          </header>

          <div class="projects-grid" v-if="projects.length">
            <article v-for="project in projects" :key="project.slug" class="project-card">
              <div class="project-header">
                <a v-if="project.type === 'nbviewer'" :href="project.url" target="_blank" rel="noopener noreferrer" class="project-title">
                  {{ project.title }}
                </a>
                <router-link v-else :to="`/projects/${project.slug}`" class="project-title">
                  {{ project.title }}
                </router-link>
                <span class="project-date">{{ formatDate(project.date) }}</span>
              </div>
              <p class="project-summary">{{ project.summary }}</p>
              <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
              </div>
              <a v-if="project.type === 'demo'" :href="project.url" target="_blank" rel="noopener noreferrer" class="demo-button">
                View Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </article>
          </div>

          <div v-else class="loading">
            <p>Loading...</p>
          </div>
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

useHead({
  title: 'Projects — Isuru Mahakumara',
  meta: [
    { property: 'og:title', content: 'Projects — Isuru Mahakumara' },
  ],
})

const projects = ref([])

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  })
}

async function fetchProjects() {
  try {
    const response = await fetch('/projects/projects.json')
    projects.value = await response.json()
  } catch (error) {
    console.error('Failed to load projects:', error)
  }
}

onMounted(() => {
  fetchProjects()
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

.loading {
  color: var(--color-text-muted);
  text-align: center;
  padding: var(--spacing-4xl) 0;
}

.demo-button {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-accent);
  background: transparent;
  border: 1px solid var(--color-accent);
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.demo-button:hover {
  background: var(--color-accent);
  color: var(--color-bg);
}
</style>
