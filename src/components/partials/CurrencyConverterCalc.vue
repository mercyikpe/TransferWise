<template>
  <section id="currencyConverter">
    <!-- Font Awesome Icons was used for the arrow -->
  <div class="container py-4">
    <header>
      <h1 id="header-text" class="py-5">Currency Converter</h1>
      <section class="">
        <div class="col-xs-12 col-sm-3">
          <div class="form-group">
            <label for="cc-amount" class="d-none d-md-block d-lg-block d-xl-block">Amount</label>
            <input type="number" placeholder="Amount" min="1" v-model="conversionData.amount" class="h-50 form-control" id="cc-amount" value="1" data-hj-whitelist="">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <div class="form-group d-flex">
                <div class="col-xs-4">
                  <label for="origin-list" class="d-none d-md-block d-lg-block d-xl-block">From</label>
                  <v-select placeholder="From" :components="{Deselect}" class="style-chooser" style="width: 167px;" v-model="conversionData.base" :options="currencies.map(v => v.code)">
                    <template slot="option" slot-scope="option">
                      <div :class="`currency-flag currency-flag-${option.label.toLowerCase() }`"></div>
                      {{ option.label }}
                    </template>
                  </v-select>
                </div>
              <div class="col-xs-2 mx-2">
                <a @click.prevent="launchCurrencyConversion" class="circle cc-calculator-btn" href="#">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" class="icon cc-calculator-btn">
                    <path d="M18.19 4.49l-.7.7L20.29 8H7.5v1h12.79l-2.8 2.81.7.7 4.02-4.01-4.02-4.01zM6.51 12.19l-.7-.7-4.02 4.01 4.02 4.01.7-.7L3.71 16H16.5v-1H3.71l2.8-2.81z" fill="#00b9ff"></path>
                  </svg>
                </a>
              </div>
                <div class="col-xs-4">
                  <div class="">
                    <label for="origin-list" class="d-none d-md-block d-lg-block d-xl-block">To</label>
                    <v-select placeholder="To" @change="convert" :components="{Deselect}" class="style-chooser" style="width: 167px;" v-model="conversionData.symbol" :options="currencies.map(v => v.code)">
                      <template slot="option" slot-scope="option">
                        <div :class="`currency-flag currency-flag-${option.label.toLowerCase() }`"></div>
                        {{ option.label }}
                      </template>
                    </v-select>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-3">
          <button :disabled="invalidData" @click.prevent="launchCurrencyConversion" class="btn btn-primary form-control cc-calculator-btn" id="convert">Convert</button>
        </div>
      </section>
    </header>
  </div>
  </section>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
import converter from '@/mixins/converter'
import ConversionLauncher from '../ConversionLauncher'

export default {
  name: 'CurrencyConverterCalc',
  components: { ConversionLauncher },
  mixins: [converter],
  computed: {
    ...mapState('converter', ['currencies']),
  },
  data () {
    return {
      Deselect: {
        render: createElement => createElement('span', '')
      },
      conversionData: {
        base: null,
        symbol: null,
        amount: ''
      },
      conversionResult: null
    }
  },
  methods: {
    ...mapActions(['convertCurrency']),
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
</style>
