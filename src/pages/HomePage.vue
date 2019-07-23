<template>
  <default-layout>
    <template v-slot:content>
<!--      <HomeBanner/>-->
<!--      <ComparePrice/>-->
      <accordion/>
      <GlobalSupport/>
<!--      <Testimony/>-->
      <WhatOurCustomerSay/>
      <WiredQuotes/>
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
  import accordion from '../components/partials/accordion'
  import HomeBanner from '../components/partials/HomeBanner'
  import Testimony from '../components/partials/Testimony'
  
  export default {
    name: 'HomePage',
    
    
    components: {
      Testimony,
      HomeBanner,
      accordion,
      GlobalSupport,
      WhatOurCustomerSay,
      GetTheApp,
      BuildingWithoutBorders,
      FooterSection,
      Map,
      ComparePrice,
      DefaultLayout,
      WiredQuotes
    }

 
  };

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Lato');
  
  .accordion {
    max-width: 400px;
    font-family: Lato;
    margin-bottom: 20px;
    
    background-color: #ec5366;
    border-radius: 6px;
  }
  
  .accordion .header {
    height: 40px;
    line-height: 40px;
    padding: 0 40px 0 8px;
    position: relative;
    color: #fff;
    cursor: pointer;
  }
  
  .accordion .header-icon {
    position: absolute;
    top: 5px;
    right: 8px;
    transform: rotate(0deg);
    transition-duration: 0.3s;
  }
  
  .accordion .body {
    /*   display: none; */
    overflow: hidden;
    background-color: #fff;
    border: 10px solid #ec5366;
    border-top: 0;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    transition: 150ms ease-out;
  }
  
  .accordion .body-inner {
    padding: 8px;
    overflow-wrap: break-word;
    /*   white-space: pre-wrap; */
  }
  
  .accordion .header-icon.rotate {
    transform: rotate(180deg);
    transition-duration: 0.3s;
  }
  
  .accordion.purple {
    background-color: #8c618d;
  }
  
  .accordion.purple .body {
    border-color: #8c618d;
  }
</style>
