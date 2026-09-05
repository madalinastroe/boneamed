<script setup lang="ts">
import { ref } from 'vue'

const sent = ref(false)
const phone = ref('')
</script>

<template>
  <section class="booking-page simple">
    <div class="booking-card appointment-access-card">
      <div class="appointment-access-copy">
        <h1>Accesează programarea</h1>
        <p class="muted">
          {{ sent
            ? 'Introdu codul de verificare trimis prin SMS.'
            : 'Introdu numărul de telefon folosit la programare. Îți vom trimite un cod de verificare prin SMS.' }}
        </p>
      </div>
      <form v-if="!sent" @submit.prevent="sent = true">
        <label>Număr de telefon<input v-model="phone" required type="tel" placeholder="07xx xxx xxx" /></label>
        <button class="button button-primary button-full">Trimite codul SMS</button>
      </form>
      <div v-else class="appointment-code">
        <label class="code-field">Cod de verificare<input maxlength="6" inputmode="numeric" placeholder="000000" /></label>
        <button class="button button-primary button-full">Continuă</button>
        <button class="link-button" @click="sent = false">Schimbă numărul</button>
      </div>
      <RouterLink class="text-link centered" to="/">Înapoi la pagina principală</RouterLink>
    </div>
  </section>
</template>
