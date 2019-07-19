<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
​
<script>
  import topNavbar from './components/partials/topNavbar'

  export default {
  name: 'app',
  components: {
    topNavbar,

  }
}
</script>
​
<style>
  .style-chooser .vs__dropdown-toggle {
    height: 50px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
</style>
