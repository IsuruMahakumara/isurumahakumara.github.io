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
                <router-link :to="`/projects/${project.slug}`" class="project-title">
                  {{ project.title }}
                </router-link>
                <span class="project-date">{{ formatDate(project.date) }}</span>
              </div>
              <p class="project-summary">{{ project.summary }}</p>
              <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
              </div>
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
</style>
