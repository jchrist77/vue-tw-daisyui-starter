import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAppStore } from '@/stores/app'

describe('App Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should have correct initial state', () => {
    const app = useAppStore()
    expect(app.isDark).toBe(false)
    expect(app.modeIcon).toBe('🌙')
    expect(app.modeText).toBe('Dark')
  })

  it('should toggle dark mode', () => {
    const app = useAppStore()
    app.toggleDark(true)
    expect(app.isDark).toBe(true)
    expect(app.modeIcon).toBe('🌞')
    expect(app.modeText).toBe('Light')
  })

  it('should toggle back to light mode', () => {
    const app = useAppStore()
    app.toggleDark(true) // to dark
    app.toggleDark(false) // back to light
    expect(app.isDark).toBe(false)
    expect(app.modeIcon).toBe('🌙')
    expect(app.modeText).toBe('Dark')
  })
})
