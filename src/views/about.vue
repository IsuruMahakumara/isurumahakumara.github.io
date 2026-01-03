<template>
  <div class="about-page">
    <app-navigation></app-navigation>
    <main class="about-main">
      <!-- Hero Section -->
      <section class="about-hero">
        <div class="about-hero-content">
          <span class="about-badge">About Me</span>
          <h1 class="about-title">Isuru Mahakumara</h1>
          <p class="about-subtitle">Data Scientist with a passion for computational physics and machine learning</p>
        </div>
        <div class="about-hero-visual">
          <div class="hero-glow"></div>
        </div>
      </section>

      <!-- Education Section -->
      <section class="education-section">
        <div class="container">
          <h2 class="section-title">Education</h2>
          <div class="education-card">
            <div class="education-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
              </svg>
            </div>
            <div class="education-content">
              <h3 class="education-degree">B.Sc (Hons) in Physics</h3>
              <a   href="https://science.sjp.ac.lk/phy/"   target="_blank"   rel="noopener noreferrer" >   <p class="education-institution">     University of Sri Jayewardenepura   </p> </a>
              <p class="education-period">Jan 2017 - Dec 2020</p>
              <ul class="education-details">
                <li>
                  <span class="detail-label">Minors:</span>
                  Computer Science & Mathematics
                </li>
                <li>
                  <span class="detail-label">Research:</span>
                  Computational Quantum Mechanics — Qualitative Study of Positron-Lithium Hydride Contact Density Distribution
                </li>
                <li>
                  <span class="detail-label">Technologies:</span>
                  Computational Physics, Mathematica, Python, Fortran, Data Analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Academic Background Section -->
      <section class="background-section">
        <div class="container">
          <h2 class="section-title">Academic Foundation</h2>
          <div class="background-grid">
            <div class="background-card">
              <div class="card-icon physics-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 2a10 10 0 0 1 0 20"/>
                  <path d="M12 2a10 10 0 0 0 0 20"/>
                  <path d="M2 12h20"/>
                </svg>
              </div>
              <h3 class="card-title">Physics</h3>
              <p class="card-description">Strong foundation in classical and quantum mechanics, statistical physics, and computational methods for solving complex physical problems.</p>
            </div>
            <div class="background-card">
              <div class="card-icon cs-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16"/>
                </svg>
              </div>
              <h3 class="card-title">Computer Science</h3>
              <p class="card-description">Solid grounding in algorithms, data structures, and programming paradigms that enable efficient software development and data processing.</p>
            </div>
            <div class="background-card">
              <div class="card-icon math-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16M7 16h8m-8-5h12M7 6h3"/>
                </svg>
              </div>
              <h3 class="card-title">Mathematics</h3>
              <p class="card-description">Deep understanding of linear algebra, calculus, statistics, and numerical methods essential for machine learning and data science.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Research Highlight Section -->
      <!-- <section class="research-section">
        <div class="container">
          <div class="research-content">
            <span class="research-label">Research Focus</span>
            <h2 class="research-title">Computational Quantum Mechanics</h2>
            <p class="research-description">
              My undergraduate research explored the qualitative study of positron-lithium hydride contact density distribution, 
              applying computational physics methods to understand antimatter interactions with molecular systems. 
              This work combined theoretical physics with advanced numerical techniques using Mathematica, Python, and Fortran.
            </p>
            <div class="research-tags">
              <span class="tag">Quantum Mechanics</span>
              <span class="tag">Positron Physics</span>
              <span class="tag">Numerical Methods</span>
              <span class="tag">Molecular Systems</span>
            </div>
          </div>
        </div>
      </section> -->

      <!-- Certifications Section -->
      <section class="certifications-section">
        <div class="container">
          <h2 class="section-title">Certifications</h2>
          <div class="certifications-grid">
            <div class="cert-card">
              <div class="cert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div class="cert-content">
                <h3 class="cert-title">Microsoft AI & ML Engineering Professional Certificate</h3>
                <p class="cert-issuer">Coursera • 2026</p>
              </div>
            </div>
            <div class="cert-card">
              <div class="cert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div class="cert-content">
                <h3 class="cert-title">Microsoft Python Development Professional Certificate</h3>
                <p class="cert-issuer">Coursera • 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <!-- <section class="about-cta">
        <div class="container">
          <h2 class="cta-title">Let's Connect</h2>
          <p class="cta-description">Interested in collaborating or learning more about my work?</p>
          <div class="cta-actions">
            <a href="/resume" class="btn btn-primary btn-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <path d="m7 10l5 5l5-5"/>
              </svg>
              <span>View Full Resume</span>
            </a>
            <a href="mailto:imahakumara@gmail.com" class="btn btn-outline btn-lg">
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </section> -->


    </main>
    <app-footer></app-footer>
  </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import AppNavigation from '../components/navigation.vue'
import AppFooter from '../components/footer.vue'

useHead({
  title: 'About - Isuru Mahakumara',
  meta: [
    { property: 'og:title', content: 'About - Isuru Mahakumara' },
    { name: 'description', content: 'Learn about Isuru Mahakumara - Data Scientist with a strong foundation in physics and computational modelling.' },
  ],
})
</script>

<style scoped>
.about-page {
  width: 100%;
  display: block;
  min-height: 100vh;
  background: var(--color-surface);
}

.about-main {
  overflow: hidden;
}

/* Hero Section */
.about-hero {
  display: flex;
  padding: var(--spacing-4xl) 0;
  position: relative;
  background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-elevated) 100%);
  min-height: 50vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.about-hero-content {
  gap: var(--spacing-lg);
  display: flex;
  padding: 0 var(--spacing-xl);
  z-index: 2;
  position: relative;
  text-align: center;
  max-width: 800px;
  flex-direction: column;
  align-items: center;
}

.about-hero-visual {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.hero-glow {
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  opacity: 0.15;
  position: absolute;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);
}

.about-badge {
  color: var(--color-primary);
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-lg);
  font-size: var(--font-size-sm);
  background: color-mix(in srgb, var(--color-primary) 12%, transparent);
  border-radius: var(--border-radius-full);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.about-title {
  color: var(--color-on-surface);
  margin: 0;
  font-size: var(--font-size-4xl);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-heading);
  line-height: var(--line-height-heading);
  letter-spacing: var(--letter-spacing-heading);
}

.about-subtitle {
  color: var(--color-on-surface-secondary);
  margin: 0;
  font-size: var(--font-size-xl);
  max-width: 600px;
  font-family: var(--font-family-body);
  line-height: var(--line-height-body);
}

/* Education Section */
.education-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface-elevated);
}

.education-card {
  gap: var(--spacing-2xl);
  display: flex;
  padding: var(--spacing-3xl);
  background: var(--color-surface);
  border-radius: var(--border-radius-xl);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--color-border);
}

.education-icon {
  color: var(--color-on-primary);
  width: 72px;
  height: 72px;
  display: flex;
  flex-shrink: 0;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  align-items: center;
  border-radius: var(--border-radius-lg);
  justify-content: center;
}

.education-content {
  flex: 1;
}

.education-degree {
  color: var(--color-on-surface);
  margin: 0 0 var(--spacing-xs);
  font-size: var(--font-size-2xl);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-heading);
}

.education-institution {
  color: var(--color-primary);
  margin: 0 0 var(--spacing-xs);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
}

.education-period {
  color: var(--color-on-surface-secondary);
  margin: 0 0 var(--spacing-xl);
  font-size: var(--font-size-sm);
}

.education-details {
  margin: 0;
  padding: 0;
  list-style: none;
}

.education-details li {
  color: var(--color-on-surface-secondary);
  padding: var(--spacing-md) 0;
  font-size: var(--font-size-base);
  line-height: var(--line-height-body);
  border-bottom: 1px solid var(--color-border);
}

.education-details li:last-child {
  border-bottom: none;
}

.detail-label {
  color: var(--color-on-surface);
  font-weight: var(--font-weight-medium);
  margin-right: var(--spacing-sm);
}

/* Background Section */
.background-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface);
}

.background-grid {
  gap: var(--spacing-xl);
  display: grid;
  margin-top: var(--spacing-3xl);
  grid-template-columns: repeat(3, 1fr);
}

.background-card {
  gap: var(--spacing-lg);
  display: flex;
  padding: var(--spacing-2xl);
  background: var(--color-surface-elevated);
  border-radius: var(--border-radius-lg);
  flex-direction: column;
  border: 1px solid var(--color-border);
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.background-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
}

.card-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius-md);
  justify-content: center;
}

.physics-icon {
  color: var(--color-primary);
  background: color-mix(in srgb, var(--color-primary) 12%, transparent);
}

.cs-icon {
  color: var(--color-secondary);
  background: color-mix(in srgb, var(--color-secondary) 12%, transparent);
}

.math-icon {
  color: var(--color-accent);
  background: color-mix(in srgb, var(--color-accent) 20%, transparent);
}

.card-title {
  color: var(--color-on-surface);
  margin: 0;
  font-size: var(--font-size-xl);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-heading);
}

.card-description {
  color: var(--color-on-surface-secondary);
  margin: 0;
  font-size: var(--font-size-base);
  line-height: var(--line-height-body);
}

/* Research Section */
.research-section {
  padding: var(--spacing-4xl) 0;
  position: relative;
  background: var(--color-on-surface);
  overflow: hidden;
}

.research-section::before {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  background: radial-gradient(circle at 20% 50%, color-mix(in srgb, var(--color-primary) 15%, transparent), transparent 50%);
  pointer-events: none;
}

.research-content {
  gap: var(--spacing-xl);
  display: flex;
  z-index: 2;
  position: relative;
  max-width: 800px;
  flex-direction: column;
}

.research-label {
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.research-title {
  color: var(--color-surface);
  margin: 0;
  font-size: var(--font-size-3xl);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-heading);
  line-height: var(--line-height-heading);
  letter-spacing: var(--letter-spacing-heading);
  text-transform: uppercase;
}

.research-description {
  color: var(--color-neutral);
  margin: 0;
  font-size: var(--font-size-lg);
  line-height: var(--line-height-body);
}

.research-tags {
  gap: var(--spacing-sm);
  display: flex;
  flex-wrap: wrap;
  margin-top: var(--spacing-md);
}

.tag {
  color: var(--color-primary);
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: var(--font-size-sm);
  background: color-mix(in srgb, var(--color-primary) 15%, transparent);
  border-radius: var(--border-radius-full);
  font-weight: var(--font-weight-medium);
}

/* Certifications Section */
.certifications-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface-elevated);
}

.certifications-grid {
  gap: var(--spacing-xl);
  display: grid;
  margin-top: var(--spacing-3xl);
  grid-template-columns: repeat(2, 1fr);
}

.cert-card {
  gap: var(--spacing-lg);
  display: flex;
  padding: var(--spacing-2xl);
  background: var(--color-surface);
  border-radius: var(--border-radius-lg);
  align-items: flex-start;
  border: 1px solid var(--color-border);
}

.cert-icon {
  color: var(--color-secondary);
  width: 48px;
  height: 48px;
  display: flex;
  flex-shrink: 0;
  background: color-mix(in srgb, var(--color-secondary) 12%, transparent);
  align-items: center;
  border-radius: var(--border-radius-md);
  justify-content: center;
}

.cert-content {
  flex: 1;
}

.cert-title {
  color: var(--color-on-surface);
  margin: 0 0 var(--spacing-xs);
  font-size: var(--font-size-lg);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-heading);
}

.cert-issuer {
  color: var(--color-on-surface-secondary);
  margin: 0;
  font-size: var(--font-size-sm);
}

/* CTA Section */
.about-cta {
  padding: var(--spacing-4xl) 0;
  text-align: center;
  background: var(--color-surface);
}

.cta-title {
  color: var(--color-on-surface);
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-3xl);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-heading);
  letter-spacing: var(--letter-spacing-heading);
  text-transform: uppercase;
}

.cta-description {
  color: var(--color-on-surface-secondary);
  margin: 0 0 var(--spacing-2xl);
  font-size: var(--font-size-lg);
}

.cta-actions {
  gap: var(--spacing-md);
  display: flex;
  justify-content: center;
}

/* Responsive */
@media (max-width: 991px) {
  .background-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .education-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .background-grid,
  .certifications-grid {
    grid-template-columns: 1fr;
  }

  .about-title {
    font-size: var(--font-size-3xl);
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 479px) {
  .about-hero {
    min-height: 40vh;
  }

  .education-icon {
    width: 56px;
    height: 56px;
  }
}
</style>

