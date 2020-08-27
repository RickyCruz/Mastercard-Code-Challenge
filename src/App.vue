<template>
  <div>
    <header class="header">
      <div class="header-search">
        <h1>GitHub APIv4</h1>
        <Search placeholder="GitHub username" @search="handleSearchUser"/>
      </div>
    </header>

    <section class="top-cards">
      <Spinner class="spinner" :loading="loading"/>

      <div class="wrapper" v-show="! loading">
        <div class="grid" v-if="users.length > 0">
          <User v-for="user in users" :user="user" :key="user.login"/>
        </div>

        <div v-else>
          <p class="text-center">There are no records</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import User from './components/User.vue'
import Spinner from './components/Spinner.vue'
import { searchUser } from './api/Query'

export default {
  name: 'App',

  components: {
    Search,
    User,
    Spinner
  },

  data () {
    return {
      numOfResults: 20,
      nextPageCursor: null,
      username: null,
      users: [],
      loading: false
    }
  },

  methods: {
    handleSearchUser() {
      this.username = event.target.value
      this.fetchUsers()
    },

    fetchUsers () {
      this.loading = true

      this.$api({
        'method': 'POST',
        data: {
          query: searchUser(),
          variables: {
            query: this.username,
            type: 'USER',
            numOfResults: this.numOfResults,
            nextPageCursor: this.nextPageCursor
          }
        }
      })
      .then(response => {
        this.loading = false
        this.users = response.data.data.search.nodes
      })
      .catch((error) => {
        this.loading = false
        alert('Whoops!, something is wrong')
      })
    }
  }
}
</script>
