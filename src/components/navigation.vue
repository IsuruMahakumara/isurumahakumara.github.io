<template>
  <div class="navigation-container1">
    <nav class="navigation-root">
      <div class="navigation-container">
        <a href="/">
          <div aria-label="ModelForge Home" class="navigation-brand">
            <div class="navigation-logo-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"
                  ></path>
                  <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                  <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                  <path
                    d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"
                  ></path>
                  <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                  <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                </g>
              </svg>
            </div>
            <span class="navigation-brand-name section-title">ModelForge</span>
          </div>
        </a>
        <div class="navigation-desktop-menu">
          <ul class="navigation-links-list">
            <li class="navigation-link-item">
              <a href="/about">
                <div class="navigation-link"><span>About</span></div>
              </a>
            </li>
            <li class="navigation-link-item">
              <a href="#projects">
                <div class="navigation-link"><span>Projects</span></div>
              </a>
            </li>
            <li class="navigation-link-item">
              <a href="/experience">
                <div class="navigation-link"><span>Experience</span></div>
              </a>
            </li>
            <li class="navigation-link-item">
              <a href="/resume">
                <div class="navigation-link"><span>Resume</span></div>
              </a>
            </li>
            <li class="navigation-link-item">
              <a href="/contact">
                <div class="navigation-link"><span>Contact</span></div>
              </a>
            </li>
          </ul>
          <a href="/resume">
            <div class="navigation-cv-btn btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                  ></path>
                  <path d="m7 10l5 5l5-5"></path>
                </g>
              </svg>
              <span>View Resume</span>
            </div>
          </a>
        </div>
        <button
          @click="openMenu"
          aria-expanded="false"
          aria-controls="mobile-overlay"
          aria-label="Open Menu"
          class="navigation-mobile-toggle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 12h16M4 6h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
    <div id="mobile-overlay" class="navigation-mobile-overlay" :class="{ 'is-active': isMobileMenuOpen }">
      <div class="navigation-overlay-header">
        <a href="/">
          <div aria-label="ModelForge Home" class="navigation-brand">
            <div class="navigation-logo-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"
                  ></path>
                  <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                  <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                  <path
                    d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"
                  ></path>
                  <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                  <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                </g>
              </svg>
            </div>
            <span class="navigation-brand-name section-title">ModelForge</span>
          </div>
        </a>
        <button
          @click="closeMenu"
          aria-label="Close Menu"
          class="navigation-mobile-close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 6L6 18M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div class="navigation-overlay-content">
        <ul class="navigation-mobile-links">
          <li>
            <a href="/about" @click="closeMenu">
              <div class="navigation-mobile-link"><span>About</span></div>
            </a>
          </li>
          <li>
            <a href="#projects" @click="closeMenu">
              <div class="navigation-mobile-link"><span>Projects</span></div>
            </a>
          </li>
          <li>
            <a href="/experience" @click="closeMenu">
              <div class="navigation-mobile-link"><span>Experience</span></div>
            </a>
          </li>
          <li>
            <a href="/resume" @click="closeMenu">
              <div class="navigation-mobile-link"><span>Resume</span></div>
            </a>
          </li>
          <li>
            <a href="/contact" @click="closeMenu">
              <div class="navigation-mobile-link"><span>Contact</span></div>
            </a>
          </li>
        </ul>
        <div class="navigation-mobile-actions">
          <a href="/resume">
            <div
              class="navigation-cv-btn-mobile btn btn-primary btn-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                  ></path>
                  <path d="m7 10l5 5l5-5"></path>
                </g>
              </svg>
              <span>View Resume</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)

function openMenu() {
  isMobileMenuOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeMenu() {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

function handleResize() {
  if (window.innerWidth > 767 && isMobileMenuOpen.value) {
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
.navigation-container1 {
  display: contents;
}
</style>
