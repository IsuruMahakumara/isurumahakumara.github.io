<template>
  <div class="page">
    <app-navigation></app-navigation>

    <main>
      <!-- Hero -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <span class="hero-badge">Data Scientist · ML Engineer</span>
            <h1 class="hero-title">Isuru Mahakumara</h1>
            <p class="hero-subtitle">
              Building intelligent systems with machine learning, predictive analytics, and scalable MLOps infrastructure.
            </p>
            <div class="hero-actions">
              <router-link to="/resume" class="btn btn-primary btn-lg">
                View Resume
              </router-link>
              <router-link to="/projects" class="btn btn-outline btn-lg">
                See Projects
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- Expertise -->
      <section class="section">
        <div class="container">
          <h2 class="section-title">Expertise</h2>
          <div class="skills-list">
            <span class="skill-tag">Recommendation Systems</span>
            <span class="skill-tag">Predictive Analytics</span>
            <span class="skill-tag">MLOps</span>
            <span class="skill-tag">Data Engineering</span>
            <span class="skill-tag">Cloud Architecture</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">TensorFlow</span>
            <span class="skill-tag">PyTorch</span>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section class="section">
        <div class="container">
          <h2 class="section-title">Selected Work</h2>
          <div class="projects-grid">
            <article v-for="project in displayedProjects" :key="project.slug" class="project-card">
              <div class="project-header">
                <router-link :to="`/projects/${project.slug}`" class="project-title">
                  {{ project.title }}
                </router-link>
                <span class="project-date">{{ formatDate(project.date) }}</span>
              </div>
              <p class="project-summary">{{ project.summary }}</p>
              <div class="project-tags">
                <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="project-tag">{{ tag }}</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>

    <app-footer></app-footer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useHead } from '@unhead/vue'
import AppNavigation from '../components/navigation.vue'
import AppFooter from '../components/footer.vue'

useHead({
  title: 'Isuru Mahakumara — Data Scientist & ML Engineer',
  meta: [
    { property: 'og:title', content: 'Isuru Mahakumara — Data Scientist & ML Engineer' },
  ],
})

const projects = ref([])

const displayedProjects = computed(() => {
  return projects.value.slice(0, 3)
})

function formatDate(dateString) {
  if (!dateString) return ''
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
    console.error('Error fetching projects:', error)
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
</style>
