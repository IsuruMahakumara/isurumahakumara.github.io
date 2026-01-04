<template>
  <div class="page">
    <app-navigation></app-navigation>
    
    <main>
      <section class="section">
        <div class="resume-container">
          <div class="resume-header">
            <h1 class="page-title">Resume</h1>
            <button @click="downloadPDF" class="btn btn-primary" :disabled="!isLoaded || isGenerating">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10l5 5l5-5"></path>
              </svg>
              <span>{{ isGenerating ? 'Generating...' : (isLoaded ? 'Download PDF' : 'Loading...') }}</span>
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
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import AppNavigation from '../components/navigation.vue'
import AppFooter from '../components/footer.vue'

// Initialize pdfMake with fonts
pdfMake.vfs = pdfFonts.vfs

useHead({
  title: 'Resume — Isuru Mahakumara',
  meta: [
    { property: 'og:title', content: 'Resume — Isuru Mahakumara' },
  ],
})

const resumeContent = ref('')
const isLoaded = ref(false)
const isGenerating = ref(false)

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

// Helper to get text content, handling nested elements
function getTextContent(element) {
  return element.textContent.trim()
}

// Helper to parse inline elements (handles <strong>, <a>, etc.)
function parseInlineContent(element) {
  const parts = []
  for (const node of element.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent
      if (text) parts.push(text)
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const tag = node.tagName
      if (tag === 'STRONG' || tag === 'B') {
        parts.push({ text: node.textContent, bold: true })
      } else if (tag === 'A') {
        parts.push({ text: node.textContent, link: node.href, color: '#0066cc', decoration: 'underline' })
      } else if (tag === 'EM' || tag === 'I') {
        parts.push({ text: node.textContent, italics: true })
      } else {
        parts.push(node.textContent)
      }
    }
  }
  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : parts
}

// Convert HTML element to pdfmake content
function parseElement(element) {
  const content = []
  
  for (const child of element.children) {
    const tag = child.tagName
    
    if (tag === 'HEADER') {
      // Header section
      const h1 = child.querySelector('h1')
      const paragraphs = child.querySelectorAll('p')
      
      if (h1) {
        content.push({ text: getTextContent(h1), style: 'name', margin: [0, 0, 0, 4] })
      }
      
      paragraphs.forEach((p, index) => {
        if (index === 0) {
          content.push({ text: getTextContent(p), style: 'title', margin: [0, 0, 0, 4] })
        } else {
          content.push({ text: parseInlineContent(p), style: 'contact', margin: [0, 0, 0, 8] })
        }
      })
      
      content.push({ canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1.5, lineColor: '#333333' }], margin: [0, 8, 0, 12] })
    }
    
    else if (tag === 'HR') {
      content.push({ canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.5, lineColor: '#cccccc' }], margin: [0, 8, 0, 8] })
    }
    
    else if (tag === 'SECTION') {
      const h2 = child.querySelector(':scope > h2')
      const articles = child.querySelectorAll(':scope > article')
      const directP = child.querySelectorAll(':scope > p')
      const directUl = child.querySelectorAll(':scope > ul')
      
      // Section heading
      if (h2) {
        content.push({ text: getTextContent(h2).toUpperCase(), style: 'sectionHeader', margin: [0, 12, 0, 8] })
      }
      
      // Direct paragraphs (like Summary)
      directP.forEach(p => {
        content.push({ text: parseInlineContent(p), style: 'body', margin: [0, 0, 0, 6] })
      })
      
      // Direct lists (like Skills or Certifications)
      directUl.forEach(ul => {
        const items = ul.querySelectorAll('li')
        const listItems = Array.from(items).map(li => ({ text: parseInlineContent(li), style: 'listItem' }))
        content.push({ ul: listItems, margin: [0, 0, 0, 8] })
      })
      
      // Articles (like Experience entries)
      articles.forEach((article, idx) => {
        const h3 = article.querySelector('h3')
        const firstP = article.querySelector('p')
        const ul = article.querySelector('ul')
        
        const articleContent = []
        
        if (h3) {
          articleContent.push({ text: getTextContent(h3), style: 'jobTitle', margin: [0, idx > 0 ? 10 : 0, 0, 2] })
        }
        
        if (firstP) {
          articleContent.push({ text: parseInlineContent(firstP), style: 'jobMeta', margin: [0, 0, 0, 4] })
        }
        
        if (ul) {
          const items = ul.querySelectorAll('li')
          const listItems = Array.from(items).map(li => ({ text: parseInlineContent(li), style: 'listItem' }))
          articleContent.push({ ul: listItems, margin: [0, 4, 0, 0] })
        }
        
        // Keep article together on same page
        content.push({ stack: articleContent, unbreakable: true })
      })
    }
  }
  
  return content
}

async function downloadPDF() {
  if (isGenerating.value) return
  isGenerating.value = true

  try {
    const element = document.getElementById('resume')
    const content = parseElement(element)
    
    const docDefinition = {
      pageSize: 'A4',
      pageMargins: [40, 40, 40, 40],
      content: content,
      styles: {
        name: {
          fontSize: 20,
          bold: true,
          color: '#000000'
        },
        title: {
          fontSize: 12,
          color: '#444444'
        },
        contact: {
          fontSize: 9,
          color: '#666666',
          lineHeight: 1.3
        },
        sectionHeader: {
          fontSize: 10,
          bold: true,
          color: '#333333',
          letterSpacing: 1
        },
        jobTitle: {
          fontSize: 11,
          bold: true,
          color: '#000000'
        },
        jobMeta: {
          fontSize: 9,
          color: '#666666'
        },
        body: {
          fontSize: 10,
          color: '#333333',
          lineHeight: 1.4
        },
        listItem: {
          fontSize: 9,
          color: '#444444',
          lineHeight: 1.3
        }
      },
      defaultStyle: {
        font: 'Roboto'
      }
    }

    pdfMake.createPdf(docDefinition).download('Isuru_Mahakumara_Resume.pdf')
  } catch (error) {
    console.error('Failed to generate PDF:', error)
    alert('Failed to generate PDF. Please try again.')
  } finally {
    isGenerating.value = false
  }
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

/* Print styles - preserves website styling for PDF */
@media print {
  .page {
    background: var(--color-bg) !important;
    min-height: auto !important;
  }
  
  main {
    padding: 0 !important;
  }
  
  .resume-container {
    max-width: none !important;
    padding: 0 1.5rem !important;
  }
  
  .resume-paper {
    background: var(--color-surface) !important;
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  
  .resume-content {
    padding: var(--spacing-xl) !important;
  }
  
  .resume-header {
    display: none !important;
  }
  
  nav, footer {
    display: none !important;
  }
  
  /* Page break controls */
  .resume-content :deep(section) {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
  
  .resume-content :deep(article) {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
  
  .resume-content :deep(h1),
  .resume-content :deep(h2),
  .resume-content :deep(h3) {
    page-break-after: avoid !important;
    break-after: avoid !important;
  }
}
</style>
