export type AvailableDate = { date: string; times: string[] }

const times = Array.from({ length: 12 }, (_, index) => {
  const minutes = index * 15
  return `${15 + Math.floor(minutes / 60)}:${String(minutes % 60).padStart(2, '0')}`
})

export async function getAvailability(doctorId: 'diana' | 'adrian'): Promise<AvailableDate[]> {
  await new Promise((resolve) => setTimeout(resolve, 250))
  const allowedDays = doctorId === 'diana' ? [2, 4] : [1, 3]
  return Array.from({ length: 56 }, (_, index) => {
    const date = new Date(); date.setDate(date.getDate() + index + 1); return date
  }).filter((date) => allowedDays.includes(date.getDay())).map((date, index) => ({
    date: date.toISOString().slice(0, 10),
    times: times.filter((_, timeIndex) => (timeIndex + index) % 5 !== 1),
  }))
}

export async function requestSmsCode(): Promise<void> { await new Promise((resolve) => setTimeout(resolve, 450)) }
export async function confirmBooking(code: string): Promise<{ reference: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  if (code !== '123456') throw new Error('Codul introdus nu este corect.')
  return { reference: 'BM-240901' }
}
