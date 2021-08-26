<template>
  <div id="app">
    <router-link class="btn btn-primary" to="/">Home</router-link>
    <router-link  class="btn btn-danger" to="/table">Table</router-link>
    <router-link  class="btn btn-warning" to="/emitter">Emmiter</router-link>
  <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

</style>
