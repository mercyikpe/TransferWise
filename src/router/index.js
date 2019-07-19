import Vue from 'vue'
import Router from 'vue-router'
import CurrencyConverter from '../pages/CurrencyConverter'
import HomePage from '../pages/HomePage'
import CurrencyResult from '../pages/CurrencyResult'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/currency-converter',
      name: 'currency.converter',
      component: CurrencyConverter
    },
    {
      path: '/currency-converter/:base-to-:symbol',
      name: 'currency.converter.result',
      component: CurrencyResult
    }
  ]
})
