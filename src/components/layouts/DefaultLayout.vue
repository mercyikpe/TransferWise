<template>
  <div>
    <slot name="header">
        <topNavbar/>
    </slot>
    
    <slot name="content"></slot>
  </div>
</template>

<script>
  import topNavbar from '@/components/partials/topNavbar';
  export default {
    name: 'DefaultLayout',
    components: { topNavbar }
  }
</script>

<style scoped>

</style>
