<template>
  <default-layout>
    <template v-slot:header>
      <alt-header></alt-header>
    </template>
    <template v-slot:content>
      <CurrencyConverterCalc/>
      <overpayingBank/>
      <topCurrencies/>
      <endFooter/>
    </template>
  </default-layout>
</template>
<script>
import CurrencyConverterCalc from '@/components/partials/CurrencyConverterCalc'
import OverpayingBank from '@/components/partials/overpayingBank'
import TopCurrencies from '@/components/partials/topCurrencies'
import EndFooter from '@/components/partials/endFooter'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import AltHeader from '@/components/partials/headers/AltHeader'
import topNavbar from '@/components/partials/topNavbar'
export default {
  name: 'CurrencyConverter',
  components: {
    CurrencyConverterCalc,
    OverpayingBank,
    TopCurrencies,
    EndFooter,
    DefaultLayout,
    AltHeader,
    topNavbar
  }

}
</script>

<style scoped>
  body {
    color: #5d7079;
  }

</style>
