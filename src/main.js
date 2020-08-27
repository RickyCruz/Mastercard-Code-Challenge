import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use({
  install (Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: 'https://api.github.com/graphql',
      headers: {
        Authorization: 'Bearer '
      }
    })
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
