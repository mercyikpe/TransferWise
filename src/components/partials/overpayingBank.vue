<template>
  <section class="py-5" id="overpayingBank">
    <div class="container">
      <div class="row my-5">
        <div class="col-xs-12 text-xs-center col-sm-offset-1 col-sm-10 col-md-offset-0 col-md-6 text-md-left mb-5">
          <h2 class="my-2 section-title">Are you overpaying your bank?</h2>
          <div class="mb-4">
            <p>Banks often advertise free or low-cost transfers,
              but add a hidden markup to the exchange rate. TransferWise gives you the real, mid-market,
              exchange rate, so you can make huge savings on international transfers.</p>
          </div>
          <a class="btn btn-primary py-2 mr-1" href="https://transferwise.com/gb/compare">Compare us to your bank</a>
          <a href="https://transferwise.com/register" class="btn btn-success py-2">Send money with TransferWise</a>
        </div>
        <div class="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-0">
          <img class="img-responsive center-block" alt="" src="~@/assets/img/overpayingBank.png">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'overpayingBank'
  }
</script>

<style scoped>
  .section-title {
    font-family: Averta,avenir w02,Avenir,Helvetica,Arial,sans-serif;
    font-weight: 600;
    line-height: 1.2;
    color: #2e4369
  }
  #overpayingBank {
    color: #5d7079;
  }
  img {
    vertical-align: middle;
    border-style: none;
    max-width: 100%;
    height: auto;
    max-width: 100%;
  }
  .btn-primary {
    background-color: #00b9ff;
    border-color: #00b9ff;
  }

  .btn-primary:hover {
    background-color: #00a4df;
    border-color: #00a4df;
  }
  
  
</style>
