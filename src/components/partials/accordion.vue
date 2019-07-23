<template>
  <div>
    <accord>Accordion body</accord>
    <accord theme="purple">
      <div slot="header">TIPS</div>
      Purple accordion
    </accord>
  </div>
</template>

<script>
  import accord from './SendMoney'
  
  export default {
    name: 'accordion',
    
    components: {
      accord
    }
  }
</script>

<style scoped>
</style>
