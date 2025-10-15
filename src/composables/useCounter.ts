import { ref, computed } from 'vue'

export default function useCounter(initialCount = 0) {
  const count = ref(initialCount)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  const reset = () => {
    count.value = initialCount
  }

  return {
    count,
    increment,
    decrement,
    reset,
  }
}