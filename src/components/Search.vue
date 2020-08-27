<template>
  <div>
    <input
      class="search"
      type="search"
      :placeholder="placeholder"
      v-on:change="$emit('search', $event)"
    />
  </div>
</template>

<script>
export default {
  name: 'Search',

  props: {
    placeholder: String
  }
}
</script>
