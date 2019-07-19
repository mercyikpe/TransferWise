<template>
  <section id="currencyConverter">
    
    <div class="container py-5">
      <div>
        <h1 class="text-white">Currency Converter</h1>
      </div>
      
      <div class="row">
        
        <div class="col-xs-12 col-sm-3">
          <div class="form-group">
            <label for="cc-amount" class="d-none d-md-block d-lg-block d-xl-block">Amount</label>
            <input type="text" class="js-SourceAmount form-control" id="cc-amount" value="1" data-hj-whitelist="">
          </div>
        </div>
        
        
        <div class="col-xs-12 col-sm-6">
          <div class="form-group">
            <div class="row">
              <div class="col-xs-5">
                
                <div class="input-section">
                  <label for="origin-list" class="d-none d-md-block d-lg-block d-xl-block">From</label>
                  <input id="origin-list" list="origin">
                  <datalist name="origin-country" id="origin">
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="CAD">CAD</option>
                    <option value="AUD">AUD</option>
                  </datalist>
                </div>
                
                <div class="col-xs-2">
                  <a class="circle cc-calculator-btn cc-calculator-circle" href="/gb/currency-converter/eur-to-gbp-rate">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" class="icon">
                      <path d="M18.19 4.49l-.7.7L20.29 8H7.5v1h12.79l-2.8 2.81.7.7 4.02-4.01-4.02-4.01zM6.51 12.19l-.7-.7-4.02 4.01 4.02 4.01.7-.7L3.71 16H16.5v-1H3.71l2.8-2.81z" fill="#00b9ff"></path>
                    </svg>
                  </a>
                </div>
                
                
                <div class="col-xs-5">
                  <div class="input-section">
                    <label for="origin-list" class="d-none d-md-block d-lg-block d-xl-block">To</label>
                    <input id="origin-list" list="origin">
                    <datalist name="origin-country" id="origin">
                      <option value="GBP">GBP</option>
                      <option value="EUR">EUR</option>
                      <option value="USD">USD</option>
                      <option value="CAD">CAD</option>
                      <option value="AUD">AUD</option>
                    </datalist>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        <div class="col-xs-12 col-sm-3">
          <button class="js-ConvertButton btn btn-primary form-control cc-calculator-btn" id="convert">Convert</button>
        </div>
      </div>
    
    </div>
  </section>
</template>

<script>
  export default {
    name: 'currencyConverter'
  }
</script>

<style scoped>
  #currencyConverter {
    background: #37517d;
  }
  
  i {
    border: solid #fff;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    margin-left: 5px;
    margin-bottom: 2px;
  }
  
  .caret {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  
  
  header {
    background: #0a3170;
    padding: 1rem 2rem
  }
  #header-text{
    color: #ffffff
  }
  section{
    background: #ffffff;
    border-radius: 3px;
    margin-top: 0.5rem;
    padding: 1.5rem 5rem;
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
    flex-direction: column
  }
  #arrow-section{
    display: flex;
  }
  #arrow-container{
    margin-top: 1.2rem;
    align-self: center;
    color: #2570e8;
    border: 1px solid #2570e8;
    padding: 0.61rem;
    width: 40px;
    height: 40px;
    border-radius: 50%
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
  
  
  */
</style>
