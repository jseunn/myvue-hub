<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-link :to="{name: 'Detail'}">detail</router-link>
  <router-view />
</template>

<script>

export default {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
