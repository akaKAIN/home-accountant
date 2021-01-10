import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import PageHeader from '@/components/PageHeader.vue'

describe('PageHeader', () => {
  it('renders props.userName is user isLogin', () => {
    const user = { name: 'Ivan', isLogin: true }
    const wrapper = shallowMount(PageHeader, {
      props: { userName: user.name, isLogin: user.isLogin }
    })
    expect(wrapper.text()).to.include(user.name)
  })
  it('renders props.guest if user have no name or not isLogin', () => {
    const guestName = 'Гость'
    const wrapper = shallowMount(PageHeader, {})
    expect(wrapper.text()).to.include(guestName)
  })
})
