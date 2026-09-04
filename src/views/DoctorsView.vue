<script setup lang="ts">
import { doctors } from "../data/content";
</script>
<template>
  <section class="page section">
    <h1>Medici dedicați sănătății femeii.</h1>
    <p class="page-lead">
      Experiență clinică, comunicare deschisă și soluții medicale adaptate
      fiecărei paciente.
    </p>
    <div class="profile-list">
      <article v-for="doctor in doctors" :key="doctor.id" class="profile">
        <div class="doctor-portrait large">
          <img :src="doctor.image" :alt="doctor.name" />
        </div>
        <div>
          <p class="eyebrow">{{ doctor.title }}</p>
          <h2>{{ doctor.name }}</h2>
          <div class="biography">
            <p v-for="paragraph in doctor.biography" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
          <h3>Competențe și servicii</h3>
          <ul>
            <li v-for="item in doctor.specialties" :key="item">{{ item }}</li>
          </ul>
          <p class="schedule">{{ doctor.schedule }}</p>
          <RouterLink
            class="button button-primary"
            :to="`/booking?doctor=${doctor.id}`"
            >Programează-te</RouterLink
          >
        </div>
      </article>
    </div>
  </section>
</template>
