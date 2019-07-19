import {mapActions} from 'vuex'

export default {
  computed: {
    invalidData() {
      return !this.conversionData.base || !this.conversionData.symbol || this.conversionData.symbol === "" || this.conversionData.base === "";
    }
  },
  methods: {
    async launchCurrencyConversion () {
      if (this.checkIfConversionDataIsValid) {
        window.location.href = `/#/currency-converter/${this.conversionData.base.toLowerCase()}-to-${this.conversionData.symbol.toLowerCase()}?amount=${this.conversionData.amount || 1}`;
      }
    },
    checkIfConversionDataIsValid () {
      if (!this.conversionData.amount || this.conversionData.amount === 0) {
        this.conversionData.amount = 1
      }

      if (!this.conversionData.base || !this.conversionData.symbol || this.conversionData.symbol === "" || this.conversionData.base === "") {
        return false
      }

      return true
    }
  },
  ...mapActions(['convertCurrency'])
}
