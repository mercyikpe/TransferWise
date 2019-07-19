<template>
  <div class="col-xs-2 mx-2 arrow-container mt-3">
    <a @click.prevent="launchCurrencyConversion" class="circle cc-calculator-btn" href="#">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" class="icon cc-calculator-btn">
        <path d="M18.19 4.49l-.7.7L20.29 8H7.5v1h12.79l-2.8 2.81.7.7 4.02-4.01-4.02-4.01zM6.51 12.19l-.7-.7-4.02 4.01 4.02 4.01.7-.7L3.71 16H16.5v-1H3.71l2.8-2.81z" fill="#00b9ff"></path>
      </svg>
    </a>
  </div>
</template>

<script>
  import converter from '../mixins/converter'

  export default {
    name: 'ConversionLauncher',
    mixins: [converter]
  }
</script>

<style scoped>

</style>
