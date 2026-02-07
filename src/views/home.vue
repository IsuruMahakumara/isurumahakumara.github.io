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
            <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
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
                <span v-for="tag in project.tags.slice(0, 5)" :key="tag" class="project-tag">{{ tag }}</span>
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
const skills = ref([])

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

async function fetchSkills() {
  try {
    const response = await fetch('/resume.html')
    const html = await response.text()
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    
    // Find the Skills section - look for h2 with "Skills" text
    const headings = doc.querySelectorAll('h2')
    for (const heading of headings) {
      if (heading.textContent.trim() === 'Skills') {
        const skillsP = heading.nextElementSibling
        if (skillsP && skillsP.tagName === 'P') {
          const skillsText = skillsP.textContent
          skills.value = skillsText
            .split(',')
            .map(skill => skill.trim())
            .filter(skill => skill.length > 0)
        }
        break
      }
    }
  } catch (error) {
    console.error('Error fetching skills:', error)
  }
}

onMounted(() => {
  fetchProjects()
  fetchSkills()
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
