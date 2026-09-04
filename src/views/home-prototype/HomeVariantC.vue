<script setup lang="ts">
import { doctors, services } from "../../data/content";
</script>
<template>
  <div class="proto proto-c">
    <section class="pc-hero">
      <div class="pc-copy">
        <h1>Consultații de obstetrică și ginecologie în Baia Mare.</h1>
        <p>Experiență medicală, explicații clare și tehnologie modernă.</p>
      </div>
      <aside>
        <h2>Găsește o programare</h2>
        <RouterLink
          v-for="doctor in doctors"
          :key="doctor.id"
          :to="`/booking?doctor=${doctor.id}`"
          ><img :src="doctor.image" :alt="doctor.name" /><span
            ><b>{{ doctor.name }}</b
            ><small>{{ doctor.schedule }}</small></span
          ><i>→</i></RouterLink
        >
      </aside>
    </section>
    <section class="pc-about">
      <img src="/images/cabinet.JPG" alt="Cabinetul Bonea Med" />
      <div>
        <h2>Cabinet medical din 2013</h2>
        <p>
          Ambii medici primari au asistat mii de femei în toate etapele vieții,
          îmbinând profesionalismul cu o comunicare deschisă.
        </p>
        <RouterLink to="/team">Despre echipa medicală →</RouterLink>
      </div>
    </section>
    <section class="pc-services">
      <header>
        <h2>Servicii</h2>
        <RouterLink to="/services">Vezi toate →</RouterLink>
      </header>
      <div>
        <span v-for="service in services" :key="service.number">{{
          service.title
        }}</span>
      </div>
    </section>
    <section class="pc-cta">
      <h2>Ai nevoie de o consultație?</h2>
      <RouterLink class="button button-primary" to="/booking"
        >Programează-te</RouterLink
      >
    </section>
  </div>
</template>
