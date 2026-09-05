<script setup lang="ts">
import { doctors } from "../data/content";
</script>
<template>
  <section class="page section">
    <h1>Echipa medicală</h1>
    <p class="page-lead">
      Experiență clinică, comunicare deschisă și soluții medicale adaptate
      fiecărei paciente.
    </p>
    <div class="profile-list">
      <article v-for="doctor in doctors" :key="doctor.id" class="profile">
        <div class="doctor-portrait large">
          <img :src="doctor.image" :alt="doctor.name" />
        </div>
        <div class="profile-content">
          <h2>{{ doctor.name }}</h2>
          <p class="schedule">{{ doctor.schedule }}</p>
          <p class="profile-summary">{{ doctor.summary }}</p>
          <RouterLink
            class="button button-primary"
            :to="`/booking?doctor=${doctor.id}`"
            >Programează-te</RouterLink
          >
        </div>
        <details class="profile-details">
          <summary>Mai multe despre medic</summary>
          <div class="profile-details-content">
            <div class="biography">
              <p v-for="paragraph in doctor.biography" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
            <h3>Competențe și servicii</h3>
            <ul>
              <li v-for="item in doctor.specialties" :key="item">{{ item }}</li>
            </ul>
          </div>
        </details>
      </article>
    </div>
  </section>
</template>
