<template>
  <div class="page">
    <app-navigation></app-navigation>

    <main>
      <article v-if="project" class="section">
        <div class="container">
          <router-link to="/projects" class="back-link">
            ← Back to Projects
          </router-link>
          
          <header class="article-header">
            <div class="article-meta">
              <time class="article-date">{{ formatDate(project.date) }}</time>
            </div>
            <h1 class="article-title">{{ project.title }}</h1>
            <p class="article-summary">{{ project.summary }}</p>
            <div class="article-tags">
              <span v-for="tag in project.tags" :key="tag" class="article-tag">{{ tag }}</span>
            </div>
          </header>

          <div class="article-content" v-html="renderedContent"></div>
        </div>
      </article>

      <div v-else-if="loading" class="loading-state">
        <div class="container">
          <p>Loading...</p>
        </div>
      </div>

      <div v-else class="error-state">
        <div class="container">
          <h1 class="error-title">Project Not Found</h1>
          <router-link to="/projects" class="back-link">← Back to Projects</router-link>
        </div>
      </div>
    </main>

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
  title: computed(() => project.value ? `${project.value.title} — Isuru Mahakumara` : 'Project'),
  meta: [
    { property: 'og:title', content: computed(() => project.value?.title || 'Project') },
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
  
  const frontmatter = {}
  frontmatterStr.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim()
      let value = line.slice(colonIndex + 1).trim()
      
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
      else if (value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value)
        } catch (e) {
          // Keep as string if parsing fails
        }
      }
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
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.container {
  max-width: 42rem;
}

.back-link {
  display: inline-block;
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-2xl);
  transition: color 0.15s ease;
}

.back-link:hover {
  color: var(--color-text);
}

.article-header {
  margin-bottom: var(--spacing-3xl);
  padding-bottom: var(--spacing-2xl);
  border-bottom: 1px solid var(--color-border);
}

.article-meta {
  margin-bottom: var(--spacing-md);
}

.article-date {
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
}

.article-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: -0.02em;
  margin-bottom: var(--spacing-md);
}

.article-summary {
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-normal);
  margin-bottom: var(--spacing-lg);
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.article-tag {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.article-tag::before {
  content: "#";
}

/* Article content */
.article-content {
  font-size: var(--font-size-base);
  line-height: 1.75;
  color: var(--color-text-secondary);
}

.article-content :deep(h1),
.article-content :deep(h2),
.article-content :deep(h3),
.article-content :deep(h4) {
  color: var(--color-text);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-tight);
  margin-top: var(--spacing-3xl);
  margin-bottom: var(--spacing-lg);
}

.article-content :deep(h1) { font-size: var(--font-size-2xl); }
.article-content :deep(h2) { font-size: var(--font-size-xl); }
.article-content :deep(h3) { font-size: var(--font-size-lg); }

.article-content :deep(p) {
  margin-bottom: var(--spacing-lg);
}

.article-content :deep(ul),
.article-content :deep(ol) {
  margin-bottom: var(--spacing-lg);
  padding-left: var(--spacing-lg);
}

.article-content :deep(li) {
  margin-bottom: var(--spacing-sm);
}

.article-content :deep(a) {
  color: var(--color-text);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.article-content :deep(a:hover) {
  color: var(--color-text-secondary);
}

.article-content :deep(strong) {
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.article-content :deep(code) {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 0.15em 0.4em;
  border-radius: var(--border-radius);
}

.article-content :deep(pre) {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  overflow-x: auto;
  margin-bottom: var(--spacing-lg);
}

.article-content :deep(pre code) {
  background: none;
  padding: 0;
  border: none;
  font-size: var(--font-size-sm);
}

.article-content :deep(blockquote) {
  border-left: 2px solid var(--color-border);
  padding-left: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
  font-style: italic;
}

.article-content :deep(hr) {
  border: none;
  border-top: 1px solid var(--color-border);
  margin: var(--spacing-2xl) 0;
}

.article-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  margin: var(--spacing-xl) 0;
}

.article-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.article-content :deep(th),
.article-content :deep(td) {
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border);
  text-align: left;
}

.article-content :deep(th) {
  background: var(--color-surface);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.loading-state,
.error-state {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.error-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-lg);
}

@media (max-width: 640px) {
  .article-title {
    font-size: var(--font-size-2xl);
  }
}
</style>
