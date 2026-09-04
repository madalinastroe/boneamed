export type Doctor = {
  id: 'diana' | 'adrian'
  name: string
  title: string
  schedule: string
  initials: string
  image: string
  specialties: string[]
  biography: string[]
}

export type MedicalService = {
  number: string
  title: string
  text: string
  image: string
  details?: string[]
}

export const doctors: Doctor[] = [
  {
    id: 'diana',
    name: 'Dr. Diana Bonea',
    title: 'Medic primar obstetrică-ginecologie',
    schedule: 'Marți și joi · 15:00–18:00',
    initials: 'DB',
    image: '/images/diana_bonea.jpg',
    specialties: ['Monitorizarea sarcinii', 'Colposcopie', 'Fertilitate', 'Managementul menopauzei'],
    biography: [
      'Doamna doctor oferă servicii medicale dedicate sănătății femeii, acoperind atât îngrijirea și monitorizarea sarcinii, cât și diagnosticarea și tratarea afecțiunilor ginecologice. În practica sa, ecografia obstetricală și ginecologică reprezintă un instrument esențial pentru evaluări corecte și urmărirea atentă a evoluției pacientelor.',
      'Activitatea sa include prevenția și tratamentul patologiei colului uterin, susținute de competența în colposcopie, metodă esențială pentru depistarea precoce a modificărilor cervicale.',
      'De asemenea, realizează investigații și tratamente pentru sterilitate, sprijinind pacientele în parcursul către obținerea unei sarcini. Abordează managementul menopauzei, inclusiv tratament de substituție hormonală personalizat, adaptat nevoilor fiecărei paciente.',
      'Activitatea medicală este completată de consilierea pentru planificare familială și de tratamente moderne pentru patologia genito-urinară, menite să îmbunătățească sănătatea intimă, confortul și calitatea vieții.',
    ],
  },
  {
    id: 'adrian',
    name: 'Dr. Adrian Bonea',
    title: 'Medic primar obstetrică-ginecologie',
    schedule: 'Luni și miercuri · 15:00–18:00',
    initials: 'AB',
    image: '/images/adrian_bonea.jpg',
    specialties: ['Ecografie obstetricală și ginecologică', 'Laparoscopie', 'Histeroscopie', 'Chirurgie ginecologică'],
    biography: [
      'Domnul doctor oferă îngrijire medicală completă în obstetrică și ginecologie, cu accent pe diagnosticarea și tratamentul medical și chirurgical al afecțiunilor ginecologice, precum și pe supravegherea și monitorizarea sarcinii și asistența la naștere.',
      'Deține competență în ecografie obstetricală și ginecologică, utilizată pentru evaluări precise și monitorizare corectă.',
      'Practica sa medicală se concentrează și asupra chirurgiei ginecologice, atât clasice, cât și minim invazive, având competențe în laparoscopie și histeroscopie. Aceste tehnici moderne permit intervenții eficiente, cu recuperare rapidă și siguranță crescută pentru paciente.',
      'În relația cu pacientele, acordă o atenție deosebită comunicării medicale, ascultând cu răbdare și oferind explicații clare și complete, astfel încât fiecare pacientă să fie corect informată și încrezătoare în deciziile medicale.',
      'Abordarea sa îmbină experiența clinică, tehnologia modernă și respectul față de pacientă, având ca prioritate sănătatea și confortul acesteia.',
    ],
  },
]

export const services: MedicalService[] = [
  {
    number: '01',
    title: 'Consultații ginecologice',
    text: 'Investigații complete pentru evaluarea sănătății intime, prevenție și diagnostic precoce al afecțiunilor ginecologice.',
    image: '/images/services/consultation.webp',
    details: ['Ecografii tranvaginale și abdominale pentru diagnosticul diferitelor patologii ginecologice'],
  },
  {
    number: '02',
    title: 'Analize de specialitate',
    text: 'Investigații pentru infecții genitale și pentru patologia colului uterin.',
    image: '/images/services/laboratory-tests.webp',
    details: ['Teste pentru infecții genitale bacteriene, fungice, parazitare și boli cu transmitere sexuală', 'Citologie Babeș-Papanicolau pe lamă sau în mediu lichid', 'Testare HPV și tipizare extinsă', 'Colposcopie pentru identificarea leziunilor și modificărilor celulare'],
  },
  {
    number: '03',
    title: 'Diagnosticul și supravegherea sarcinii',
    text: 'Supravegherea atentă a evoluției sarcinii, de la confirmare până la naștere.',
    image: '/images/services/pregnancy-monitoring.webp',
    details: ['Diagnosticul sarcinii intrauterine și extrauterine', 'Dublu și triplu test pentru evaluarea riscului genetic fetal', 'NIPT pentru detectarea anomaliilor cromozomiale', 'Ecografie 2D, 3D și 4D', 'Ecografie Doppler', 'Monitorizarea lungimii colului'],
  },
  {
    number: '04',
    title: 'Diagnosticul și tratamentul sterilității',
    text: 'Evaluare, plan de investigații și tratamente pentru sterilitatea cuplului.',
    image: '/images/services/fertility.webp',
    details: ['Foliculometrie', 'Monitorizarea ovulației', 'Plan personalizat de investigații și tratament'],
  },
  {
    number: '05',
    title: 'Planificare familială și contracepție',
    text: 'Consiliere specializată și recomandarea metodei contraceptive potrivite fiecărei paciente.',
    image: '/images/services/family-planning.webp',
    details: ['Implantare sterilet', 'Extragere sterilet'],
  },
  {
    number: '06',
    title: 'Managementul menopauzei',
    text: 'Evaluare periodică și soluții adaptate fiecărei paciente.',
    image: '/images/services/menopause.webp',
    details: ['Diagnostic și evaluare periodică', 'Terapie de substituție hormonală'],
  },
  {
    number: '07',
    title: 'Intervenții chirurgicale',
    text: 'Proceduri pentru diagnosticul și tratamentul patologiei ginecologice.',
    image: '/images/services/surgery.webp',
    details: ['Electrocauterizare col uterin', 'Extirpare polipi', 'Biopsie col uterin', 'Chiuretaj uterin biopsic'],
  },
  {
    number: '08',
    title: 'Tratament Caress Flow',
    text: 'Soluție non-invazivă și fără durere pentru afecțiuni vulvo-vaginale.',
    image: '/images/services/caress-flow.webp',
    details: ['Incontinență urinară', 'Candidoză recidivantă', 'Vestibulită', 'Atrofie vulvo-vaginală'],
  },
]
