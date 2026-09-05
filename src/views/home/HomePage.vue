<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { doctors, services } from '../../data/content'

const featuredServices = [services[0], services[2], services[7]]
const equipment = [
  ['Voluson E8', 'Ecograf performant pentru investigații obstetricale și ginecologice.'],
  ['Cardiotocograf', 'Monitorizarea ritmului cardiac fetal pe parcursul sarcinii.'],
  ['Videocolposcop', 'Diagnostic și monitorizare pentru patologia colului uterin.'],
  ['Caress Flow', 'Tratament modern, non-invaziv și fără hormoni pentru confortul intim.'],
]

const page = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | undefined

onMounted(() => {
  if (!page.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const elements = page.value.querySelectorAll<HTMLElement>('[data-reveal]')
  const reveal = (element: Element) => {
    element.classList.add('is-visible')
    observer?.unobserve(element)
  }

  page.value.classList.add('reveal-enabled')
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      reveal(entry.target)
    })
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 })
  elements.forEach((element) => observer?.observe(element))

  nextTick(() => requestAnimationFrame(() => {
    elements.forEach((element) => {
      const { top, bottom } = element.getBoundingClientRect()
      if (top < window.innerHeight * .9 && bottom > 0) reveal(element)
    })
  }))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <main ref="page" class="home-page">
    <section class="home-hero" data-reveal="image">
      <img class="home-hero-ultrasound" src="/images/ecograf-hero.webp" alt="Investigație ecografică la Bonea Med" />
      <div class="home-hero-shade"></div>
      <div class="home-hero-copy">
        <h1>Grijă pentru sănătatea femeii, în fiecare etapă a vieții</h1>
        <p>Obstetrică și ginecologie în Baia Mare, cu experiență medicală de peste 20 de ani.</p>
        <RouterLink class="button button-primary" to="/booking">Programează-te</RouterLink>
      </div>
    </section>

    <section class="home-intro" data-reveal>
      <h2>Un cabinet construit din pasiune, vocație și respect pentru fiecare pacientă</h2>
      <p class="home-intro-copy">Profesionalismul, comunicarea deschisă și tehnologia modernă ne ajută să oferim evaluări atente și soluții adaptate fiecărei paciente.</p>
      <div class="home-values">
        <span data-reveal style="--reveal-delay: 60ms"><b>20+ ani</b>Experiență medicală</span>
        <span data-reveal style="--reveal-delay: 120ms"><b>2 medici primari</b>Îngrijire coordonată</span>
        <span data-reveal style="--reveal-delay: 180ms"><b>Tehnologie modernă</b>Investigații precise</span>
      </div>
    </section>

    <section class="home-services">
      <header data-reveal>
        <div><h2>Îngrijire pentru fiecare etapă</h2></div>
      </header>
      <div class="home-service-grid" data-reveal>
        <article v-for="(service, index) in featuredServices" :key="service.number" data-reveal :style="{ '--reveal-delay': `${index * 70}ms` }">
          <div class="home-service-image"><img :src="service.image" :alt="service.title" loading="lazy" /></div>
          <div class="home-service-content">
            <h3>{{ service.title }}</h3>
            <p>{{ service.text }}</p>
          </div>
        </article>
      </div>
      <RouterLink class="home-section-link" to="/services">Vezi toate serviciile <span>→</span></RouterLink>
    </section>

    <section class="home-team">
      <div class="home-team-copy" data-reveal>
        <h2>Doi medici. O abordare comună</h2>
        <p>Dr. Diana Bonea și Dr. Adrian Bonea oferă îngrijire medicală completă, bazată pe experiență, explicații clare și respect față de pacientă.</p>
      </div>
      <div class="home-team-portraits">
        <figure v-for="(doctor, index) in doctors" :key="doctor.id" data-reveal="image" :style="{ '--reveal-delay': `${index * 100}ms` }">
          <img :src="doctor.image" :alt="doctor.name" loading="lazy" />
          <figcaption><b>{{ doctor.name }}</b><span>{{ doctor.schedule }}</span></figcaption>
        </figure>
      </div>
      <RouterLink class="home-section-link" to="/team">Descoperă echipa <span>→</span></RouterLink>
    </section>

    <section class="home-equipment">
      <div data-reveal>
        <h2>Investigații precise. Soluții moderne</h2>
        <p>Cabinetul este dotat pentru diagnostic, monitorizarea sarcinii și tratamente ginecologice moderne.</p>
      </div>
      <dl data-reveal style="--reveal-delay: 100ms">
        <div v-for="item in equipment" :key="item[0]"><dt>{{ item[0] }}</dt><dd>{{ item[1] }}</dd></div>
      </dl>
    </section>

    <section class="home-cta" data-reveal>
      <div><h2>Programează o consultație</h2><p>Alege medicul, data și ora disponibilă.</p></div>
      <RouterLink class="button button-primary" to="/booking">Vezi disponibilitatea</RouterLink>
    </section>
  </main>
</template>
