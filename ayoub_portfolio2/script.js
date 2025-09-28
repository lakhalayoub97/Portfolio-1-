// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight
      const targetPosition = target.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Header background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)"
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.boxShadow = "none"
  }
})

const typewriter = document.getElementById("typewriter")
const texts = ["Développeur Web", "Rédacteur", "Développeur Full-Stack", "Freelancer"]
let textIndex = 0
let charIndex = 0
let isDeleting = false

function type() {
  const currentText = texts[textIndex]

  if (isDeleting) {
    typewriter.textContent = currentText.substring(0, charIndex - 1)
    charIndex--
  } else {
    typewriter.textContent = currentText.substring(0, charIndex + 1)
    charIndex++
  }

  let typeSpeed = isDeleting ? 50 : 100

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    textIndex = (textIndex + 1) % texts.length
    typeSpeed = 500
  }

  setTimeout(type, typeSpeed)
}

// Start typewriter effect
if (typewriter) {
  type()
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Add animation classes and observe elements
document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in animation to section headers
  const sectionHeaders = document.querySelectorAll(".section-header")
  sectionHeaders.forEach((header) => {
    header.classList.add("fade-in")
    observer.observe(header)
  })

  // Add slide-in animations to cards
  const skillItems = document.querySelectorAll(".skill-item")
  skillItems.forEach((item, index) => {
    item.classList.add(index % 2 === 0 ? "slide-in-left" : "slide-in-right")
    observer.observe(item)
  })

  const serviceCards = document.querySelectorAll(".service-card")
  serviceCards.forEach((card, index) => {
    card.classList.add(index % 2 === 0 ? "slide-in-left" : "slide-in-right")
    observer.observe(card)
  })

  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card, index) => {
    card.classList.add(index % 2 === 0 ? "slide-in-left" : "slide-in-right")
    observer.observe(card)
  })

  // Add fade-in to content sections
  const aboutContent = document.querySelector(".about-content")
  if (aboutContent) {
    aboutContent.classList.add("fade-in")
    observer.observe(aboutContent)
  }

  const contactContent = document.querySelector(".contact-content")
  if (contactContent) {
    contactContent.classList.add("fade-in")
    observer.observe(contactContent)
  }
})

// Contact form handling
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Simple validation
    if (!name || !email || !subject || !message) {
      alert("Veuillez remplir tous les champs.")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Veuillez entrer une adresse email valide.")
      return
    }

    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent

    submitButton.textContent = "Envoi en cours..."
    submitButton.disabled = true

    // Simulate API call delay
    setTimeout(() => {
      alert("Merci pour votre message ! Je vous répondrai bientôt.")
      contactForm.reset()
      submitButton.textContent = originalText
      submitButton.disabled = false
    }, 2000)
  })
}

// Add smooth reveal animation for elements
function revealOnScroll() {
  const reveals = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("visible")
    }
  })
}

window.addEventListener("scroll", revealOnScroll)

// Initialize reveal on page load
document.addEventListener("DOMContentLoaded", revealOnScroll)
