import { defineStore } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'
import { computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isDark = useDark({
    selector: 'html',
    attribute: 'data-theme',
    valueDark: 'dark',
    valueLight: 'light',
  })

  const toggleDark = useToggle(isDark)

  const modeIcon = computed(() => (isDark.value ? '🌞' : '🌙'));
  const modeText = computed(() => (isDark.value ? 'Light' : 'Dark'));

  return {
    isDark,
    toggleDark,
    modeIcon,
    modeText,
  }
})
