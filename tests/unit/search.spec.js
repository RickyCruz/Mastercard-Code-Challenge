import { shallowMount, config } from '@vue/test-utils'

import Search from '@/components/Search.vue'

describe('Search.vue Implementation Test', () => {
  let wrapper = null

  // SETUP - run prior to each unit test
  beforeEach(() => {
    // render the component
    wrapper = shallowMount(Search)
  })

  // TEARDOWN - run after to each unit test
  afterEach(() => {
    wrapper.destroy()
  })

  it('renders props.placeholder when passed', () => {
    const placeholder = 'Username'
    wrapper.setProps({ placeholder })

    expect(wrapper.props().placeholder).toBe(placeholder)
  })

  it('initializes with correct elements', () => {
    // check the name of the component
    expect(wrapper.findComponent({ name: 'Search' }).exists()).toBeTruthy()

    // check that the heading text is rendered
    expect(wrapper.findAll('input').length).toEqual(1)
  })

  it('emits a custom event when Key.ENTER is pressed', () => {
    wrapper.setData({ search: 'R'})
    wrapper.vm.searchUser()
    wrapper.trigger('keydown.enter')

    // check that 1 occurrence of the event has been emitted
    expect(wrapper.emitted('search')).toBeTruthy()
    expect(wrapper.emitted('search').length).toBe(1)
    expect(wrapper.emitted('search')[0][0]).toMatch('R')

    // check that the input data is not cleared after emitting the event
    expect(wrapper.vm.search).toMatch('R')
  })
})
