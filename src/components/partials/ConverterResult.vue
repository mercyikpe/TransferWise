<template>
  <section id="currencyConverter">
    <!-- Font Awesome Icons was used for the arrow -->
    <div class="container py-4">
      <header>
        <h1 id="header-text" class="py-5 text-left">{{ headerText }}</h1>
        <section class="">
          <div class="row">
          <div class="col-xs-12 col-sm-6">
            <div class="form-group">
              <label for="conversion-amount" class="d-none d-md-block d-lg-block d-xl-block text-left">Amount</label>
              <input @keyup="computeRate" v-model="conversionData.amount" type="number" class="form-control h-75" id="conversion-amount" value="1" data-hj-whitelist="">
            </div>
          </div>
          <div class="col-xs-12 col-sm-6">
            <div class="form-group">
              <label for="conversion-result" class="d-none d-md-block d-lg-block d-xl-block text-left">Converted to</label>
              <input @keyup="computeAmount" v-model="conversionResult.result" type="number" class="form-control h-75" id="conversion-result" value="1" data-hj-whitelist="">
            </div>
          </div>
          <div class="col-xs-12 col:x-sm-6">
            <div class="form-group d-flex">
              <div class="col-xs-4">
                <label for="origin-list" class="d-none d-md-block d-lg-block d-xl-block text-left">From</label>
                <v-select @input="launchCurrencyConversion" :components="{Deselect}" class="style-chooser" style="width: 167px;" v-model="conversionData.base" :options="currencies.map(v => v.code)">
                    <template slot="option" slot-scope="option">
                      <div :class="`currency-flag currency-flag-${option.label.toLowerCase() }`"></div>
                      {{ option.label }}
                    </template>
                </v-select>
              </div>

              <div class="col-xs-2 mx-2 arrow-container">
                <a @click.prevent="launchCurrencyConversion" class="circle cc-calculator-btn" href="#">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" class="icon cc-calculator-btn">
                    <path d="M18.19 4.49l-.7.7L20.29 8H7.5v1h12.79l-2.8 2.81.7.7 4.02-4.01-4.02-4.01zM6.51 12.19l-.7-.7-4.02 4.01 4.02 4.01.7-.7L3.71 16H16.5v-1H3.71l2.8-2.81z" fill="#00b9ff"></path>
                  </svg>
                </a>
              </div>

              <div class="col-xs-4">
                  <label for="origin-list" class="d-none d-md-block d-lg-block d-xl-block text-left">To</label>
                  <v-select @input="launchCurrencyConversion" :components="{Deselect}" class="style-chooser" style="width: 167px;" v-model="conversionData.symbol" :options="currencies.map(v => v.code)">
                    <template slot="option" slot-scope="option">
                      <div :class="`currency-flag currency-flag-${option.label.toLowerCase() }`"></div>
                      {{ option.label }}
                    </template>
                  </v-select>
                </div>
            </div>
          </div>

          <div class="col-xs-12 col-md-6 text-xs-center pt-4">
            <h3 class="cc__source-to-target m-t-2">
              <span class="dot-success animate-blink"></span>
              <span>1 {{ conversionData.base }} → </span>
              <span>{{ conversionResult.rate }} {{ conversionData.symbol }}</span>
            </h3>
            <a href="#mid-market-rate-modal" class="js-MidMarketLink text-no-decoration" data-toggle="modal" data-target="#mid-market-rate-modal">
              <small class="m-b-1 text-underline">Mid-market exchange rate at 19:26 UTC</small>
              <span class="circle circle-xs circle-inverse circle--inline"><i class="icon icon-help"></i></span>
            </a>
          </div>
        </div>
          <div class="container-fluid section-footer">
            <div class="row py-5">
              <div class="col-xs-12 col-md-8">
              <div><p class="small m-b-0 text-left"><strong>Get more for your money with TransferWise.</strong> We give you the real exchange rate and our small, fair fee – so you always know what you’re getting.</p>
              </div>
            </div>
              <div class="col-xs-12 col-md-4 text-xs-center">
              <div>
                <a class="js-SendMoneyButton btn btn-success btn-block btn--multi-row js-send-money-cta" href="https://transferwise.com/?sourceCurrency=GBP&amp;targetCurrency=EUR&amp;sourceAmount=1">Send money</a>
              </div>
            </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  </section>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'
import converter from '../../mixins/converter'

export default {
  name: 'ConverterResult',
  mixins: [converter],
  computed: {
    ...mapState('converter', ['conversionData', 'conversionResult', 'currencies']),
    headerText () {
      return `${this.data.base} to ${this.data.symbol}`.toUpperCase()
    },
    computedAmount () {
      return ((this.conversionResult.result / this.conversionResult.rate)).toFixed(4)
    }
  },
  props: ['data'],
  data () {
    return {
      Deselect: {
        render: createElement => createElement('span', '')
      },
      result: {},
      cData: {},
    }
  },
  mounted () {
    this.$watch('conversionResult', (newValue, oldVal) => {
      this.result = newValue
    }, { deep: true })
    this.$watch('conversionData', (newValue, oldVal) => {
      this.cData = newValue;
      if (oldVal.base !== newValue.base || oldVal.symbol !== newValue.symbol) {
        this.launchCurrencyConversion()
      }
    }, { deep: true })
  },
  watch: {
  },
  methods: {
    ...mapActions('converter', ['convertCurrency']),
    ...mapMutations('converter', ['setConversionResult', 'setDataAmount', 'setConversionData']),
    computeAmount (event) {
      if (event.keyCode >= 48 || event.keyCode <= 57) {
        this.setConversionResult({...this.result})
        this.setDataAmount(this.computedAmount)
      }
    },
    computeRate (event) {
      if (event.keyCode >= 48 || event.keyCode <= 57) {
        this.setConversionData({...this.cData})
        this.convertCurrency()
      }
    }
  }
}
</script>

<style scoped>
  #currencyConverter {
    background: #37517d;
  }

  #header-text{
    color: #ffffff
  }
  section{
    background: #ffffff;
    border-radius: 3px;
    padding: 1.5rem 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  input{
    font-size: 1rem;
    padding: 0.7rem;
    border-radius: 3px;
    border: 1px solid #9c9c9c
  }
  .input-section{
    display: flex;
    flex-direction: row
  }

  .arrow-container .circle svg {
    /*margin-top: 1.2rem;*/
    /*align-self: center;*/
    padding: 0.61rem;
    width: 48px;
    height: 48px;
  }

  .arrow-container .circle svg:hover {
    border: 1px solid #00b9ff;
    border-radius: 50%;
    text-decoration: none;
  }

  /* styling for dropdown arrow */
  input::-webkit-calendar-picker-indicator{
    opacity: 1;
    color: #2570e8
  }
  /*hide arrow when input is focused on*/
  input:focus::-webkit-calendar-picker-indicator{
    opacity: 0;
  }

  #convert-button-section{
    display: flex
  }

  input[type="button"]{
    background: #2570e8;
    color: #ffffff;
    padding: 0.7rem 4rem;
    align-self: flex-end;
    cursor: pointer;
  }

  .cc-calculator-btn {
    margin-top: 30px;
  }

  @media (min-width: 768px)
    .cc-calculator-btn {
      margin-top: 30px;
    }

    label {
      font-size: 14px;
      line-height: 20px;
      color: #5d7079;
    }
    p {
      color: #5d7079;
    }

    .section-footer {
      background-color: #f2f5f7;
    }
</style>
