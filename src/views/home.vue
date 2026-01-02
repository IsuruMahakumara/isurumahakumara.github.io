<template>
  <div class="home-container1">
    <app-navigation></app-navigation>
    <section class="hero-section">
      <div class="hero-bg-media">
        <img
          src="https://images.pexels.com/photos/17483869/pexels-photo-17483869.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
          alt="Neural Network Visualization"
          class="hero-img"
        />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="hero-text-col">
          <span class="hero-badge">AI/ML Engineer &amp; Data Scientist</span>
          <h1 class="home-hero-title hero-title">
            Architecting the Future with Intelligence
          </h1>
          <p class="hero-subtitle">
            Specializing in Deep Learning, Predictive Modeling, and MLOps to
            transform complex data into actionable autonomous solutions.
          </p>
          <div class="hero-actions">
            <a href="#">
              <div class="btn btn-primary btn-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                  ></path>
                  <path d="m7 10l5 5l5-5"></path>
                </svg>
                <span>
                  Download CV
                  <span v-html="rawcj6w"></span>
                </span>
              </div>
            </a>
            <a href="#projects">
              <div class="btn btn-lg btn-outline"><span>View Projects</span></div>
            </a>
          </div>
        </div>
        <div class="hero-visual-col">
          <div class="hero-avatar-wrapper">
            <img
              src="https://images.pexels.com/photos/5474037/pexels-photo-5474037.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="ModelForge Lead Engineer"
              class="hero-avatar"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="nav-features">
      <div class="container">
        <div class="features-grid">
          <a href="#projects">
            <div class="nav-card">
              <div class="nav-icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16"></path>
                </svg>
              </div>
              <h3 class="section-subtitle">Projects &amp; Case Studies</h3>
              <p class="section-content">
                End-to-end ML pipelines and research-driven solutions.
              </p>
            </div>
          </a>
          <a href="#">
            <div class="nav-card">
              <div class="nav-icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                  ></path>
                  <path d="m7 10l5 5l5-5"></path>
                </svg>
              </div>
              <h3 class="section-subtitle">Curriculum Vitae</h3>
              <p class="section-content">
                Professional background and technical certifications.
              </p>
            </div>
          </a>
          <a href="#expertise">
            <div class="nav-card">
              <div class="nav-icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                </svg>
              </div>
              <h3 class="section-subtitle">About &amp; Expertise</h3>
              <p class="section-content">
                My philosophy on AI ethics and technical stack.
              </p>
            </div>
          </a>
          <a href="#blog">
            <div class="nav-card">
              <div class="nav-icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m5 7l5 5l-5 5m7 2h7"></path>
                </svg>
              </div>
              <h3 class="section-subtitle">Technical Blog</h3>
              <p class="section-content">
                Insights on emerging AI trends and code tutorials.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section id="projects" class="showcase-section">
      <div class="showcase-header">
        <h2 class="section-title">Selected Case Studies</h2>
        <p class="section-content">Impact-driven machine learning solutions.</p>
      </div>
      <div class="showcase-rail">
        <div class="showcase-card">
          <img
            src="https://images.pexels.com/photos/17486100/pexels-photo-17486100.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            alt="Project 1"
            class="showcase-img"
          />
          <div class="showcase-info">
            <h3 class="section-subtitle">Neural Fraud Detection</h3>
            <p class="section-content">
              99.8% precision in real-time transaction monitoring.
            </p>
            <a href="#">
              <div class="btn btn-link"><span>Full Case Study</span></div>
            </a>
          </div>
        </div>
        <div class="showcase-card">
          <img
            src="https://images.pexels.com/photos/25626428/pexels-photo-25626428.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            alt="Project 2"
            class="showcase-img"
          />
          <div class="showcase-info">
            <h3 class="section-subtitle">Supply Chain Optimizer</h3>
            <p class="section-content">
              Reduced logistics costs by 22% using RL agents.
            </p>
            <a href="#">
              <div class="btn btn-link"><span>Full Case Study</span></div>
            </a>
          </div>
        </div>
        <div class="showcase-card">
          <img
            src="https://images.pexels.com/photos/18069211/pexels-photo-18069211.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            alt="Project 3"
            class="showcase-img"
          />
          <div class="showcase-info">
            <h3 class="section-subtitle">LLM Fine-Tuning</h3>
            <p class="section-content">
              Custom BERT model for medical legal document analysis.
            </p>
            <a href="#">
              <div class="btn btn-link"><span>Full Case Study</span></div>
            </a>
          </div>
        </div>
        <div class="showcase-card">
          <img
            src="https://images.pexels.com/photos/17485706/pexels-photo-17485706.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            alt="Project 4"
            class="showcase-img"
          />
          <div class="showcase-info">
            <h3 class="section-subtitle">Edge Vision AI</h3>
            <p class="section-content">
              Real-time object detection on low-power IoT devices.
            </p>
            <a href="#">
              <div class="btn btn-link"><span>Full Case Study</span></div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="expertise" class="skills-section">
      <div class="container">
        <h2 class="text-center section-title">Core Expertise</h2>
        <div class="skills-grid">
          <div class="skill-item">
            <div class="skill-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
              </svg>
              <span class="section-subtitle">Deep Learning</span>
            </div>
            <div class="skill-bar">
              <div class="home-thq-skill-progress-elm1 skill-progress"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6"></path>
                <path d="M4 6v6a8 3 0 0 0 16 0V6"></path>
                <path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>
              </svg>
              <span class="section-subtitle">Data Engineering</span>
            </div>
            <div class="skill-bar">
              <div class="home-thq-skill-progress-elm2 skill-progress"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"
                ></path>
                <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                <rect width="8" height="8" x="8" y="8" rx="1"></rect>
              </svg>
              <span class="section-subtitle">MLOps</span>
            </div>
            <div class="skill-bar">
              <div class="home-thq-skill-progress-elm3 skill-progress"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16"></path>
              </svg>
              <span class="section-subtitle">Python/PyTorch</span>
            </div>
            <div class="skill-bar">
              <div class="home-thq-skill-progress-elm4 skill-progress"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16M7 16h8m-8-5h12M7 6h3"></path>
              </svg>
              <span class="section-subtitle">Probabilistic Modeling</span>
            </div>
            <div class="skill-bar">
              <div class="home-thq-skill-progress-elm5 skill-progress"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 2v8m4-4l-4 4l-4-4"></path>
                <rect width="20" height="8" x="2" y="14" rx="2"></rect>
                <path d="M6 18h.01M10 18h.01"></path>
              </svg>
              <span class="section-subtitle">Cloud Architecture</span>
            </div>
            <div class="skill-bar">
              <div class="home-thq-skill-progress-elm6 skill-progress"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="metrics-section">
      <div class="container">
        <div class="metrics-grid">
          <div class="metric-card">
            <span class="metric-value">15+</span>
            <span class="metric-label section-content">Models Deployed</span>
          </div>
          <div class="metric-card">
            <span class="metric-value">40%</span>
            <span class="metric-label section-content">Accuracy Lift</span>
          </div>
          <div class="metric-card">
            <span class="metric-value">10TB+</span>
            <span class="metric-label section-content">Data Processed</span>
          </div>
          <div class="metric-card">
            <span class="metric-value">5ms</span>
            <span class="metric-label section-content">Avg Latency</span>
          </div>
          <div class="metric-card">
            <span class="metric-value">12</span>
            <span class="metric-label section-content">Open Source Contribs</span>
          </div>
          <div class="metric-card">
            <span class="metric-value">3</span>
            <span class="metric-label section-content">Patent Pendings</span>
          </div>
        </div>
      </div>
    </section>
    <section class="testimonials-section">
      <div class="showcase-header">
        <h2 class="section-title">Peer Endorsements</h2>
        <p class="section-content">What collaborators say about ModelForge.</p>
      </div>
      <div class="testimonial-rail">
        <div class="testimonial-card">
          <p class="section-content">
            &quot;The attention to model interpretability while maintaining
            state-of-the-art performance is what sets this work apart.&quot;
          </p>
          <div class="testimonial-author">
            <span class="author-name">Dr. Sarah Chen</span>
            <span class="author-role">Chief Scientist, TechPulse AI</span>
          </div>
        </div>
        <div class="testimonial-card">
          <p class="section-content">
            &quot;Transformed our messy data lake into a streamlined feature
            store, cutting model training time by half.&quot;
          </p>
          <div class="testimonial-author">
            <span class="author-name">James Wilson</span>
            <span class="author-role">VP Engineering, DataFlow Inc.</span>
          </div>
        </div>
        <div class="testimonial-card">
          <p class="section-content">
            &quot;Exceptional ability to bridge the gap between complex research
            papers and production-ready ML code.&quot;
          </p>
          <div class="testimonial-author">
            <span class="author-name">Elena Rodriguez</span>
            <span class="author-role">Product Lead, NeuralSystems</span>
          </div>
        </div>
        <div class="testimonial-card">
          <p class="section-content">
            &quot;A rare talent who understands both the mathematical rigor of AI
            and the practical constraints of devops.&quot;
          </p>
          <div class="testimonial-author">
            <span class="author-name">Marcus Thorne</span>
            <span class="author-role">CTO, Quantify Labs</span>
          </div>
        </div>
      </div>
    </section>
    <section id="blog" class="blog-section">
      <div class="container">
        <h2 class="text-center section-title">Technical Notes</h2>
        <div class="blog-rail">
          <article class="blog-card">
            <span class="blog-date">Oct 12, 2025</span>
            <h3 class="section-subtitle">
              Scaling Transformers for Real-time Inference
            </h3>
            <p class="section-content">
              Techniques for quantization and pruning to achieve sub-10ms latency
              on edge hardware.
            </p>
            <a href="#">
              <div class="btn btn-link"><span>Read More</span></div>
            </a>
          </article>
          <article class="blog-card">
            <span class="blog-date">Sep 28, 2025</span>
            <h3 class="section-subtitle">
              The Ethics of Generative Latent Spaces
            </h3>
            <p class="section-content">
              Exploring bias mitigation strategies in multi-modal foundational
              models.
            </p>
            <a href="#">
              <div class="btn btn-link"><span>Read More</span></div>
            </a>
          </article>
          <article class="blog-card">
            <span class="blog-date">Aug 15, 2025</span>
            <h3 class="section-subtitle">
              Building Robust Feature Stores with Redis
            </h3>
            <p class="section-content">
              A guide to low-latency feature retrieval for production-grade
              recommendation engines.
            </p>
            <a href="#">
              <div class="btn btn-link"><span>Read More</span></div>
            </a>
          </article>
        </div>
      </div>
    </section>
    <section class="cta-section">
      <div class="container">
        <div class="cta-split">
          <div class="cta-content">
            <h2 class="section-title">Let&apos;s build something intelligent.</h2>
            <p class="section-content">
              Looking for a lead ML engineer or consultant for your next data
              venture? I&apos;m currently open to new opportunities and
              collaborations.
            </p>
            <div class="cta-buttons">
              <a href="mailto:hire@modelforge.ai?subject=">
                <div class="btn btn-primary btn-lg">
                  <span>Start Conversation</span>
                </div>
              </a>
              <a href="#">
                <div class="btn btn-lg btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                    ></path>
                    <path d="m7 10l5 5l5-5"></path>
                  </svg>
                  <span>
                    Download CV
                    <span v-html="rawpad7"></span>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div class="cta-form-wrapper">
            <form
              action="#"
              method="POST"
              data-form-id="5376bcf3-fc5f-44ee-8882-a245660087dc"
              class="cta-form"
            >
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  required="true"
                  id="thq_textinput_K3z9"
                  name="textinput"
                  data-form-field-id="thq_textinput_K3z9"
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  required="true"
                  id="thq_textinput_VSNs"
                  name="textinput"
                  data-form-field-id="thq_textinput_VSNs"
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <textarea
                  placeholder="Tell me about your project"
                  required="true"
                  rows="4"
                  id="thq_textarea_yTHX"
                  name="textarea"
                  data-form-field-id="thq_textarea_yTHX"
                  class="form-input"
                ></textarea>
              </div>
              <button
                type="submit"
                id="thq_button_BhAI"
                name="button"
                data-form-field-id="thq_button_BhAI"
                class="w-full btn btn-lg btn-accent"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div class="home-container2">
      <div class="home-container3">
        <DangerousHTML
          html="<script defer data-name='modelforge-ux'>
  (function(){
    const forms = document.querySelectorAll('.cta-form')
  
    forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        const inputs = form.querySelectorAll('.form-input')
        let isValid = true
  
        inputs.forEach((input) => {
          if (!input.checkValidity()) {
            isValid = false
            input.style.borderColor = '#e74c3c'
          } else {
            input.style.borderColor = 'var(--color-border)'
          }
        })
  
        if (!isValid) {
          e.preventDefault()
        }
      })
    })
  
    const rails = document.querySelectorAll('.showcase-rail, .testimonial-rail')
    rails.forEach((rail) => {
      let isDown = false
      let startX
      let scrollLeft
  
      rail.addEventListener('mousedown', (e) => {
        isDown = true
        startX = e.pageX - rail.offsetLeft
        scrollLeft = rail.scrollLeft
      })
  
      rail.addEventListener('mouseleave', () => {
        isDown = false
      })
  
      rail.addEventListener('mouseup', () => {
        isDown = false
      })
  
      rail.addEventListener('mousemove', (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - rail.offsetLeft
        const walk = (x - startX) * 2
        rail.scrollLeft = scrollLeft - walk
      })
    })
  })()
  </script>"
        ></DangerousHTML>
      </div>
    </div>
    <app-footer></app-footer>
    <a href="https://play.teleporthq.io/signup">
      <div aria-label="Sign up to TeleportHQ" class="home-container4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 19 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="home-icon53"
        >
          <path
            d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
            fill="#B23ADE"
          ></path>
          <path
            d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
            fill="#FF5C5C"
          ></path>
          <path
            d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
            fill="#2874DE"
          ></path>
        </svg>
        <span class="home-text21">Built in TeleportHQ</span>
      </div>
    </a>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/vue'

import AppNavigation from '../components/navigation'
import AppFooter from '../components/footer'

export default {
  name: 'Home',
  props: {},
  components: {
    AppNavigation,
    DangerousHTML,
    AppFooter,
  },
  data() {
    return {
      rawcj6w: ' ',
      rawpad7: ' ',
    }
  },
  metaInfo: {
    title: 'Jagged Smart Seahorse',
    meta: [
      {
        property: 'og:title',
        content: 'Jagged Smart Seahorse',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://jagged-smart-seahorse-wnmjgn.teleporthq.app/',
      },
    ],
  },
}
</script>

<style scoped>
.home-container1 {
  width: 100%;
  display: block;
  min-height: 100vh;
}
 
.home-thq-skill-progress-elm1 {
  width: 95%;
}
 
.home-thq-skill-progress-elm2 {
  width: 88%;
}
 
.home-thq-skill-progress-elm3 {
  width: 82%;
}
 
.home-thq-skill-progress-elm4 {
  width: 98%;
}
 
.home-thq-skill-progress-elm5 {
  width: 90%;
}
 
.home-thq-skill-progress-elm6 {
  width: 85%;
}
 
.home-container2 {
  display: none;
}
 
.home-container3 {
  display: contents;
}
 
.home-container4 {
  right: 50px;
  border: 1px solid #ffffff5c;
  bottom: 30px;
  display: flex;
  z-index: 22;
  position: fixed;
  box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
  min-height: auto;
  align-items: center;
  padding-top: 8px;
  padding-left: 12px;
  border-radius: 8px;
  padding-right: 12px;
  padding-bottom: 8px;
  backdrop-filter: blur(6px);
  background-color: rgba(41, 41, 41, 0.41);
}
 
.home-icon53 {
  width: 24px;
  margin-right: 4px;
}
 
.home-text21 {
  color: white;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}
</style>
