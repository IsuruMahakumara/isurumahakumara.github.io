<template>
  <nav class="nav">
    <div class="nav-inner">
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/experience">Experience</router-link></li>
        <li><router-link to="/resume">Resume</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
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
        <router-link to="/" @click="closeMenu">Home</router-link>
        <router-link to="/projects" @click="closeMenu">Projects</router-link>
        <router-link to="/experience" @click="closeMenu">Experience</router-link>
        <router-link to="/resume" @click="closeMenu">Resume</router-link>
        <router-link to="/contact" @click="closeMenu">Contact</router-link>
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
