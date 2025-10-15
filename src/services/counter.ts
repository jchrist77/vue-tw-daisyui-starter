export class CounterService {
  initialCount: number = 0
  count: number = 0

  constructor(_count: number = 0) {
    this.initialCount = _count
    this.count = _count
  }

  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }

  reset() {
    this.count = this.initialCount
  }
}
