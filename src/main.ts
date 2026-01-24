import './style.css'

// ==================== GALLERY IMAGES ====================
const galleryMedia = [
  { type: 'image', src: '/IMG-20251205-WA0077.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0078.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0079.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0080.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0081.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0082.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0083.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0084.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0085.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0086.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0087.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0088.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0089.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0090.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0091.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0092.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0093.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0094.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0095.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0096.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0097.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0098.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0099.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0100.jpg' },
  { type: 'image', src: '/IMG-20251205-WA0101.jpg' },
  { type: 'image', src: '/WhatsApp Image 2025-12-06 at 06.22.16_0d99bb6a.jpg' },
  { type: 'video', src: '/VID-20251205-WA0012.mp4' },
  { type: 'video', src: '/WhatsApp Video 2025-12-05 at 10.36.49_9aa18c5b.mp4' },
  { type: 'video', src: '/WhatsApp Video 2025-12-05 at 10.36.51_591add39.mp4' },
  // New images added January 2026
  { type: 'image', src: '/new/WhatsApp Image 2026-01-23 at 09.13.47.jpeg' },
  { type: 'image', src: '/new/WhatsApp Image 2026-01-23 at 09.13.48.jpeg' },
  { type: 'image', src: '/new/WhatsApp Image 2026-01-23 at 09.13.48 (1).jpeg' },
  { type: 'image', src: '/new/WhatsApp Image 2026-01-23 at 09.13.48 (2).jpeg' },
  { type: 'image', src: '/new/WhatsApp Image 2026-01-23 at 09.13.49.jpeg' },
  { type: 'image', src: '/new/WhatsApp Image 2026-01-23 at 09.13.49 (1).jpeg' },
  { type: 'image', src: '/new/WhatsApp Image 2026-01-23 at 09.13.49 (2).jpeg' },
  { type: 'image', src: '/new/WhatsApp Image 2026-01-23 at 09.13.50.jpeg' },
  { type: 'image', src: '/new/WhatsApp Image 2026-01-23 at 09.13.50 (1).jpeg' },
  { type: 'image', src: '/new/WhatsApp Image 2026-01-23 at 09.13.50 (2).jpeg' },
  { type: 'image', src: '/new/WhatsApp Image 2026-01-23 at 09.13.51.jpeg' },
  { type: 'image', src: '/new/WhatsApp Image 2026-01-23 at 09.13.51 (1).jpeg' },
]

// ==================== HTML STRUCTURE ====================
const appHTML = `
  <!-- Navigation -->
  <nav class="nav" id="nav">
    <div class="nav-container">
      <a href="#home" class="logo">
        <img src="/logo.svg" alt="Nicech Logo" class="logo-img">
        <span class="logo-text">NICECH</span>
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="#home" class="nav-link active">Home</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#gallery" class="nav-link">Gallery</a></li>
      </ul>
      <button class="menu-toggle" id="menuToggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero" id="home">
    <div class="hero-content">
      <h1 class="hero-title">
        Welcome to <span class="highlight">Nicech</span><br>Transport Crew Self Help Group
      </h1>
      <p class="hero-subtitle">
        Empowering the Matatu industry community through unity, support, and shared prosperity.
        Together, we build a stronger, more secure future for all our members.
      </p>
      <div class="hero-cta">
        <a href="#about" class="btn btn-primary">Learn More</a>
        <a href="#gallery" class="btn btn-secondary">View Gallery</a>
      </div>
    </div>
    <div class="scroll-indicator">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>

  <!-- About Section -->
  <section class="about" id="about">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <span class="section-tag">Who We Are</span>
        <h2 class="section-title">About Nicech Transport Crew</h2>
        <p class="section-description">
          A community-driven self help group dedicated to supporting individuals in the Matatu industry
        </p>
      </div>

      <div class="about-content">
        <div class="about-text animate-on-scroll">
          <h3>Our Mission</h3>
          <p>
            To promote the social, economic, and personal well-being of Matatu industry workers
            through structured welfare programs, member empowerment, and strong community support.
          </p>
        </div>
        <div class="about-text animate-on-scroll">
          <h3>Our Vision</h3>
          <p>
            A united and financially secure Matatu community where every member feels valued,
            protected, and supported in their journey to prosperity.
          </p>
        </div>
      </div>

      <div class="about-features">
        <div class="feature-card animate-on-scroll">
          <div class="feature-icon">🤝</div>
          <h4>Unity</h4>
          <p>We believe in standing together as one community, supporting each other through challenges and celebrating successes.</p>
        </div>
        <div class="feature-card animate-on-scroll">
          <div class="feature-icon">💼</div>
          <h4>Welfare Support</h4>
          <p>Offering assistance during emergencies, bereavements, medical situations, and other unforeseen challenges.</p>
        </div>
        <div class="feature-card animate-on-scroll">
          <div class="feature-icon">💰</div>
          <h4>Financial Empowerment</h4>
          <p>Helping members build a culture of saving, financial literacy, and long-term economic stability.</p>
        </div>
        <div class="feature-card animate-on-scroll">
          <div class="feature-icon">📚</div>
          <h4>Training & Development</h4>
          <p>Encouraging professionalism, safety, and growth through training programs and industry awareness initiatives.</p>
        </div>
        <div class="feature-card animate-on-scroll">
          <div class="feature-icon">🔒</div>
          <h4>Transparency</h4>
          <p>We commit to openness in governance and financial management, ensuring trust and accountability.</p>
        </div>
        <div class="feature-card animate-on-scroll">
          <div class="feature-icon">❤️</div>
          <h4>Respect & Support</h4>
          <p>Every member is treated with dignity, regardless of role or rank. We exist to uplift one another.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section class="gallery" id="gallery">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Our Community</span>
        <h2 class="section-title">Gallery</h2>
        <p class="section-description">
          Moments that capture the spirit of unity and togetherness in our community
        </p>
      </div>

      <div class="gallery-container">
        <div class="gallery-3d">
          <div class="gallery-track" id="galleryTrack"></div>
        </div>
        <div class="gallery-controls">
          <button class="gallery-btn" id="prevBtn">‹</button>
          <div class="gallery-pagination" id="galleryPagination"></div>
          <div class="gallery-counter" id="galleryCounter">1 / ${galleryMedia.length}</div>
          <button class="gallery-btn" id="nextBtn">›</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <img src="/logo.svg" alt="Nicech Logo">
        <h3>NICECH TRANSPORT CREW SELF HELP GROUP</h3>
      </div>
      <div class="footer-info">
        <p>P.O. BOX 6555-00100 NAIROBI, KENYA</p>
        <p>PATRON: 0725400324 | CHAIRMAN: 0722715338</p>
        <p>Email: nicechtransport@gmail.com</p>
      </div>
      <p class="footer-copyright">&copy; 2025 Nicech Transport Crew Self Help Group. All rights reserved.</p>
    </div>
  </footer>
`

// ==================== INITIALIZE APP ====================
const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = appHTML

// ==================== 3D GALLERY ====================
class Gallery3D {
  private currentIndex = 0
  private track: HTMLElement
  private items: HTMLElement[] = []
  private prevBtn: HTMLElement
  private nextBtn: HTMLElement
  private counter: HTMLElement
  private pagination: HTMLElement
  private dots: HTMLElement[] = []
  private readonly itemsToShow = 5
  private readonly radius = 450
  private readonly mediaList = galleryMedia

  constructor() {
    this.track = document.getElementById('galleryTrack')!
    this.prevBtn = document.getElementById('prevBtn')!
    this.nextBtn = document.getElementById('nextBtn')!
    this.counter = document.getElementById('galleryCounter')!
    this.pagination = document.getElementById('galleryPagination')!

    this.init()
  }

  private init() {
    this.createItems()
    this.createPagination()
    this.attachEventListeners()
    this.updateGallery()
  }

  private createItems() {
    this.mediaList.forEach((media, index) => {
      const item = document.createElement('div')
      item.className = 'gallery-item'

      const inner = document.createElement('div')
      inner.className = 'gallery-item-inner'

      if (media.type === 'image') {
        const img = document.createElement('img')
        img.src = media.src
        img.alt = `Gallery image ${index + 1}`
        img.loading = 'lazy'
        inner.appendChild(img)
      } else {
        const video = document.createElement('video')
        video.src = media.src
        video.muted = true
        video.loop = true
        video.playsInline = true
        video.addEventListener('mouseenter', () => video.play())
        video.addEventListener('mouseleave', () => video.pause())
        inner.appendChild(video)
      }

      item.appendChild(inner)
      this.track.appendChild(item)
      this.items.push(item)
    })
  }

  private createPagination() {
    const totalDots = Math.min(10, this.mediaList.length)
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('button')
      dot.className = 'gallery-dot'
      dot.addEventListener('click', () => this.goToIndex(i))
      this.pagination.appendChild(dot)
      this.dots.push(dot)
    }
  }

  private attachEventListeners() {
    this.prevBtn.addEventListener('click', () => this.prev())
    this.nextBtn.addEventListener('click', () => this.next())

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev()
      if (e.key === 'ArrowRight') this.next()
    })

    let touchStartX = 0
    let touchEndX = 0

    this.track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX
    })

    this.track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX
      if (touchStartX - touchEndX > 50) this.next()
      if (touchEndX - touchStartX > 50) this.prev()
    })
  }

  private updateGallery() {
    this.items.forEach((item, index) => {
      const relativeIndex = index - this.currentIndex
      const totalItems = this.items.length

      let normalizedIndex = relativeIndex
      if (normalizedIndex < -Math.floor(this.itemsToShow / 2)) {
        normalizedIndex += totalItems
      } else if (normalizedIndex > Math.floor(this.itemsToShow / 2)) {
        normalizedIndex -= totalItems
      }

      const isCenter = index === this.currentIndex
      const angle = (normalizedIndex / this.itemsToShow) * Math.PI * 2
      const x = Math.sin(angle) * this.radius * 1.2
      const z = Math.cos(angle) * this.radius - this.radius

      let scale: number
      let opacity: number

      if (isCenter) {
        scale = 1
        opacity = 1
      } else {
        scale = 0.5
        opacity = 0.3
      }

      const zIndex = isCenter ? 100 : Math.round(20 + z)

      item.style.transform = `
        translateX(${x}px)
        translateZ(${z}px)
        scale(${scale})
        rotateY(${-angle * 0.5}rad)
      `
      item.style.opacity = String(opacity)
      item.style.zIndex = String(zIndex)
      item.style.filter = isCenter ? 'brightness(1) blur(0px)' : 'brightness(0.5) blur(3px)'
      item.style.pointerEvents = isCenter ? 'auto' : 'none'
    })

    this.counter.textContent = `${this.currentIndex + 1} / ${this.mediaList.length}`

    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex % this.dots.length)
    })
  }

  private next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length
    this.updateGallery()
  }

  private prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length
    this.updateGallery()
  }

  private goToIndex(index: number) {
    this.currentIndex = index
    this.updateGallery()
  }
}

// ==================== NAVIGATION ====================
class Navigation {
  private nav: HTMLElement
  private navLinks: NodeListOf<HTMLAnchorElement>
  private menuToggle: HTMLElement
  private navLinksContainer: HTMLElement

  constructor() {
    this.nav = document.getElementById('nav')!
    this.navLinks = document.querySelectorAll('.nav-link')
    this.menuToggle = document.getElementById('menuToggle')!
    this.navLinksContainer = document.getElementById('navLinks')!

    this.init()
  }

  private init() {
    this.handleScroll()
    this.handleActiveLinks()
    this.handleMobileMenu()

    window.addEventListener('scroll', () => {
      this.handleScroll()
      this.handleActiveLinks()
    })
  }

  private handleScroll() {
    if (window.scrollY > 100) {
      this.nav.classList.add('scrolled')
    } else {
      this.nav.classList.remove('scrolled')
    }
  }

  private handleActiveLinks() {
    const sections = document.querySelectorAll('section')
    const scrollPos = window.scrollY + 100

    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop
      const sectionHeight = section.clientHeight
      const sectionId = section.getAttribute('id')

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        this.navLinks.forEach(link => {
          link.classList.remove('active')
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active')
          }
        })
      }
    })
  }

  private handleMobileMenu() {
    this.menuToggle.addEventListener('click', () => {
      this.menuToggle.classList.toggle('active')
      this.navLinksContainer.classList.toggle('active')
    })

    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.menuToggle.classList.remove('active')
        this.navLinksContainer.classList.remove('active')
      })
    })
  }
}

// ==================== SCROLL ANIMATIONS ====================
class ScrollAnimations {
  private elements: NodeListOf<Element>

  constructor() {
    this.elements = document.querySelectorAll('.animate-on-scroll')
    this.init()
  }

  private init() {
    this.checkElements()
    window.addEventListener('scroll', () => this.checkElements())
  }

  private checkElements() {
    const triggerBottom = window.innerHeight * 0.85

    this.elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top

      if (elementTop < triggerBottom) {
        element.classList.add('visible')
      }
    })
  }
}

// ==================== INITIALIZE ====================
new Gallery3D()
new Navigation()
new ScrollAnimations()

console.log('Nicech Welfare Association website loaded successfully!')
