<template>
  <header>
    <div class="user-wrapper">
      <div class="user-name" v-if="userName && isLogin">{{ userName }}</div>
      <span v-else>Гость</span>
    </div>
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Route#1</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    userName: {
      type: String,
      default: ''
    },
    isLogin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">

</style>
