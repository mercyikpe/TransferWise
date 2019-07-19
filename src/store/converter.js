import {mapValues} from 'lodash'

const fx = require('money')

export const converter = {
  namespaced: true,
  state: {
    currencies: [
      {
        'code': 'EUR',
        'hasBankDetails': true,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'GBP',
        'hasBankDetails': true,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'USD',
        'hasBankDetails': false,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'PLN',
        'hasBankDetails': false,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'CHF',
        'hasBankDetails': false,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'NOK',
        'hasBankDetails': false,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'SEK',
        'hasBankDetails': false,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'DKK',
        'hasBankDetails': false,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'AUD',
        'hasBankDetails': false,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'CAD',
        'hasBankDetails': false,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'JPY',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'HUF',
        'hasBankDetails': false,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'GEL',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'HKD',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'INR',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'IDR',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'MXN',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'RON',
        'hasBankDetails': false,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'TRY',
        'hasBankDetails': false,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'NZD',
        'hasBankDetails': false,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'PHP',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'RUB',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'SGD',
        'hasBankDetails': false,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'ZAR',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'THB',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'ILS',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'CZK',
        'hasBankDetails': false,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'BGN',
        'hasBankDetails': false,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'CLP',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'GHS',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'NGN',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'PKR',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'BDT',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'PEN',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'LKR',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'VND',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'KES',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'MAD',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'AED',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'CNY',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'HRK',
        'hasBankDetails': false,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'EGP',
        'hasBankDetails': false,
        'payInAllowed': true,
        'sampleBankDetails': null
      },
      {
        'code': 'UAH',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'ARS',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      },
      {
        'code': 'NPR',
        'hasBankDetails': false,
        'payInAllowed': false,
        'sampleBankDetails': null
      }
    ],
    rates: {},
    conversionData: {},
    conversionResult: {
      amount: 0,
      rate: 0,
      set result (value) {
        this.amount = value * this.rate
        this.result = value
      },
      get result () {
        return Number(this.rate) * Number(this.amount)
      }
    }
  },
  mutations: {
    setConversionData (state, conversionData) {
      state.conversionData = mapValues(conversionData, v => v.toUpperCase())
    },
    setConversionResult (state, conversionResult) {
      // state.conversionData.amount = (Number(state.conversionData.amount) / Number(conversionResult.rate)).toFixed(4)
      state.conversionResult = conversionResult
    },
    setRates (state, rates) {
      state.rates = rates
    },
    setDataAmount (state, amount) {
      state.conversionData.amount = amount
    }
  },
  actions: {
    async convertCurrency ({ commit, state }) {
      const conversionData = {...state.conversionData}
      const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${conversionData.base}`)
      const liveRates = (await response.json()).rates
      commit('setRates', liveRates)

      fx.rates = liveRates

      try {
        let result = fx(conversionData.amount).from(conversionData.base).to(conversionData.symbol).toFixed(4)
        // const rate = result.toFixed(4)
        commit('setConversionResult', { result, rate: liveRates[conversionData.symbol].toFixed(4), amount: conversionData.amount })

        return result
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {}
}
