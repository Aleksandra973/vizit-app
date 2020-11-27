<template>
  <div id="app">
    <Nav/>
      <router-view/>
  </div>
</template>

<script>
import Nav from './layout/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>
