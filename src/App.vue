<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const menuOpen = ref(false)
const route = useRoute()
const isAppointmentAccess = computed(() => route.path === '/my-appointment')
let revealObserver: IntersectionObserver | undefined

function setUpPageReveals() {
  revealObserver?.disconnect()

  nextTick(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const main = document.querySelector('main')
    if (!main) return

    const selectors = [
      '.page > h1',
      '.page > .page-lead',
      '.contact-page-intro',
      '.contact-card',
      '.map-container',
      '.services-page .service-detail',
      '.profile',
      '.medical-profile',
      '.booking-top',
      '.progress',
      '.booking-card',
      '.inline-cta',
    ].join(', ')

    const elements = [...main.querySelectorAll<HTMLElement>(selectors)]
      .filter((element) => !element.closest('.home-page'))

    const reveal = (element: Element) => {
      element.classList.add('is-visible')
      revealObserver?.unobserve(element)
    }

    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) reveal(entry.target)
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 })

    elements.forEach((element) => {
      element.classList.remove('is-visible')
      element.classList.add('scroll-reveal')
      revealObserver?.observe(element)
    })

    requestAnimationFrame(() => {
      elements.forEach((element) => {
        const { top, bottom } = element.getBoundingClientRect()
        if (top < window.innerHeight * .9 && bottom > 0) reveal(element)
      })
    })
  })
}

watch(() => route.fullPath, setUpPageReveals, { immediate: true })
onBeforeUnmount(() => revealObserver?.disconnect())
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <RouterLink class="brand" to="/" @click="menuOpen = false">
        <span><strong>Bonea Med</strong><small>Obstetrică & ginecologie</small></span>
      </RouterLink>
      <button class="menu-button" aria-label="Deschide meniul" @click="menuOpen = !menuOpen">
        <span></span><span></span>
      </button>
      <nav :class="['main-nav', { open: menuOpen }]">
        <RouterLink to="/team" @click="menuOpen = false">Echipa medicală</RouterLink>
        <RouterLink to="/services" @click="menuOpen = false">Servicii</RouterLink>
        <RouterLink to="/contact" @click="menuOpen = false">Contact</RouterLink>
        <RouterLink to="/my-appointment" @click="menuOpen = false">Programarea mea</RouterLink>
        <RouterLink v-if="!isAppointmentAccess" class="button button-primary desktop-cta" to="/booking" @click="menuOpen = false">Programează-te</RouterLink>
      </nav>
    </header>

    <main><RouterView /></main>

    <footer class="site-footer">
      <div><strong>Bonea Med</strong><p>Grijă, experiență și respect pentru sănătatea femeii.</p></div>
      <div><span>Contact</span><a href="tel:+40757403120">+40 757 403 120</a><a href="mailto:dr.bonea@gmail.com">dr.bonea@gmail.com</a><a href="https://maps.app.goo.gl/p8UxQdkdQPSN2HpGA" target="_blank" rel="noopener noreferrer">Bulevardul Republicii 10/22, Baia Mare</a></div>
      <div><span>Navigare</span><RouterLink to="/team">Echipa medicală</RouterLink><RouterLink to="/services">Servicii</RouterLink></div>
      <small class="footer-copyright">© 2026 Bonea Med. Toate drepturile rezervate.</small>
    </footer>
  </div>
</template>
