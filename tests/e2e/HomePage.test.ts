import { expect, describe, it } from 'vitest'
import { render } from 'vitest-browser-vue'
import HomePage from '@/pages/HomePage.vue'

describe('HomePage', () => {
  it('displays proper message', async () => {
    const screen = render(HomePage)
    await expect(screen.getByText('Home Page')).toBeVisible();
  })
})
