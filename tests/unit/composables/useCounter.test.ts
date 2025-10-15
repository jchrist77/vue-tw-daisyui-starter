import { expect, describe, it } from 'vitest'
import useCounter from '@/composables/useCounter'

describe('counter', () => {
  it('increments the count', () => {
    const counter = useCounter(0)
    counter.increment()
    expect(counter.count.value).toBe(1)
  })

  it('decrements the count', () => {
    const counter = useCounter()
    counter.decrement()
    expect(counter.count.value).toBe(-1)
  })

  it('sets the count to a specific value', () => {
    const counter = useCounter(10)
    expect(counter.count.value).toBe(10)
  })

  it('resets the count to zero', () => {
    const counter = useCounter(5)
    counter.increment()
    counter.reset()
    expect(counter.count.value).toBe(5)
  })
})
