<template>
  <default-layout>
    <template v-slot:header>
      <alt-header></alt-header>
    </template>

    <template v-slot:content>
      <ConverterResult :data="{ ...conversionData}"/>

      <overpayingBank/>

      <topCurrencies/>

      <ExchangeRates/>

      <endFooter/>

    </template>

  </default-layout>
</template>
<script>
import ExchangeRates from '@/components/partials/ExchangeRates'
import ConverterResult from '@/components/partials/ConverterResult'
import OverpayingBank from '@/components/partials/overpayingBank'
import TopCurrencies from '@/components/partials/topCurrencies'
import EndFooter from '@/components/partials/endFooter'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import AltHeader from '@/components/partials/headers/AltHeader'
import topNavbar from '@/components/partials/topNavbar'
import {mapActions, mapMutations} from 'vuex'

export default {
  name: 'CurrencyResult',
  components: {
    ConverterResult,
    OverpayingBank,
    TopCurrencies,
    EndFooter,
    DefaultLayout,
    AltHeader,
    topNavbar,
    ExchangeRates
  },
  data () {
    return {
      conversionData: {
        amount: null,
        base: null,
        symbol: null
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => { vm.processCurrencyConversion(Object.assign({}, to.params, to.query)) })
  },
  beforeRouteUpdate (to, from, next) {
    this.conversionData = {}
    this.processCurrencyConversion(Object.assign({}, to.params, to.query))
  },
  methods: {
    ...mapMutations('converter', ['setConversionData']),
    ...mapActions('converter', ['convertCurrency']),
    processCurrencyConversion (conversionData) {
      this.conversionData = conversionData
      this.setConversionData(this.conversionData)
      this.convertCurrency()
    }
  }
}
</script>

<style scoped>
  body {
    color: #5d7079;
  }

</style>
