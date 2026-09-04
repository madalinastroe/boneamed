<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const menuOpen = ref(false)
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
        <RouterLink class="button button-primary desktop-cta" to="/booking" @click="menuOpen = false">Programează-te</RouterLink>
      </nav>
    </header>

    <main><RouterView /></main>

    <footer class="site-footer">
      <div><strong>Bonea Med</strong><p>Grijă, experiență și respect pentru sănătatea femeii.</p></div>
      <div><span>Contact</span><a href="tel:+40757403120">+40 757 403 120</a><a href="mailto:dr.bonea@gmail.com">dr.bonea@gmail.com</a><a href="https://maps.app.goo.gl/p8UxQdkdQPSN2HpGA" target="_blank" rel="noopener noreferrer">Bulevardul Republicii 10/22, Baia Mare</a></div>
      <div><span>Navigare</span><RouterLink to="/team">Echipa medicală</RouterLink><RouterLink to="/services">Servicii</RouterLink></div>
    </footer>

    <RouterLink class="button button-primary mobile-booking" to="/booking">Programează-te</RouterLink>
  </div>
</template>
