// script.js

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    target.scrollIntoView({ behavior: 'smooth' })
  })
})

// Contact form submission (demo)
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault()
  alert(
    'Thank you, ' + this.name.value + '! Your message has been sent (demo).'
  )
  this.reset()
})

// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear()

// Optional: animate project cards on hover (floating effect)
document.querySelectorAll('.project').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.02)'
    card.style.boxShadow = '0 15px 40px rgba(255,106,0,0.4)'
  })
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)'
    card.style.boxShadow = ''
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const downloadBtn = document.getElementById('downloadCV')

  if (downloadBtn) {
    downloadBtn.addEventListener('click', function () {
      const link = document.createElement('a')
      link.href = 'Merchant application.pdf' // file path (must exist)
      link.setAttribute('download', 'Merchant application.pdf')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
  }
})

// function.js additions
// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
  })

  // Custom cursor
  const cursorDot = document.querySelector('[data-cursor-dot]')
  const cursorOutline = document.querySelector('[data-cursor-outline]')

  window.addEventListener('mousemove', function (e) {
    const posX = e.clientX
    const posY = e.clientY

    cursorDot.style.left = `${posX}px`
    cursorDot.style.top = `${posY}px`

    cursorOutline.style.left = `${posX}px`
    cursorOutline.style.top = `${posY}px`
  })

  // Interactive elements effect
  const interactiveElements = document.querySelectorAll(
    'a, button, .tech-item, .project'
  )

  interactiveElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)'
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)'
    })

    element.addEventListener('mouseleave', () => {
      cursorDot.style.transform = 'translate(-50%, -50%) scale(1)'
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)'
    })
  })

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle')
  const navMenu = document.querySelector('nav ul')

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show')
    menuToggle.classList.toggle('active')
  })

  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const targetId = this.getAttribute('href')
      if (targetId === '#') return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        })

        // Close mobile menu if open
        if (navMenu.classList.contains('show')) {
          navMenu.classList.remove('show')
          menuToggle.classList.remove('active')
        }
      }
    })
  })

  // Parallax effect for profile image
  window.addEventListener('scroll', () => {
    const profileImage = document.querySelector('.profile-image')
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.2

    if (profileImage) {
      profileImage.style.transform = `translateY(${rate}px)`
    }
  })
})
