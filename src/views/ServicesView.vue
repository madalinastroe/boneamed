<script setup lang="ts">
import { services } from '../data/content'
</script>

<template>
  <section class="page section services-page">
    <header class="services-intro">
      <h1>Servicii medicale</h1>
      <p>Îngrijire ginecologică, monitorizarea sarcinii și investigații adaptate fiecărei etape a vieții.</p>
    </header>

    <div class="service-list">
      <article v-for="service in services" :key="service.number" class="service-detail">
        <div class="service-detail-image">
          <img :src="service.image" :alt="service.title" loading="lazy" />
          <h2>{{ service.title }}</h2>
        </div>
        <div class="service-detail-content">
          <p>{{ service.text }}</p>
          <ul v-if="service.details">
            <li v-for="detail in service.details" :key="detail">{{ detail }}</li>
          </ul>
        </div>
      </article>
    </div>

    <div class="inline-cta"><h2>Programează o consultație</h2><RouterLink class="button button-primary" to="/booking">Programează-te</RouterLink></div>
  </section>
</template>
