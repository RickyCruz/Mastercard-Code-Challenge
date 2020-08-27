<template>
  <article class="card primary">
    <p class="card-title">
      <img :src="user.avatarUrl" :alt="user.login">
      <br>
      {{ user.login }}
    </p>
    <p class="card-subtitle">
      {{ user.name }}
    </p>
    <p class="card-repositories">
      <span class="card-repositories-number">{{ user.repositories.totalCount }}</span>
      <span class="card-repositories-title">Repositories</span>
    </p>
    <div class="card-info">
      <p>{{ user.followers.totalCount }} followers</p>
      <p>{{ user.following.totalCount }} followings</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: Object
  }
}
</script>
