import Vue from 'vue'
import Vuex from 'vuex'
import {converter} from './store/converter'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  mutations: {

  },
  actions: {
  },
  modules: { converter }
})
