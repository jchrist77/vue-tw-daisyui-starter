import { expect, describe, it } from 'vitest'
import { CounterService } from '@/services/counter'

describe('CounterService', () => {
  it('increments the count', () => {
    const counterService = new CounterService()
    counterService.increment()
    expect(counterService.count).toBe(1)
  })

  it('decrements the count', () => {
    const counterService = new CounterService()
    counterService.decrement()
    expect(counterService.count).toBe(-1)
  })

  it('sets the count to a specific value', () => {
    const counterService = new CounterService(10)
    expect(counterService.count).toBe(10)
  })

  it('resets the count to zero', () => {
    const counterService = new CounterService(5)
    counterService.increment()
    counterService.reset()
    expect(counterService.count).toBe(5)
  })
})
