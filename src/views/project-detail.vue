<template>
  <div class="project-detail-container">
    <app-navigation></app-navigation>

    <article class="project-article" v-if="project">
      <header class="project-header">
        <div class="container">
          <router-link to="/projects" class="back-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Projects
          </router-link>
          
          <div class="project-meta">
            <time class="project-date">{{ formatDate(project.date) }}</time>
            <span v-if="project.featured" class="project-featured">Featured</span>
          </div>
          
          <h1 class="project-title">{{ project.title }}</h1>
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
        </div>
      </header>

      <section class="project-content">
        <div class="container container-narrow">
          <div class="markdown-content" v-html="renderedContent"></div>
        </div>
      </section>
    </article>

    <div v-else-if="loading" class="project-loading">
      <div class="container">
        <p class="section-content">Loading project...</p>
      </div>
    </div>

    <div v-else class="project-not-found">
      <div class="container">
        <h1 class="section-title">Project Not Found</h1>
        <p class="section-content">The project you're looking for doesn't exist.</p>
        <router-link to="/projects" class="back-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Projects
        </router-link>
      </div>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { marked } from 'marked'
import AppNavigation from '../components/navigation.vue'
import AppFooter from '../components/footer.vue'

const route = useRoute()
const project = ref(null)
const content = ref('')
const loading = ref(true)

const renderedContent = computed(() => {
  if (!content.value) return ''
  return marked(content.value)
})

useHead({
  title: computed(() => project.value ? `${project.value.title} | Portfolio` : 'Project | Portfolio'),
  meta: [
    { property: 'og:title', content: computed(() => project.value ? `${project.value.title} | Portfolio` : 'Project | Portfolio') },
    { property: 'og:description', content: computed(() => project.value?.summary || '') },
  ],
})

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function parseFrontmatter(text) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = text.match(frontmatterRegex)
  
  if (!match) {
    return { frontmatter: {}, content: text }
  }

  const frontmatterStr = match[1]
  const contentStr = match[2]
  
  // Simple YAML parsing for our use case
  const frontmatter = {}
  frontmatterStr.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim()
      let value = line.slice(colonIndex + 1).trim()
      
      // Handle quoted strings
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
      // Handle arrays
      else if (value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value)
        } catch (e) {
          // Keep as string if parsing fails
        }
      }
      // Handle booleans
      else if (value === 'true') value = true
      else if (value === 'false') value = false
      
      frontmatter[key] = value
    }
  })
  
  return { frontmatter, content: contentStr }
}

async function fetchProject() {
  const slug = route.params.slug
  loading.value = true
  
  try {
    const response = await fetch(`/projects/projects-markdown/${slug}.md`)
    
    if (!response.ok) {
      throw new Error('Project not found')
    }
    
    const text = await response.text()
    const parsed = parseFrontmatter(text)
    
    project.value = {
      slug,
      title: parsed.frontmatter.title || slug,
      summary: parsed.frontmatter.summary || '',
      tags: parsed.frontmatter.tags || [],
      featured: parsed.frontmatter.featured || false,
      date: parsed.frontmatter.date || ''
    }
    
    content.value = parsed.content
  } catch (error) {
    console.error('Failed to load project:', error)
    project.value = null
    content.value = ''
  } finally {
    loading.value = false
  }
}

watch(() => route.params.slug, () => {
  fetchProject()
})

onMounted(() => {
  fetchProject()
})
</script>

<style scoped>
.project-detail-container {
  width: 100%;
  display: block;
  min-height: 100vh;
}

.project-article {
  min-height: calc(100vh - 4.5rem);
}

.project-header {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  margin-bottom: var(--spacing-2xl);
  transition: opacity 0.2s ease;
}

.back-link:hover {
  opacity: 0.8;
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
  font-size: var(--font-size-3xl);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-surface);
  margin-bottom: var(--spacing-md);
  line-height: var(--line-height-heading);
}

.project-summary {
  color: var(--color-on-surface-secondary);
  font-size: var(--font-size-lg);
  font-family: var(--font-family-body);
  line-height: var(--line-height-body);
  margin-bottom: var(--spacing-xl);
  max-width: 700px;
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

.project-content {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface);
}

.container-narrow {
  max-width: 800px;
}

/* Markdown content styling */
.markdown-content {
  color: var(--color-on-surface);
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  line-height: 1.8;
}

.markdown-content :deep(h1),
.markdown-content :deep(h2),
.markdown-content :deep(h3),
.markdown-content :deep(h4),
.markdown-content :deep(h5),
.markdown-content :deep(h6) {
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-surface);
  line-height: var(--line-height-heading);
  margin-top: var(--spacing-3xl);
  margin-bottom: var(--spacing-lg);
}

.markdown-content :deep(h1) {
  font-size: var(--font-size-2xl);
}

.markdown-content :deep(h2) {
  font-size: var(--font-size-xl);
}

.markdown-content :deep(h3) {
  font-size: var(--font-size-lg);
}

.markdown-content :deep(p) {
  margin-bottom: var(--spacing-lg);
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
  margin-bottom: var(--spacing-lg);
  padding-left: var(--spacing-xl);
}

.markdown-content :deep(li) {
  margin-bottom: var(--spacing-sm);
}

.markdown-content :deep(a) {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.markdown-content :deep(a:hover) {
  opacity: 0.8;
}

.markdown-content :deep(strong) {
  font-weight: var(--font-weight-semibold);
}

.markdown-content :deep(code) {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.9em;
  background: var(--color-surface-elevated);
  padding: 0.2em 0.4em;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-border);
}

.markdown-content :deep(pre) {
  background: var(--color-surface-elevated);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
  overflow-x: auto;
  margin-bottom: var(--spacing-lg);
}

.markdown-content :deep(pre code) {
  background: none;
  padding: 0;
  border: none;
  font-size: var(--font-size-sm);
}

.markdown-content :deep(blockquote) {
  border-left: 3px solid var(--color-primary);
  padding-left: var(--spacing-xl);
  margin: var(--spacing-xl) 0;
  color: var(--color-on-surface-secondary);
  font-style: italic;
}

.markdown-content :deep(hr) {
  border: none;
  border-top: 1px solid var(--color-border);
  margin: var(--spacing-3xl) 0;
}

.markdown-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: var(--border-radius-md);
  margin: var(--spacing-xl) 0;
}

.markdown-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: var(--spacing-lg);
}

.markdown-content :deep(th),
.markdown-content :deep(td) {
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  text-align: left;
}

.markdown-content :deep(th) {
  background: var(--color-surface-elevated);
  font-weight: var(--font-weight-semibold);
}

.project-loading,
.project-not-found {
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface);
}

.project-not-found .container {
  text-align: center;
}

.project-not-found .back-link {
  margin-top: var(--spacing-2xl);
  justify-content: center;
}

@media (max-width: 767px) {
  .project-header {
    padding: var(--spacing-3xl) 0;
  }

  .project-title {
    font-size: var(--font-size-2xl);
  }

  .project-summary {
    font-size: var(--font-size-base);
  }

  .project-content {
    padding: var(--spacing-3xl) 0;
  }
}
</style>

