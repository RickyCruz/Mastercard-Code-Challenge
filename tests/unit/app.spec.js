import { shallowMount, config } from '@vue/test-utils'
import App from '@/App.vue'
import Spinner from '@/components/Spinner.vue'
import User from '@/components/User.vue'

// Spy the console log
global.console.log = jest.fn();

describe('Implementation Test for App.vue with Successful HTTP GET', () => {
  let wrapper = null
  wrapper = shallowMount(App)

  it('renders sub-components when the component is created', () => {
    // check the name of the component
    expect(wrapper.findComponent({ name: 'App' }).exists()).toBeTruthy()

    // check that 2 of the 3 child components are rendered
    expect(wrapper.findAll('.header-search').exists()).toBeTruthy()
    expect(wrapper.findAllComponents(Spinner).at(0).exists()).toBeTruthy()
    expect(wrapper.findAllComponents(User).length).toEqual(0)
  })
})
