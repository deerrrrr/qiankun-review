<template>
  <router-link to="/">home</router-link>
  <router-link to="/cat">cat</router-link>
  <router-link to="/dog">dog</router-link>
  <router-view></router-view>
  <h1>xxxxx</h1>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  margin: 10px, auto;
}
</style>
