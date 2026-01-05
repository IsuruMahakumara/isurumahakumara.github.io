<template>
  <div class="page">
    <app-navigation></app-navigation>

    <main>
      <section class="section">
        <div class="container">
          <header class="page-header">
            <h1 class="page-title">Experience</h1>
            <p class="page-intro">
              Building scalable data solutions and ML systems.
            </p>
          </header>

          <!-- Timeline -->
          <div class="timeline">
            <!-- mindbodygreen.com -->
            <article class="job">
              <div class="job-header">
                <div>
                  <h2 class="job-title">Data Scientist</h2>
                  <p class="job-company">mindbodygreen.com</p>
                </div>
                <div class="job-meta">
                  <span class="job-period">Oct 2024 — Present</span>
                  <span class="job-location">NY, USA (Remote)</span>
                </div>
              </div>
              <ul class="job-list">
                <li>Built forecasting models to predict subscriber churn; A/B tests improved retention by 2–3%</li>
                <li>Developed custom data pipelines integrating Klaviyo, HubSpot, Google Ads, Shopify, and Snowflake</li>
                <li>Delivered executive insights through Tableau and Looker dashboards</li>
              </ul>
              <div class="job-skills">
                <span>Snowflake</span>
                <span>dbt</span>
                <span>Sagemaker</span>
                <span>PySpark</span>
                <span>SnowPark</span>
                <span>Machine Learning</span>
                <span>A/B Testing</span>
                <span>Tableau</span>
                <span>LookML</span>  
                <span>GitHub</span>
                <span>AWS Sagemaker</span>
          
              </div>
            </article>

            <!-- The Web Sushi -->
            <article class="job">
              <div class="job-header">
                <div>
                  <h2 class="job-title">Senior Data Scientist</h2>
                  <p class="job-company">The Web Sushi</p>
                </div>
                <div class="job-meta">
                  <span class="job-period">Mar 2024 — Oct 2024</span>
                  <span class="job-location">Colombo, Sri Lanka</span>
                </div>
              </div>
              <ul class="job-list">
                <li>Forecasted weighted average bond yields for Sri Lanka Central Bank auctions (RMSE ~0.20)</li>
                <li>Led development of Bento-Box analytics suite, managing a team of 6 engineers</li>
              </ul>
              <div class="job-skills">
                <span>AWS Lambda</span>
                <span>MongoDB</span>
                <span>Jupyter</span>
              </div>
            </article>

            <!-- Alibaba Group -->
            <article class="job">
              <div class="job-header">
                <div>
                  <h2 class="job-title">Data Scientist</h2>
                  <p class="job-company">Alibaba Group (Daraz)</p>
                </div>
                <div class="job-meta">
                  <span class="job-period">Oct 2021 — Mar 2024</span>
                  <span class="job-location">Singapore (Remote)</span>
                </div>
              </div>
              <ul class="job-list">
                <li>Developed recommendation systems leveraging Apriori Algorithm and Knowledge Graphs</li>
                <li>Deployed Alibaba Swing and drove 5% sales growth across South Asian markets</li>
                <li>Trained deep learning models for CTR/CVR prediction serving ~100 req/sec</li>
              </ul>
              <div class="job-skills">
                <span>Alibaba Cloud</span>
                <span>Python</span>
                <span>Java</span>
                <span>Deep Learning</span>
                <span>DeepFM</span>

              </div>
            </article>

            <!-- Dialog Axiata -->
            <article class="job">
              <div class="job-header">
                <div>
                  <h2 class="job-title">Data Analyst</h2>
                  <p class="job-company">Dialog Axiata</p>
                </div>
                <div class="job-meta">
                  <span class="job-period">May 2021 — Oct 2021</span>
                  <span class="job-location">Colombo, Sri Lanka</span>
                </div>
              </div>
              <ul class="job-list">
                <li>Analyzed user behavior for BizCare App to reduce customer case inquiries</li>
              </ul>
              <div class="job-skills">
                <span>Tableau</span>
                <span>SQL</span>
              </div>
            </article>

            <!-- Sri Lanka Atomic Energy Board -->
            <article class="job">
              <div class="job-header">
                <div>
                  <h2 class="job-title">Scientist (Trainee)</h2>
                  <p class="job-company">Sri Lanka Atomic Energy Board</p>
                </div>
                <div class="job-meta">
                  <span class="job-period">Jan 2020 — Mar 2020</span>
                  <span class="job-location">Colombo, Sri Lanka</span>
                </div>
              </div>
              <ul class="job-list">
                <li>Conducted Non-Destructive Testing of materials</li>
              </ul>
              <div class="job-skills">
                <span>Mathematica</span>
              </div>
            </article>
          </div>

          <!-- Skills -->
          <div class="skills-section">
            <h2 class="section-title">Skills</h2>
            <div class="skills-grid">
              <div class="skill-group">
                <h3 class="skill-group-title">Languages</h3>
                <p class="skill-group-list">Python, SQL, Java, JavaScript</p>
              </div>
              <div class="skill-group">
                <h3 class="skill-group-title">Data Science</h3>
                <p class="skill-group-list">Recommendation Systems, Predictive Analytics, Forecasting, A/B Testing</p>
              </div>
              <div class="skill-group">
                <h3 class="skill-group-title">Data Engineering</h3>
                <p class="skill-group-list">Snowflake, dbt, SnowPark, PySpark, ETL</p>
              </div>
              <div class="skill-group">
                <h3 class="skill-group-title">Cloud & MLOps</h3>
                <p class="skill-group-list">AWS Sagemaker, Alibaba Cloud</p>
              </div>
              <div class="skill-group">
                <h3 class="skill-group-title">Data Visualization</h3>
                <p class="skill-group-list">Tableau, Looker, Looker Studio, LookML</p>
              </div>
              <div class="skill-group">
                <h3 class="skill-group-title">Web Development</h3>
                <p class="skill-group-list">Vue.js, Flask, FastAPI, REST APIs</p>
              </div>
            </div>
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
  title: 'Experience — Isuru Mahakumara',
  meta: [
    { property: 'og:title', content: 'Experience — Isuru Mahakumara' },
    { name: 'description', content: 'Professional experience at Alibaba Group, mindbodygreen, and more.' },
  ],
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

.page-header {
  margin-bottom: var(--spacing-4xl);
}

.page-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: -0.02em;
  margin-bottom: var(--spacing-md);
}

.page-intro {
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
}

/* Timeline */
.timeline {
  margin-bottom: var(--spacing-4xl);
}

.job {
  padding: var(--spacing-xl) 0;
  border-bottom: 1px solid var(--color-border);
}

.job:first-child {
  border-top: 1px solid var(--color-border);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-md);
}

.job-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--spacing-xs);
}

.job-company {
  color: var(--color-text-secondary);
  margin: 0;
}

.job-meta {
  text-align: right;
  flex-shrink: 0;
}

.job-period {
  display: block;
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
}

.job-location {
  display: block;
  color: var(--color-text-muted);
  font-size: var(--font-size-xs);
}

.job-list {
  margin: 0 0 var(--spacing-md);
  padding-left: var(--spacing-lg);
  color: var(--color-text-secondary);
}

.job-list li {
  margin-bottom: var(--spacing-xs);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
}

.job-skills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.job-skills span {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.job-skills span::before {
  content: "#";
}

/* Skills Section */
.skills-section {
  padding-top: var(--spacing-xl);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-xl);
  margin-top: var(--spacing-2xl);
}

.skill-group-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--spacing-xs);
}

.skill-group-list {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  margin: 0;
}

@media (max-width: 768px) {
  .job-header {
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .job-meta {
    text-align: left;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
