<template>
  <header id="header">
    <div class="user-wrapper">
      <template v-if="userName && isLogin">
        <span class="user-name">{{ userName }}</span>
        <i class="fas fa-door-open"></i>
      </template>
      <span v-else>Гость</span>
    </div>
    <div class="nav-wrapper">
      <div class="container">
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link class="nav-item" to="/about">Route#1</router-link>
      </div>
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
$container-size: 800px;
#header {
  .user-wrapper {
    text-align: right;
    padding: 10px 50px;
    @media (max-width: $container-size) {
      padding: 10px 20px;
    }

    .user-name {
    }
  }

  .nav-wrapper {
    text-align: right;
    padding: 10px;
    background-color: #1A8237;

    .nav-item {
      color: #ffffff;
      margin: 0 10px;
    }
  }
}

.container {
  max-width: $container-size;
  margin: 0 auto;
}

.ml-1 {
  margin-left: 1rem;
}
</style>
