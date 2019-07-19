<template>
  <div class="container">
    <div class="container mt-5">
      <div class="row col-10 m-auto">
        <div class="col col-12 col-lg-7 col-md-7 big-col shadow bg-white">
          <table class="table mt-4">
            <thead>
            <tr class="table-row">
              <th scope="col" class="font-weight-bold small">
                Sending 1,000.00 GBP with
            
              </th>
              <th class="small"><span class="font-weight-bold">Recipient gets</span>
                <br>
                (Total after fees)
              </th>
            </tr>
            </thead>
            
            <tbody>
            <tr class="table-row">
              <td class="">
                <span class="cheapestLabel_3ECB_BoXLM">
                  <svg width="11" height="8" class="cheapestLabelTick_m3lmWiGqpn" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.6L3.464 7l6.161-6" stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path>
                  </svg>Cheapest
                </span>
                <span class="logoContainer_1Mi-8oP4WB">
                  <img class="providerLogo_3JF3qp5x2R" src="https://dq8dwmysp7hk1.cloudfront.net/logos/western-union.svg" alt="Western Union">
                </span>
              </td>
              <td >
                <p class="text-blue">443,242.50 NGN
                  <span data-toggle="popover" role="button" tabindex="0">
                    <svg viewBox="0 0 15 15" width="15">
                      <path fill="#00b9ff" d="M6.5 13.5c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm0-13c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z" transform="translate(1 1)"></path>
                      <path fill="#00b9ff" d="M5.7 3.6c0-.4.4-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.3-.8-.8zm.1 1.5h1.3V10H5.8V5.1z" transform="translate(1 1)"></path>
                    </svg>
                  </span>
                </p>
              </td>
            </tr>
            <tr class="bg-blue table-row">
              <td>
                <span class="logoContainer_1Mi-8oP4WB">
                  <img class="providerLogo_3JF3qp5x2R" src="https://lienzo.s3.amazonaws.com/images/transferwise-white.svg" alt="TransferWise">
                </span>
              </td>
              <td>
                <p><span class="text-blu">439,677.30 NGN</span>
                  <br>
                  <span class="text-red negativeDeltaHero_2w2ey49v5Z"></span>-3,565.20 NGN
                </p>
              </td>
            </tr>
            <tr class="table-row">
              <td>
                <span class="logoContainer_1Mi-8oP4WB">
                  <img class="providerLogo_3JF3qp5x2R" src="https://dq8dwmysp7hk1.cloudfront.net/logos/moneygram.svg" alt="Moneygram">
                </span>
              </td>
              <td>
                <p><span class="text-blue">439,677.30 NGN</span>
                  <br>
                  <span class="text-red">- 3,565.20 NGN</span>
                </p>
              </td>
            </tr>
            <tr class="table-row">
              <td>
                <span class="logoContainer_1Mi-8oP4WB">
                  <img class="providerLogo_3JF3qp5x2R" src="https://dq8dwmysp7hk1.cloudfront.net/logos/barclays.svg" alt="Barclays">
                </span>
              </td>
              <td>
                <p><span class="text-blue">439,677.30 NGN</span>
                  <br>
                  <span class=text-red>- 3,565.20 NGN</span>
                </p>
              </td>
            </tr>
          
            </tbody>
            
          </table>
        </div>
        <div class="col col-md-5 col-lg-5 py-4 bg-light small-col">
          <table class="table">
            <thead class="">
            <tr class="tab">
              <th scope="col" class="font-weight-bold small">Transfer fee</th>
              <th class="small"><span class="font-weight-bold">Exchange rate</span><br>
                (1 GBP → NGN)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="p-5">
                <h6>0.00 GBP</h6>
              </td>
              <td>
                <h6>443.243</h6>
              </td>
            </tr>
            <tr class="bg-bluee">
              <td>
                <h6>5.73 GBP</h6>
              </td>
              <td>
                <h6>445.649
                  <br>
                  Mid-market rate
                </h6>
              </td>
            </tr>
            <tr>
              <td>
                <h6>0.00 GBP</h6>
              </td>
              <td>
                <h6>439.677</h6>
              </td>
            </tr>
            <tr>
              <td>
                <h6>0.00 GBP</h6>
              </td>
              <td>
                <h6>443.243</h6>
              </td>
            </tr>
          
            </tbody>
          </table>
        </div>
        
        <div class="row my-5">
          <div class="col-4"><h4>No hidden fees.</h4></div>
          
          <div class="col-8">
            <p class="text-left">We’re on a mission to bring transparency to finance,
              <a href="https://transferwise.com/community/mission-and-philosophy" class="table-hero__footer-link_1p4FT8xKre">
                for people without borders.</a> We charge as little as possible, and we always show you upfront. No hidden fees.
              No bad exchange rates. No surprises.
              <a href="https://transferwise.com/gb/compare/disclaimer" class="table-hero__footer-link_1p4FT8xKre">How do we collect this data?</a></p>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'comparePrice'
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  
  table {
    border: 0;
    color: #5d7079;
  }
  /* Create two equal columns that floats next to each other */
  .col {
    float: left;
    padding: 0!important;
    border-radius: 5px;
  }

  .table-hero__footer-link_1p4FT8xKre {
    color: #00b9ff;
    text-decoration: none;
  }

  .table-hero__footer-link_1p4FT8xKre:hover {
    text-decoration: underline;
  }
  
  .big-col{
    height:700px;
    
  }
  .small-col{
    height: 600px;
    margin-top:24px;
  }
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  .table th {
    border-top: none;
    padding: 20px 36px;
  }
  .bg-blue{
    background: #37517E;
    color: #fff
  }
  .bg-bluee{
    background:#2E4369;
    color:#fff;
  }
  .table td{
    padding:36px 36px!important;
  }
  .text-blue{
    color:#2E4369;
    font-weight: 700;
    font-size: 18px;
  }
  .text-red{
    color: #c22e2e;
    font-weight: 500;
  }

  .cheapestLabel_3ECB_BoXLM {
    display: block;
    position: absolute;
    background: #2ed06e;
    padding: 4px 3px;
    border-radius: 3px;
    bottom: 88px;
    /*margin-left: -100px;*/
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    color: #fff;
  }

  .providerLogo_3JF3qp5x2R {
    max-width: 8em!important;
    width: 8em;
  }
  .providerLogo_3JF3qp5x2R {
    max-width: 6em!important;
    max-height: 2em;
    margin: 4px 0;
    min-width: 80px;
    object-fit: contain;
    object-position: 0 0;
  }

  .negativeDeltaHero_2w2ey49v5Z:before {
    content: "";
    width: 0;
    height: 0;
    margin-top: -50px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 7px solid #c22e2e;
    vertical-align: table;
  }
</style>
