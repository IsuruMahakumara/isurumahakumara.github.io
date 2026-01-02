<template>
  <div class="experience-page">
    <app-navigation></app-navigation>
    <main class="experience-main">
      <!-- Hero Section -->
      <section class="experience-hero">
        <div class="experience-hero-content">
          <span class="experience-badge">Professional Journey</span>
          <h1 class="experience-title">Work Experience</h1>
          <p class="experience-subtitle">Building scalable data solutions and ML systems across industries</p>
        </div>
        <div class="experience-hero-visual">
          <div class="hero-glow"></div>
        </div>
      </section>

      <!-- Timeline Section -->
      <section class="timeline-section">
        <div class="container">
          <div class="timeline">
            <!-- mindbodygreen.com -->
            <div class="timeline-item">
              <div class="timeline-marker">
                <div class="marker-dot"></div>
                <div class="marker-line"></div>
              </div>
              <div class="timeline-content">
                <div class="job-header">
                  <div class="job-info">
                    <h3 class="job-title">Data Scientist</h3>
                    <p class="job-company">mindbodygreen.com</p>
                    <p class="job-meta">
                      <span class="job-period">Oct 2024 - Nov 2025</span>
                      <span class="job-location">NY, USA (Remote)</span>
                    </p>
                  </div>
                  <div class="job-badge current">Current</div>
                </div>
                <ul class="job-achievements">
                  <li>Built forecasting models to predict subscriber churn and ran A/B tests that improved monthly retention by 2–3%</li>
                  <li>Developed custom data pipelines integrating Klaviyo, HubSpot, Google Ads, Shopify, and Snowflake using Graph and REST APIs</li>
                  <li>Conducted exploratory and statistical analysis using SQL and PySpark to support experimentation and business decisions</li>
                  <li>Delivered executive-facing insights through Tableau and Looker dashboards</li>
                  <li>Administered Snowflake governance, including authentication, role-based permissions, and monitoring systems</li>
                </ul>
                <div class="job-tech">
                  <span class="tech-tag">Snowflake</span>
                  <span class="tech-tag">dbt</span>
                  <span class="tech-tag">Sagemaker</span>
                  <span class="tech-tag">PySpark</span>
                  <span class="tech-tag">Tableau</span>
                  <span class="tech-tag">Looker</span>
                </div>
              </div>
            </div>

            <!-- The Web Sushi -->
            <div class="timeline-item">
              <div class="timeline-marker">
                <div class="marker-dot"></div>
                <div class="marker-line"></div>
              </div>
              <div class="timeline-content">
                <div class="job-header">
                  <div class="job-info">
                    <h3 class="job-title">Senior Data Scientist</h3>
                    <p class="job-company">The Web Sushi</p>
                    <p class="job-meta">
                      <span class="job-period">Mar 2024 - Oct 2024</span>
                      <span class="job-location">Colombo, Sri Lanka</span>
                    </p>
                  </div>
                </div>
                <ul class="job-achievements">
                  <li>Forecasted weighted average bond yields for Sri Lanka Central Bank auctions with RMSE ~0.20</li>
                  <li>Led the development of Bento-Box, a web and social media analytics suite, managing a team of 6 engineers</li>
                  <li>Designed and implemented end-to-end analytics pipelines, from ETL to visualization</li>
                </ul>
                <div class="job-tech">
                  <span class="tech-tag">AWS Lambda</span>
                  <span class="tech-tag">AWS Glue</span>
                  <span class="tech-tag">MongoDB</span>
                  <span class="tech-tag">Jupyter</span>
                </div>
              </div>
            </div>

            <!-- Alibaba Group -->
            <div class="timeline-item highlight">
              <div class="timeline-marker">
                <div class="marker-dot"></div>
                <div class="marker-line"></div>
              </div>
              <div class="timeline-content">
                <div class="job-header">
                  <div class="job-info">
                    <h3 class="job-title">Data Scientist</h3>
                    <p class="job-company">Alibaba Group (Daraz)</p>
                    <p class="job-meta">
                      <span class="job-period">Oct 2021 - Mar 2024</span>
                      <span class="job-location">Singapore (Remote)</span>
                    </p>
                  </div>
                  <div class="job-badge featured">2.5 Years</div>
                </div>
                <ul class="job-achievements">
                  <li>Developed recommendation systems leveraging Apriori Algorithm (Alibaba Swing) and Knowledge Graphs</li>
                  <li>Deployed Alibaba Swing and drove 5% sales growth across South Asian markets (PK, BD)</li>
                  <li>Trained and deployed deep learning models for CTR and CVR prediction serving ~100 requests per second</li>
                  <li>Deep Learning Algorithms: DeepFM and DeepCTR</li>
                  <li>Maintained and deployed scalable Java API for real-time recommendation and personalization services</li>
                  <li>Conducted large-scale data mining, model deployment, and A/B testing</li>
                </ul>
                <div class="job-tech">
                  <span class="tech-tag">Alibaba Cloud</span>
                  <span class="tech-tag">Python</span>
                  <span class="tech-tag">Java</span>
                  <span class="tech-tag">SQL</span>
                  <span class="tech-tag">MLOps</span>
                  <span class="tech-tag">DeepFM</span>
                </div>
              </div>
            </div>

            <!-- Dialog Axiata -->
            <div class="timeline-item">
              <div class="timeline-marker">
                <div class="marker-dot"></div>
                <div class="marker-line"></div>
              </div>
              <div class="timeline-content">
                <div class="job-header">
                  <div class="job-info">
                    <h3 class="job-title">Data Analyst</h3>
                    <p class="job-company">Dialog Axiata</p>
                    <p class="job-meta">
                      <span class="job-period">May 2021 - Oct 2021</span>
                      <span class="job-location">Colombo, Sri Lanka (Remote)</span>
                    </p>
                  </div>
                </div>
                <ul class="job-achievements">
                  <li>Analyzed user behavior for BizCare App, a Telecom Package Management System for Dialog Corporate Customers</li>
                  <li>Enhanced user experience by providing actionable insights that reduced customer case inquiries</li>
                  <li>Optimized business operations by leveraging data-driven analysis</li>
                </ul>
                <div class="job-tech">
                  <span class="tech-tag">Tableau</span>
                  <span class="tech-tag">SQL</span>
                  <span class="tech-tag">Data Analysis</span>
                </div>
              </div>
            </div>

            <!-- Sri Lanka Atomic Energy Board -->
            <div class="timeline-item">
              <div class="timeline-marker">
                <div class="marker-dot"></div>
              </div>
              <div class="timeline-content">
                <div class="job-header">
                  <div class="job-info">
                    <h3 class="job-title">Scientist (Trainee)</h3>
                    <p class="job-company">Sri Lanka Atomic Energy Board</p>
                    <p class="job-meta">
                      <span class="job-period">Jan 2020 - Mar 2020</span>
                      <span class="job-location">Colombo, Sri Lanka</span>
                    </p>
                  </div>
                </div>
                <ul class="job-achievements">
                  <li>Conducted Non-Destructive Testing (NDT) of materials for flaws without causing damage</li>
                  <li>Calibrated Cover-meter used in testing the strength of concrete via data collection</li>
                  <li>Used Mathematica for analysis and visualization</li>
                </ul>
                <div class="job-tech">
                  <span class="tech-tag">Mathematica</span>
                  <span class="tech-tag">NDT</span>
                  <span class="tech-tag">Data Collection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Summary Section -->
      <section class="skills-summary-section">
        <div class="container">
          <h2 class="section-title">Technical Expertise</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <div class="skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16"/>
                </svg>
              </div>
              <h3 class="skill-category-title">Languages</h3>
              <p class="skill-list">Python, SQL, Java, Fortran</p>
            </div>
            <div class="skill-category">
              <div class="skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/>
                  <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/>
                  <path d="M18 18a4 4 0 0 0 2-7.464"/>
                  <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/>
                  <path d="M6 18a4 4 0 0 1-2-7.464"/>
                  <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/>
                </svg>
              </div>
              <h3 class="skill-category-title">Data Science</h3>
              <p class="skill-list">Machine Learning, Deep Learning, Recommendation Systems, A/B Testing, Forecasting</p>
            </div>
            <div class="skill-category">
              <div class="skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6"/>
                  <path d="M4 6v6a8 3 0 0 0 16 0V6"/>
                  <path d="M4 12v6a8 3 0 0 0 16 0v-6"/>
                </svg>
              </div>
              <h3 class="skill-category-title">Data Engineering</h3>
              <p class="skill-list">Snowflake, dbt, PySpark, ETL, AWS Glue, AWS Lambda</p>
            </div>
            <div class="skill-category">
              <div class="skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2v8m4-4l-4 4l-4-4"/>
                  <rect width="20" height="8" x="2" y="14" rx="2"/>
                  <path d="M6 18h.01M10 18h.01"/>
                </svg>
              </div>
              <h3 class="skill-category-title">Cloud & MLOps</h3>
              <p class="skill-list">AWS Sagemaker, Alibaba Cloud, MLOps, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Impact Metrics Section -->
      <section class="impact-section">
        <div class="container">
          <div class="impact-grid">
            <div class="impact-card">
              <span class="impact-value">5%</span>
              <span class="impact-label">Sales Growth</span>
              <span class="impact-context">South Asian Markets</span>
            </div>
            <div class="impact-card">
              <span class="impact-value">~100</span>
              <span class="impact-label">Requests/Second</span>
              <span class="impact-context">ML Model Serving</span>
            </div>
            <div class="impact-card">
              <span class="impact-value">2-3%</span>
              <span class="impact-label">Retention Lift</span>
              <span class="impact-context">A/B Testing Impact</span>
            </div>
            <div class="impact-card">
              <span class="impact-value">0.20</span>
              <span class="impact-label">RMSE Score</span>
              <span class="impact-context">Yield Forecasting</span>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="experience-cta">
        <div class="container">
          <h2 class="cta-title">Want to Know More?</h2>
          <p class="cta-description">Download my full resume or get in touch to discuss opportunities.</p>
          <div class="cta-actions">
            <a href="/resume" class="btn btn-primary btn-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <path d="m7 10l5 5l5-5"/>
              </svg>
              <span>View Full Resume</span>
            </a>
            <a href="mailto:imahakumara@gmail.com" class="btn btn-outline btn-lg">
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </section>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import AppNavigation from '../components/navigation.vue'
import AppFooter from '../components/footer.vue'

useHead({
  title: 'Experience - Isuru Mahakumara',
  meta: [
    { property: 'og:title', content: 'Experience - Isuru Mahakumara' },
    { name: 'description', content: 'Professional experience of Isuru Mahakumara - Data Scientist with experience at Alibaba Group, mindbodygreen, and more.' },
  ],
})
</script>

<style scoped>
.experience-page {
  width: 100%;
  display: block;
  min-height: 100vh;
  background: var(--color-surface);
}

.experience-main {
  overflow: hidden;
}

/* Hero Section */
.experience-hero {
  display: flex;
  padding: var(--spacing-4xl) 0;
  position: relative;
  background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-elevated) 100%);
  min-height: 45vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.experience-hero-content {
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

.experience-hero-visual {
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
  opacity: 0.12;
  position: absolute;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, var(--color-secondary) 0%, transparent 70%);
}

.experience-badge {
  color: var(--color-secondary);
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-lg);
  font-size: var(--font-size-sm);
  background: color-mix(in srgb, var(--color-secondary) 12%, transparent);
  border-radius: var(--border-radius-full);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.experience-title {
  color: var(--color-on-surface);
  margin: 0;
  font-size: var(--font-size-4xl);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-heading);
  line-height: var(--line-height-heading);
  letter-spacing: var(--letter-spacing-heading);
}

.experience-subtitle {
  color: var(--color-on-surface-secondary);
  margin: 0;
  font-size: var(--font-size-xl);
  max-width: 600px;
  font-family: var(--font-family-body);
  line-height: var(--line-height-body);
}

/* Timeline Section */
.timeline-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface-elevated);
}

.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  gap: var(--spacing-xl);
  padding-bottom: var(--spacing-3xl);
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 24px;
}

.marker-dot {
  width: 16px;
  height: 16px;
  background: var(--color-primary);
  border-radius: var(--border-radius-full);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-primary) 20%, transparent);
  flex-shrink: 0;
}

.timeline-item.highlight .marker-dot {
  width: 20px;
  height: 20px;
  background: var(--color-secondary);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-secondary) 20%, transparent);
}

.marker-line {
  flex: 1;
  width: 2px;
  margin-top: var(--spacing-sm);
  background: linear-gradient(to bottom, var(--color-primary), var(--color-border));
}

.timeline-item.highlight .marker-line {
  background: linear-gradient(to bottom, var(--color-secondary), var(--color-border));
}

.timeline-content {
  flex: 1;
  padding: var(--spacing-2xl);
  background: var(--color-surface);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-border);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.timeline-content:hover {
  border-color: var(--color-primary);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.timeline-item.highlight .timeline-content {
  border-color: color-mix(in srgb, var(--color-secondary) 40%, transparent);
  background: linear-gradient(135deg, var(--color-surface) 0%, color-mix(in srgb, var(--color-secondary) 3%, var(--color-surface)) 100%);
}

.timeline-item.highlight .timeline-content:hover {
  border-color: var(--color-secondary);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.job-info {
  flex: 1;
}

.job-title {
  color: var(--color-on-surface);
  margin: 0 0 var(--spacing-xs);
  font-size: var(--font-size-xl);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-heading);
}

.job-company {
  color: var(--color-primary);
  margin: 0 0 var(--spacing-xs);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
}

.timeline-item.highlight .job-company {
  color: var(--color-secondary);
}

.job-meta {
  color: var(--color-on-surface-secondary);
  margin: 0;
  font-size: var(--font-size-sm);
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.job-period::after {
  content: "•";
  margin-left: var(--spacing-md);
  opacity: 0.5;
}

.job-badge {
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  border-radius: var(--border-radius-full);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  flex-shrink: 0;
}

.job-badge.current {
  color: var(--color-on-accent);
  background: var(--color-accent);
}

.job-badge.featured {
  color: var(--color-on-secondary);
  background: var(--color-secondary);
}

.job-achievements {
  margin: 0 0 var(--spacing-lg);
  padding-left: var(--spacing-xl);
  list-style: none;
}

.job-achievements li {
  color: var(--color-on-surface-secondary);
  position: relative;
  padding: var(--spacing-xs) 0;
  font-size: var(--font-size-base);
  line-height: var(--line-height-body);
}

.job-achievements li::before {
  content: "";
  position: absolute;
  left: calc(-1 * var(--spacing-lg));
  top: 0.75em;
  width: 6px;
  height: 6px;
  background: var(--color-primary);
  border-radius: var(--border-radius-full);
}

.timeline-item.highlight .job-achievements li::before {
  background: var(--color-secondary);
}

.job-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.tech-tag {
  color: var(--color-primary);
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-xs);
  background: color-mix(in srgb, var(--color-primary) 10%, transparent);
  border-radius: var(--border-radius-sm);
  font-weight: var(--font-weight-medium);
}

.timeline-item.highlight .tech-tag {
  color: var(--color-secondary);
  background: color-mix(in srgb, var(--color-secondary) 10%, transparent);
}

/* Skills Summary Section */
.skills-summary-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface);
}

.skills-grid {
  gap: var(--spacing-xl);
  display: grid;
  margin-top: var(--spacing-3xl);
  grid-template-columns: repeat(4, 1fr);
}

.skill-category {
  gap: var(--spacing-md);
  display: flex;
  padding: var(--spacing-2xl);
  text-align: center;
  background: var(--color-surface-elevated);
  border-radius: var(--border-radius-lg);
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--color-border);
}

.skill-icon {
  color: var(--color-primary);
  width: 56px;
  height: 56px;
  display: flex;
  background: color-mix(in srgb, var(--color-primary) 12%, transparent);
  align-items: center;
  border-radius: var(--border-radius-md);
  justify-content: center;
}

.skill-category-title {
  color: var(--color-on-surface);
  margin: 0;
  font-size: var(--font-size-lg);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-heading);
}

.skill-list {
  color: var(--color-on-surface-secondary);
  margin: 0;
  font-size: var(--font-size-sm);
  line-height: var(--line-height-body);
}

/* Impact Section */
.impact-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-primary);
}

.impact-grid {
  gap: var(--spacing-xl);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.impact-card {
  gap: var(--spacing-xs);
  display: flex;
  padding: var(--spacing-2xl);
  text-align: center;
  flex-direction: column;
  align-items: center;
}

.impact-value {
  color: var(--color-on-primary);
  font-size: var(--font-size-4xl);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-heading);
  line-height: 1;
}

.impact-label {
  color: var(--color-on-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.impact-context {
  color: color-mix(in srgb, var(--color-on-primary) 70%, transparent);
  font-size: var(--font-size-sm);
}

/* CTA Section */
.experience-cta {
  padding: var(--spacing-4xl) 0;
  text-align: center;
  background: var(--color-surface-elevated);
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
  .skills-grid,
  .impact-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .timeline-item {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .timeline-marker {
    flex-direction: row;
    width: auto;
  }

  .marker-line {
    display: none;
  }

  .job-header {
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .job-meta {
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .job-period::after {
    display: none;
  }

  .experience-title {
    font-size: var(--font-size-3xl);
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 479px) {
  .experience-hero {
    min-height: 35vh;
  }

  .skills-grid,
  .impact-grid {
    grid-template-columns: 1fr;
  }

  .timeline-content {
    padding: var(--spacing-lg);
  }
}
</style>

