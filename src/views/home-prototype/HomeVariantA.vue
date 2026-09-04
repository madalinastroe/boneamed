<script setup lang="ts">import { doctors, services } from '../../data/content'</script>
<template>
  <div class="proto proto-a">
    <section class="pa-hero">
      <div>
        <h1>Grijă medicală, cu respect pentru fiecare pacientă.</h1>
        <p>Cabinet de obstetrică-ginecologie în Baia Mare, fondat în 2013.</p>
        <RouterLink class="button button-primary" to="/booking">Programează-te</RouterLink>
      </div>
      <img src="/images/cabinet.JPG" alt="Cabinetul Bonea Med" />
    </section>

    <section class="pa-section pa-about">
      <h2>Despre cabinet</h2>
      <div>
        <p>Fondat din pasiune, vocație și grijă pentru sănătatea femeilor, Bonea Med oferă consultații de obstetrică-ginecologie într-un spațiu profesionist și primitor.</p>
        <p>Experiența medicală de peste 20 de ani este susținută de aparatură modernă pentru investigații precise și îngrijire atentă.</p>
      </div>
    </section>

    <section class="pa-section pa-team">
      <header><h2>Echipa</h2><RouterLink to="/team">Descoperă echipa →</RouterLink></header>
      <div><figure v-for="doctor in doctors" :key="doctor.id"><img :src="doctor.image" :alt="doctor.name" /><figcaption><b>{{ doctor.name }}</b><span>{{ doctor.title }}</span></figcaption></figure></div>
    </section>

    <section class="pa-section pa-services">
      <header><h2>Servicii medicale</h2><RouterLink to="/services">Toate serviciile →</RouterLink></header>
      <ol><li v-for="service in services" :key="service.number">{{ service.title }}</li></ol>
    </section>

    <section class="pa-equipment">
      <img src="/images/services/pregnancy-monitoring.webp" alt="Investigație ecografică" loading="lazy" />
      <div>
        <h2>Tehnologie pentru investigații precise</h2>
        <p>Aparatura modernă susține evaluarea atentă, diagnosticul și monitorizarea pacientelor.</p>
        <dl>
          <div><dt>Voluson E8</dt><dd>Ecograf performant pentru investigații obstetricale și ginecologice.</dd></div>
          <div><dt>Cardiotocograf</dt><dd>Pentru monitorizarea ritmului cardiac fetal în timpul sarcinii.</dd></div>
          <div><dt>Videocolposcop</dt><dd>Pentru diagnosticul și monitorizarea patologiei colului uterin.</dd></div>
          <div><dt>Caress Flow</dt><dd>Tratament modern, non-invaziv și fără hormoni pentru confortul intim.</dd></div>
        </dl>
      </div>
    </section>

    <section class="pa-contact"><h2>Programează o consultație</h2><RouterLink class="button button-primary" to="/booking">Alege medicul și ora</RouterLink></section>
  </div>
</template>
