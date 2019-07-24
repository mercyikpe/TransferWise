<template>
  <div id="tw-comparison-below-fold" class="tw-below-hero-section">
    <table class="table-section">
      <thead class="table-header">
      <tr class="table-row">
        <th class="table-item">Sending 1,000.00 GBP with</th>
        <th class="table-item">Recipient gets<span class="table-item-under-text">(Total after fees)</span></th>
        
        <th class="table-item">Transfer fee</th>
        <th class="table-item">Exchange rate<span class="table-item-under-text">(1 GBP &#8594; NGN)</span></th>
      </tr>
      </thead>
      <tbody>
      
      <tr class="table-row ">
        <td class="table-column ">
          <span class="right-table-logo">
            <img class="table-logo" src="https://dq8dwmysp7hk1.cloudfront.net/logos/western-union.svg" alt="Western Union">
          </span>
          <span class="cheapestLabel">
            <svg width="11" height="8" class="cheapest-label-tick" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4.6L3.464 7l6.161-6" stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path>
            </svg>Cheapest</span>
        </td>
        
        <td class="table-column"><span class="left-table-item"><span><span class="left-table-item-figure">439,341.30 NGN</span></span></span>
          <div class="blue-icon"><span data-toggle="popover" role="button" tabindex="0">
            <svg viewBox="0 0 15 15" width="15"><path fill="#00b9ff" d="M6.5 13.5c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm0-13c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z" transform="translate(1 1)"></path><path fill="#00b9ff" d="M5.7 3.6c0-.4.4-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.3-.8-.8zm.1 1.5h1.3V10H5.8V5.1z" transform="translate(1 1)"></path></svg></span>
            <div class="popover_pwU2gYgcKT animate_2Kc19ZMCXE in scale-down_3U3ks1zGly">
            </div>
          </div>
        </td>
        <td class="table-column"><span class="right-table-item">0.00 GBP</span></td>
        <td class="table-column"><span class="exchange-rate-figure"><span class="bad-exchange-rate-figure"></span><span class="rate-price">439.341</span></span>
        </td>
      </tr>
      
      <tr class="table-row blue-table-row">
        <td class="table-column "><span class="right-table-logo"><img class="table-logo" src="https://lienzo.s3.amazonaws.com/images/transferwise-white.svg" alt="TransferWise"></span></td>
        <td class="table-column"><span class="left-table-item"><span><span class="blue-table-item-price">439,107.41 NGN</span></span><span class="red-dot">- 233.89 NGN</span></span>
        </td>
        <td class="table-column"><span class="text-white">5.73 GBP</span></td>
        <td class="table-column"><span class="exchange-rate-figure"><span class="green-dot"></span><span class="rate-price">441.638</span></span><span class="label-text">Mid-market rate</span></td>
      </tr>
      <tr class="table-row ">
        <td class="table-column "><span class="right-table-logo"><img class="table-logo" src="https://dq8dwmysp7hk1.cloudfront.net/logos/moneygram.svg" alt="Moneygram"></span></td>
        <td class="table-column"><span class="left-table-item"><span><span class="left-table-item-figure">436,868.60 NGN</span></span><span class="red-dot">- 2,472.70 NGN</span></span>
        </td>
        <td class="table-column"><span class="right-table-item">0.00 GBP</span></td>
        <td class="table-column"><span class="exchange-rate-figure"><span class="bad-exchange-rate-figure"></span><span class="rate-price">436.869</span></span>
        </td>
      </tr>
      <tr class="table-row ">
        <td class="table-column "><span class="right-table-logo"><img class="table-logo" src="https://dq8dwmysp7hk1.cloudfront.net/logos/barclays.svg" alt="Barclays"></span></td>
        <td class="table-column"><span class="left-table-item"><span><span class="left-table-item-figure">436,427.00 NGN</span></span><span class="red-dot">- 2,914.30 NGN</span></span>
        </td>
        <td class="table-column"><span class="right-table-item">0.00 GBP</span></td>
        <td class="table-column"><span class="exchange-rate-figure"><span class="bad-exchange-rate-figure"></span><span class="rate-price">436.427</span></span>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="table-footer">
      <div class="table-section-footer">No hidden fees.</div>
      <p>We're on a mission to bring transparency to finance,&nbsp;<a href="https://transferwise.com/community/mission-and-philosophy" class="table-footer-link">for people without borders.</a>&nbsp;We charge as little as possible, and we always show you upfront. No hidden fees. No bad exchange rates. No surprises.&nbsp;<a href="https://transferwise.com/gb/compare/disclaimer" class="table-footer-link">How do we collect this data?</a></p>
    </div>
  </div></template>

<script>
  export default {
    name: 'comparePrice'
  }
</script>

<style scoped>
  
  .table-section {
    font-family: Averta, Avenir W02, Avenir, Helvetica, Arial, sans-serif;
    color: #5d7079;
    max-width: 886px;
    width: 100%;
    position: relative;
    background: #fff;
    border-radius: 3px;
    border: 1px solid #e2e6e8;
    table-layout: fixed;
  }
  
  @media screen and (min-width:768px) {
    .table-section {
      margin: 40px auto;
      border: 0;
      background: #f2f5f7;
      table-layout: inherit;
    }
  }
  
  @media screen and (max-width:768px) {
    .table-section .table-row:last-child .table-column {
      border-bottom: 0;
    }
  }

  .left-table-item {
    display: flex!important;
    flex-direction: column;
    align-items: flex-end;
  }

  .table-item {
    color: #2e4369;
    padding: 16px 0;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }

  .table-item:first-of-type {
    display: flex;
    justify-content: center;
    width: 200%;
  }

  .table-item:nth-of-type(2),
  .table-item:nth-of-type(3),
  .table-item:nth-of-type(4) {
    display: none;
  }

  
  .table-logo {
    max-width: 6em!important;
    max-height: 2em;
    margin: 4px 0;
    min-width: 80px;
    object-fit: contain;
    object-position: 0 0;
  }

  @media (min-width:768px) {
    .table-logo {
      max-width: 8em!important;
      width: 8em;
    }
  }

  .table-column {
    padding: 24px 32px;
    border-top: 1px solid #e2e6e8;
  }

  .blue-table-row .table-column {
    border-top: 0;
  }

  .table-column:nth-of-type(2) {
    text-align: right;
  }

  .table-column:nth-of-type(3),
  .table-column:nth-of-type(4) {
    display: none;
  }
  
  .right-table-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .green-dot {
    display: flex;
    order: 1;
    margin-left: 4px;
  }
  
  .green-dot:before {
    content: "";
    border-radius: 100%;
    background: #1b7940;
    width: 8px;
    height: 8px;
    margin-top: -2px;
  }
  
  .bad-exchange-rate-figure {
    display: flex;
    order: 1;
    margin-left: 4px;
  }
  
  .bad-exchange-rate-figure:before {
    content: "";
    border-radius: 100%;
    background: #c22e2e;
    width: 8px;
    height: 8px;
    margin-top: -2px;
  }
  
  .rate-price {
    font-weight: 600;
  }
  
  .label-text {
    font-size: 14px;
    line-height: 24px;
  }
  
  @media (max-width:575px) {
    .label-text {
      display: none!important;
    }
  }
  
  @media (min-width:576px) and (max-width:767px) {
    .label-text {
      display: none!important;
    }
  }
  
  
  @media screen and (min-width:768px) {
    .table-item {
      margin-right: 40px;
      padding: 16px 64px 16px 0;
      font-weight: 700;
      text-align: right;
    }
    .table-item:first-of-type {
      display: table-cell;
      width: inherit;
      text-align: left;
      padding-left: 64px;
      padding-right: 0;
    }
    .table-item:nth-of-type(3) {
      padding-right: 0;
      width: 15%;
    }
    .table-item:nth-of-type(2),
    .table-item:nth-of-type(3),
    .table-item:nth-of-type(4) {
      display: table-cell;
    }
  }
  
  @media screen and (min-width:768px) {
    .table-column {
      border-top: 0;
      height: 120px;
      padding: 0 64px 0 0;
      text-align: right;
    }
    .table-column:first-of-type {
      text-align: left;
      padding-left: 64px;
    }
    .table-column:nth-of-type(3) {
      padding-right: 0;
    }
    .table-column:nth-of-type(3),
    .table-column:nth-of-type(4) {
      display: table-cell;
    }
  }
  
  .table-column {
    position: relative;
  }
  
  .cheapestLabel {
    display: none;
  }
  
  @media screen and (min-width:768px) {
    .cheapestLabel {
      display: block;
      position: absolute;
      background: #2ed06e;
      padding: 4px 8px;
      border-radius: 3px;
      bottom: 88px;
      left: -8px;
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      color: #fff;
    }
  }
  
  .cheapest-label-tick {
    margin-right: 8px;
  }
  
  .table-item-under-text {
    font-size: 12px;
    font-weight: 400;
    display: block;
    margin-top: 4px;
  }
  
  @media screen and (min-width:768px) {
    .table-header th:first-of-type,
    .table-header th:nth-of-type(2) {
      background: #fff;
    }
    
    .table-header th:first-of-type:before {
      content: "";
      position: absolute;
      top: -16px;
      left: 0;
      width: 59.8%;
      height: 32px;
      border-radius: 3px;
      background: #fff;
      box-shadow: 0 3px 55px 24px rgba(34, 48, 73, .05);
      clip-path: polygon(-40% 50%, 140% 50%, 140% 250%, -40% 250%);
      transform: rotate(180deg);
    }
    .table-row td:first-of-type,
    .table-row td:nth-of-type(2) {
      background: #fff;
      width: 30%;
    }
    .table-row td:nth-of-type(2),
    .table-row th:nth-of-type(2) {
      position: relative;
    }
    
    .table-row td:nth-of-type(2):after,
    .table-row th:nth-of-type(2):after {
      content: "";
      position: absolute;
      top: 0;
      left: -111%;
      width: 222%;
      height: 100%;
      background: rgba(34, 48, 72, .05) 5%, hsla(0, 0%, 100%, 0) 0,;
    }
    .table-row:last-child {
      position: relative;
    }
    .table-row:last-child td:first-of-type {
      position: inherit;
    }
    .table-row:last-child td:first-of-type:before {
      content: "";
      position: absolute;
      bottom: -16px;
      left: 0;
      width: 59.8%;
      height: 32px;
      border-radius: 3px;
      background: #fff;
      box-shadow: 0 3px 55px 24px rgba(34, 48, 73, .05);
      clip-path: polygon(-40% 50%, 140% 50%, 140% 250%, -40% 250%);
    }
    .table-row th:nth-child(3) {
      position: relative;
    }
    .table-row th:nth-child(3):after {
      content: "";
      position: absolute;
      width: 580%;
      height: 2px;
      left: -354%;
      bottom: 0;
      background: rgba(0, 0, 0, .03);
      z-index: 1;
      pointer-events: none;
    }
    
    .table-row:not(:last-child) td:nth-child(3) {
      position: relative;
    }
    .table-row:not(:last-child) td:nth-child(3):after {
      content: "";
      position: absolute;
      width: 580%;
      height: 2px;
      left: -354%;
      bottom: 0;
      background: rgba(0, 0, 0, .03);
      z-index: 1;
      pointer-events: none;
    }
  }
  
  @media (max-width:886px) {
    .table-row td:nth-of-type(2):after,
    .table-row th:nth-of-type(2):after {
      background: none;
    }
  }
  
  .blue-table-row {
    background: #2e4369;
    color: #fff;
  }
  
  .blue-table-row .red-dot {
    color: #f53636;
    display: flex!important;
    align-items: center;
  }
  
  .blue-table-row .red-dot:before {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 7px solid #f53636;
    margin-right: 4px;
  }
  
  .blue-table-row td:first-of-type,
  .blue-table-row td:nth-of-type(2) {
    background: #37517e;
  }
  
  .right-table-item {
    color: #2e4369;
  }
  
  .right-table-item {
    white-space: nowrap;
    font-weight: 600;
    display: flex;
    justify-content: flex-end;
    line-height: 24px;
    font-size: 14px;
  }
  
  .exchange-rate-figure {
    display: flex!important;
    justify-content: flex-end;
    font-size: 14px;
    line-height: 24px;
    align-items: center;
  }
  
  .left-table-item-figure {
    display: inline-block;
    line-height: 24px;
    font-weight: 600;
    color: #2e4369;
    white-space: nowrap;
    font-size: 16px;
    margin-bottom: 0;
  }
  
  @media (min-width:768px) {
    .left-table-item-figure {
      margin-bottom: 0;
      font-size: 22px;
    }
  }
  
  .blue-table-item-price {
    display: inline-block;
    line-height: 24px;
    font-weight: 600;
    white-space: nowrap;
    font-size: 16px;
    margin-bottom: 0;
    color: #fff;
  }
  
  @media (min-width:768px) {
    .blue-table-item-price {
      margin-bottom: 0;
      font-size: 22px;
    }
  }
  
  .red-dot {
    display: flex!important;
    align-items: center;
    white-space: nowrap;
    color: #c22e2e;
    font-size: 14px;
    font-weight: 600;
  }
  
  .red-dot:before {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 7px solid #c22e2e;
    margin-right: 4px;
  }
  
  @media (min-width:768px) {
    .red-dot {
      font-size: 16px;
      margin-top: 4px;
    }
    .red-dot:before {
      margin-right: 8px;
    }
  }
  
  .blue-icon {
    margin-right: 8px;
    margin-top: 4px;
    display: inline-block;
    position: absolute;
    top: 28px;
    right: 4px;
  }
  
  @media (min-width:768px) {
    .blue-icon {
      top: 47px;
      right: 32px;
    }
  }
  .table-footer {
    background: #ecf8ff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-family: Averta, Avenir W02, Avenir, Helvetica, Arial, sans-serif;
    max-width: 886px;
    padding: 32px;
    width: 100%;
    margin: auto;
    font-size: 14px;
    line-height: 24px;
    color: #5d7079;
    text-align: center;
  }

  @media (min-width:768px) {
    .table-footer {
      background: none;
      flex-direction: row;
      text-align: left;
    }
  }

  .table-section-footer {
    width: 100%;
    color: #2e4369;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .table-footer-link {
    color: #00b9ff;
    text-decoration: none;
  }

  .table-footer-link:hover {
    color: #00a4df;
    text-decoration: underline;
  }
</style>
