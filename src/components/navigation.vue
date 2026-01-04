<template>
  <nav class="nav">
    <div class="nav-inner">
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      
      <button
        @click="toggleMenu"
        :aria-expanded="isOpen"
        aria-label="Toggle menu"
        class="nav-toggle"
      >
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
          <line x1="4" y1="8" x2="20" y2="8"/>
          <line x1="4" y1="16" x2="20" y2="16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
          <line x1="6" y1="6" x2="18" y2="18"/>
          <line x1="18" y1="6" x2="6" y2="18"/>
        </svg>
      </button>
    </div>
    
    <Transition name="slide">
      <div v-if="isOpen" class="nav-mobile">
        <a href="/" @click="closeMenu">Home</a>
        <a href="/about" @click="closeMenu">About</a>
        <a href="/projects" @click="closeMenu">Projects</a>
        <a href="/experience" @click="closeMenu">Experience</a>
        <a href="/resume" @click="closeMenu">Resume</a>
        <a href="/contact" @click="closeMenu">Contact</a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

function closeMenu() {
  isOpen.value = false
  document.body.style.overflow = ''
}

function handleResize() {
  if (window.innerWidth > 640 && isOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--color-surface);
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 40%, transparent);
}

.nav-inner {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: var(--spacing-lg) var(--spacing-xl);
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: var(--spacing-3xl);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--color-on-surface-secondary);
  text-decoration: none;
  font-size: var(--font-size-sm);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.2s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-primary);
  transition: width 0.2s ease;
}

.nav-links a:hover {
  color: var(--color-on-surface);
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  padding: var(--spacing-sm);
  cursor: pointer;
  color: var(--color-on-surface);
}

.nav-mobile {
  position: fixed;
  inset: 0;
  top: 57px;
  background: var(--color-surface);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2xl);
}

.nav-mobile a {
  color: var(--color-on-surface);
  text-decoration: none;
  font-size: var(--font-size-xl);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color 0.2s ease;
}

.nav-mobile a:hover {
  color: var(--color-primary);
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 640px) {
  .nav-inner {
    justify-content: flex-end;
  }
  
  .nav-links {
    display: none;
  }
  
  .nav-toggle {
    display: flex;
  }
}
</style>
