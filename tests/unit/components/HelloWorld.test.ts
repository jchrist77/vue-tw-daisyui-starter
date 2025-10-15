import { expect, describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('displays proper message', () => {
    const wrapper = mount(HelloWorld, {
      props: { name: 'Tester' }
    })
    expect(wrapper).toBeTruthy()
    expect(wrapper.text()).toContain('Tester')
  })
})
