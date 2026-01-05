<template>
  <div class="page">
    <app-navigation></app-navigation>

    <main>
      <!-- Hero -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <span class="hero-badge">Data Scientist · AI Engineer</span>
            <h1 class="hero-title">Isuru Mahakumara</h1>
            <p class="hero-subtitle">
              I’m a Data Scientist and AI Engineer experienced in building production-ready machine learning systems for personalization, prediction, and decision-making. I’ve developed large-scale recommendation systems and churn prediction models used in real-world products, grounded in a strong physics background and rigorous analytical thinking.
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
            <span class="skill-tag">Machine Learning</span>
            <span class="skill-tag">Deep Learning</span>
            <span class="skill-tag">AI</span>
            <span class="skill-tag">Recommendation Systems</span>
            <span class="skill-tag">Predictive Analytics</span>
            <span class="skill-tag">Data Visualization</span>
            <span class="skill-tag">A/B Testing</span>
            <span class="skill-tag">MLOps</span>
            <span class="skill-tag">ETL</span>
            <span class="skill-tag">Alibaba Cloud</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">SQL</span>
            <span class="skill-tag">Pandas</span>
            <span class="skill-tag">NumPy</span>
            <span class="skill-tag">Scikit-learn</span>
            <span class="skill-tag">TensorFlow</span>
            <span class="skill-tag">PyTorch</span>
            <span class="skill-tag">Hugging Face</span>
            <span class="skill-tag">Matplotlib</span>
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Snowflake</span>
            <span class="skill-tag">PySpark</span>
            <span class="skill-tag">SnowPark</span>
            <span class="skill-tag">Flask</span>
            <span class="skill-tag">FastAPI</span>
            <span class="skill-tag">Tableau</span>
            <span class="skill-tag">Looker</span>
            <span class="skill-tag">LookML</span>
            <span class="skill-tag">Looker Studio</span>
            <span class="skill-tag">JAVA</span>
            <span class="skill-tag">Vue.js</span>
            <span class="skill-tag">Node.js</span>

   
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
  title: 'Isuru Mahakumara — Data Scientist & AI Engineer',
  meta: [
    { property: 'og:title', content: 'Isuru Mahakumara — Data Scientist & AI Engineer' },
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
