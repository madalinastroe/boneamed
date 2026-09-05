<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { doctors } from '../data/content'
import { confirmBooking, getAvailability, requestSmsCode, type AvailableDate } from '../services/appointmentService'
import { useBooking } from '../composables/useBooking'

const route = useRoute()
const { state, reset } = useBooking()
const step = ref(1)
const availability = ref<AvailableDate[]>([])
const smsCode = ref('')
const error = ref('')
const loading = ref(false)
const reference = ref('')
const steps = ['Medic', 'Dată și oră', 'Date personale', 'Verificare', 'Confirmare']
const selectedDay = computed(() => availability.value.find((item) => item.date === state.date))
const formattedDate = computed(() => state.date ? new Intl.DateTimeFormat('ro-RO', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date(`${state.date}T12:00:00`)) : '')

onMounted(() => {
  const doctor = doctors.find((item) => item.id === route.query.doctor)
  if (doctor) selectDoctor(doctor)
})

async function selectDoctor(doctor: typeof doctors[number]) {
  state.doctor = doctor; state.date = ''; state.time = ''; loading.value = true
  availability.value = await getAvailability(doctor.id); loading.value = false; step.value = 2
}
async function submitDetails() { await requestSmsCode(); step.value = 4 }
async function verify() {
  error.value = ''; loading.value = true
  try { reference.value = (await confirmBooking(smsCode.value)).reference; step.value = 5 }
  catch (caught) { error.value = caught instanceof Error ? caught.message : 'A apărut o eroare.' }
  finally { loading.value = false }
}
</script>

<template>
  <section class="booking-page">
    <div class="progress" aria-label="Progres programare"><div v-for="(label, index) in steps" :key="label" :class="{ completed: step > index + 1, active: step === index + 1 }"><span>{{ index + 1 }}</span><small>{{ label }}</small></div></div>

    <div class="booking-card">
      <template v-if="step === 1">
        <h1>Alege medicul</h1><p class="muted">Programarea este pentru o consultație generală.</p>
        <div class="choice-list"><button v-for="doctor in doctors" :key="doctor.id" class="doctor-choice" @click="selectDoctor(doctor)"><img class="avatar" :src="doctor.image" :alt="doctor.name" /><span><strong>{{ doctor.name }}</strong><small>{{ doctor.title }}</small><em>{{ doctor.schedule }}</em></span><b>→</b></button></div>
      </template>

      <template v-else-if="step === 2">
        <p class="selected-doctor">{{ state.doctor?.name }}</p><h1>Alege data și ora</h1><p class="muted">Sunt afișate doar datele disponibile în următoarele 8 săptămâni.</p>
        <div v-if="loading" class="loading">Se încarcă disponibilitatea…</div>
        <template v-else><div class="date-strip"><button v-for="item in availability.slice(0, 10)" :key="item.date" :class="{ selected: state.date === item.date }" @click="state.date = item.date; state.time = ''"><small>{{ new Intl.DateTimeFormat('ro-RO', { weekday: 'short' }).format(new Date(`${item.date}T12:00:00`)) }}</small><strong>{{ new Date(`${item.date}T12:00:00`).getDate() }}</strong><span>{{ new Intl.DateTimeFormat('ro-RO', { month: 'short' }).format(new Date(`${item.date}T12:00:00`)) }}</span></button></div><div v-if="selectedDay" class="time-section"><h2>Ore disponibile</h2><div class="time-grid"><button v-for="time in selectedDay.times" :key="time" :class="{ selected: state.time === time }" @click="state.time = time">{{ time }}</button></div></div></template>
        <button class="button button-primary button-full" :disabled="!state.date || !state.time" @click="step = 3">Continuă</button><button class="back" @click="step = 1">← Înapoi</button>
      </template>

      <template v-else-if="step === 3">
        <h1>Datele tale</h1><form @submit.prevent="submitDetails"><label>Nume complet<input v-model="state.fullName" required autocomplete="name" placeholder="Nume și prenume" /></label><label>Număr de telefon<input v-model="state.phone" required autocomplete="tel" type="tel" placeholder="07xx xxx xxx" /></label><label>Email <small>Opțional</small><input v-model="state.email" autocomplete="email" type="email" placeholder="nume@exemplu.ro" /></label><div class="summary"><span>Rezumat programare</span><strong>{{ state.doctor?.name }}</strong><p>{{ formattedDate }} · {{ state.time }}</p></div><button class="button button-primary button-full" type="submit">Trimite codul SMS</button></form><button class="back" @click="step = 2">← Înapoi</button>
      </template>

      <template v-else-if="step === 4">
        <h1>Confirmă numărul de telefon</h1><p class="muted">Am trimis un cod din 6 cifre la numărul {{ state.phone }}.</p><label class="code-field">Cod de verificare<input v-model="smsCode" maxlength="6" inputmode="numeric" placeholder="000000" /></label><p class="demo-note">Pentru prototip, folosește codul <strong>123456</strong>.</p><p v-if="error" class="error">{{ error }}</p><button class="button button-primary button-full" :disabled="smsCode.length !== 6 || loading" @click="verify">{{ loading ? 'Se verifică…' : 'Confirmă programarea' }}</button><button class="link-button">Retrimite codul</button><button class="back" @click="step = 3">← Înapoi</button>
      </template>

      <template v-else>
        <div class="success-mark">✓</div><h1>Te așteptăm!</h1><p class="muted">Confirmarea a fost trimisă prin SMS<span v-if="state.email"> și email</span>.</p><div class="confirmation-details"><img v-if="state.doctor" class="avatar" :src="state.doctor.image" :alt="state.doctor.name" /><div><strong>{{ state.doctor?.name }}</strong><p>{{ formattedDate }} · {{ state.time }}</p><small>Referință {{ reference }}</small></div></div><RouterLink class="button button-primary button-full" to="/my-appointment">Vezi detaliile programării</RouterLink><RouterLink class="text-link centered" to="/" @click="reset">Înapoi la pagina principală</RouterLink>
      </template>
    </div>
  </section>
</template>
