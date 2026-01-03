<template>
  <div class="projects-container">
    <app-navigation></app-navigation>

    <section class="projects-section">
      <div class="container">
        <div class="projects-header">
          <h1 class="section-title">Projects</h1>
          <p class="section-content projects-intro">
            A collection of data science and machine learning case studies.
          </p>
        </div>

        <div class="projects-list" v-if="projects.length">
          <article 
            v-for="project in projects" 
            :key="project.slug" 
            class="project-card"
          >
            <div class="project-meta">
              <time class="project-date">{{ formatDate(project.date) }}</time>
              <span v-if="project.featured" class="project-featured">Featured</span>
            </div>
            <h2 class="project-title">{{ project.title }}</h2>
            <p class="project-summary">{{ project.summary }}</p>
            <div class="project-tags">
              <span 
                v-for="tag in project.tags" 
                :key="tag" 
                class="project-tag"
              >
                {{ tag }}
              </span>
            </div>
          </article>
        </div>

        <div v-else class="projects-loading">
          <p class="section-content">Loading projects...</p>
        </div>
      </div>
    </section>

    <app-footer></app-footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import AppNavigation from '../components/navigation.vue'
import AppFooter from '../components/footer.vue'

useHead({
  title: 'Projects | Portfolio',
  meta: [
    { property: 'og:title', content: 'Projects | Portfolio' },
  ],
})

const projects = ref([])

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
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
.projects-container {
  width: 100%;
  display: block;
  min-height: 100vh;
}

.projects-section {
  padding: var(--spacing-4xl) 0;
  min-height: calc(100vh - 4.5rem);
  background: var(--color-surface);
}

.projects-header {
  margin-bottom: var(--spacing-4xl);
}

.projects-intro {
  max-width: 600px;
  margin-top: var(--spacing-md);
  color: var(--color-on-surface-secondary);
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.project-card {
  padding: var(--spacing-2xl);
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-lg);
  transition: border-color 0.2s ease;
}

.project-card:hover {
  border-color: var(--color-primary);
}

.project-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.project-date {
  color: var(--color-on-surface-secondary);
  font-size: var(--font-size-sm);
  font-family: var(--font-family-body);
}

.project-featured {
  color: var(--color-accent);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: color-mix(in srgb, var(--color-accent) 15%, transparent);
  border-radius: var(--border-radius-sm);
}

.project-title {
  font-size: var(--font-size-xl);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-surface);
  margin-bottom: var(--spacing-sm);
  line-height: var(--line-height-heading);
}

.project-summary {
  color: var(--color-on-surface-secondary);
  font-size: var(--font-size-base);
  font-family: var(--font-family-body);
  line-height: var(--line-height-body);
  margin-bottom: var(--spacing-lg);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.project-tag {
  color: var(--color-primary);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-xs) var(--spacing-md);
  background: color-mix(in srgb, var(--color-primary) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-primary) 30%, transparent);
  border-radius: var(--border-radius-full);
}

.projects-loading {
  text-align: center;
  padding: var(--spacing-4xl) 0;
  color: var(--color-on-surface-secondary);
}

@media (max-width: 767px) {
  .projects-section {
    padding: var(--spacing-3xl) 0;
  }

  .project-card {
    padding: var(--spacing-xl);
  }

  .project-title {
    font-size: var(--font-size-lg);
  }
}
</style>

