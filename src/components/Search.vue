<template>
  <div>
    <input
      class="search"
      type="search"
      :placeholder="placeholder"
      v-model="search"
      v-on:keyup.enter="searchUser"
    />
  </div>
</template>

<script>
export default {
  name: 'Search',

  props: {
    placeholder: String
  },

  data() {
    return {
      search: ''
    }
  },

  methods: {
    searchUser () {
      this.$emit('search', this.search)
    }
  }
}
</script>
