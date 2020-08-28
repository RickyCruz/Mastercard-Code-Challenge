import { shallowMount } from '@vue/test-utils'
import User from '@/components/User.vue'

describe('User.vue Test', () => {
  let wrapper = null

  // SETUP - run before to each unit test
  beforeEach(() => {
    // render the component
    wrapper = shallowMount(User, {
      propsData: {
        user: {
          "login":"rick",
          "name":"Rick Bradley",
          "location":"Nashville, TN",
          "bio":"Clickety",
          "url":"https://github.com/rick",
          "avatarUrl":"https://avatars1.githubusercontent.com/u/6259?u=0a1ba933caa8b6dae5a057cc80fd69a9d86c6681&v=4",
          "followers":{
            "totalCount":211
          },
          "following":{
            "totalCount":107
          },
          "repositories":{
            "nodes":[
              {
                "name":"litestream",
                "url":"https://github.com/rick/litestream",
                "languages":{
                  "nodes":[
                    {
                      "name":"Shell"
                    },
                    {
                      "name":"C"
                    }
                  ]
                }
              },
              {
                "name":"capwn",
                "url":"https://github.com/rick/capwn",
                "languages":{
                  "nodes":[
                    {
                      "name":"Ruby"
                    },
                    {
                      "name":"JavaScript"
                    }
                  ]
                }
              },
              {
                "name":"hoedown-2008",
                "url":"https://github.com/rick/hoedown-2008",
                "languages":{
                  "nodes":[

                  ]
                }
              },
              {
                "name":"gramosplit",
                "url":"https://github.com/rick/gramosplit",
                "languages":{
                  "nodes":[
                    {
                      "name":"C"
                    }
                  ]
                }
              },
              {
                "name":"douche",
                "url":"https://github.com/rick/douche",
                "languages":{
                  "nodes":[
                    {
                      "name":"Ruby"
                    }
                  ]
                }
              }
            ],
            "totalCount":78
          }
        }
      }
    })
  })

  // TEARDOWN - run after to each unit test
  afterEach(() => {
    wrapper.destroy()
  })

  it('initializes with correct elements', () => {
    // check the name of the component
    expect(wrapper.findComponent({ name: 'User' }).exists()).toBeTruthy()

    // check that the heading text is rendered
    expect(wrapper.findAll('p').length).toEqual(5)
    expect(wrapper.findAll('p').at(0).text()).toBe('rick')
    expect(wrapper.findAll('p').at(1).text()).toBe('Rick Bradley')

    // check that the avatar image is rendered
    expect(wrapper.findAll('img').length).toEqual(1)
    expect(wrapper.findAll('img').at(0).attributes('src')).toBe('https://avatars1.githubusercontent.com/u/6259?u=0a1ba933caa8b6dae5a057cc80fd69a9d86c6681&v=4')

    // check that repository info are displayed
    expect(wrapper.findAll('span').length).toEqual(2)
    expect(wrapper.findAll('.card-repositories-number').at(0).text()).toBe('78')

    // check that followers info are displayed
    expect(wrapper.findAll('p').at(3).text()).toBe('211 followers')

    // check that followings info are displayed
    expect(wrapper.findAll('p').at(4).text()).toBe('107 followings')
  })
})
