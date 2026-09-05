<script setup lang="ts">
import { doctors, services } from "../../data/content";
const featured = [services[0], services[2], services[7]];
</script>
<template>
  <div class="proto proto-b">
    <section class="pb-image">
      <img src="/images/cabinet.JPG" alt="Cabinetul Bonea Med" />
    </section>
    <section class="pb-intro">
      <h1>Bonea Med</h1>
      <div>
        <p>
          Cabinet de obstetrică-ginecologie construit din pasiune, vocație și
          grijă pentru sănătatea femeilor.
        </p>
        <RouterLink class="button button-primary" to="/booking"
          >Programează-te</RouterLink
        >
      </div>
    </section>
    <section class="pb-services">
      <article v-for="service in featured" :key="service.number">
        <img :src="service.image" :alt="service.title" />
        <h2>{{ service.title }}</h2>
      </article>
    </section>
    <section class="pb-team">
      <div>
        <h2>Doi medici primari.<br />Peste 20 de ani de experiență</h2>
        <RouterLink to="/team">Cunoaște echipa →</RouterLink>
      </div>
      <figure v-for="doctor in doctors" :key="doctor.id">
        <img :src="doctor.image" :alt="doctor.name" />
        <figcaption>{{ doctor.name }}</figcaption>
      </figure>
    </section>
    <section class="pb-footer-cta">
      <span>Consultații luni–joi, 15:00–18:00</span
      ><RouterLink class="button button-primary" to="/booking"
        >Vezi disponibilitatea</RouterLink
      >
    </section>
  </div>
</template>
