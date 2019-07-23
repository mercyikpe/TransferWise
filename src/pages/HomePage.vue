<template>
  <default-layout>
    <template v-slot:content>
<!--      <HomeBanner/>-->
<!--      <ComparePrice/>-->
<!--      <SendMoney/>-->
<!--      <GlobalSupport/>-->
<!--      <WhatOurCustomerSay/>-->
<!--      <WiredQuotes/>-->
<!--      <Map/>-->
      <GetTheApp/>
      <BuildingWithoutBorders/>
      <FooterSection/>
    </template>
  </default-layout>
</template>

<script>
  import DefaultLayout from '@/components/layouts/DefaultLayout';
  import ComparePrice from '../components/partials/ComparePrice'
  import Map from '../components/partials/Map'
  import FooterSection from '../components/partials/FooterSection'
  import BuildingWithoutBorders from '../components/partials/BuildingWithoutBorders'
  import GetTheApp from '../components/partials/GetTheApp'
  import WiredQuotes from '../components/partials/WiredQuotes'
  import WhatOurCustomerSay from '../components/partials/WhatOurCustomerSay'
  import GlobalSupport from '../components/partials/GlobalSupport'
  import SendMoney from '../components/partials/SendMoney'
  import HomeBanner from '../components/partials/HomeBanner'
  
  export default {
    name: 'HomePage',
    components: {
      HomeBanner,
      SendMoney,
      GlobalSupport,
      WhatOurCustomerSay,
      GetTheApp,
      BuildingWithoutBorders,
      FooterSection,
      Map,
      ComparePrice,
      DefaultLayout,
      WiredQuotes }
  }
</script>

<style scoped>

</style>
