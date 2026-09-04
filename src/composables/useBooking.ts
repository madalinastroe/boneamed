import { computed, reactive } from 'vue'
import type { Doctor } from '../data/content'

export type BookingState = {
  doctor: Doctor | null
  date: string
  time: string
  fullName: string
  phone: string
  email: string
}

const state = reactive<BookingState>({ doctor: null, date: '', time: '', fullName: '', phone: '', email: '' })

export function useBooking() {
  const isComplete = computed(() => Boolean(state.doctor && state.date && state.time && state.fullName && state.phone))
  const reset = () => Object.assign(state, { doctor: null, date: '', time: '', fullName: '', phone: '', email: '' })
  return { state, isComplete, reset }
}
