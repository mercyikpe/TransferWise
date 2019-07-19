// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'currency-flags/dist/currency-flags.min.css'
import {store} from './store'

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

Vue.config.productionTip = false

Vue.component('v-select', vSelect)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
