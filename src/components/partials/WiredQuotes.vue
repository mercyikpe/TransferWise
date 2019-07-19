<template>
  <section class="bg-default py-5">
    <div class="container">
      <div class="row mt-4 text-center">
  
        <div class="col-md-4 col-12 pt-3">
          <div class="quoteMark">
            <img src="@/assets/img/wired.svg" alt="" class="my-3" style="width:130px">
            <p class="get_app_lead">
              Smart tech and sharp thinking are disrupting <br>
              high-street banks
            </p>
          </div>
        </div>
      
        <div class="col-md-4 col-12 pt-3">
          <div class="quoteMark">
          <img src="@/assets/img/times.svg" alt="" class="my-3" style="width:120px">
          <p class="get_app_lead">
            TransferWise is looking to use the internet to <br>
            spark a digital revolution in current financial <br>
            services.
          </p>
          </div>
        </div>
        <div class="col-md-4 col-12 pt-3">
          <div class="quoteMark">
          <img src="@/assets/img/econs.svg" alt="" class="my-3" style="width:80px">
          <p class="get_app_lead">
            TransferWise takes a machete to the hefty <br>
            fees that banks levy to send money across <br>
            borders.
          </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'WiredQuotes'
  }
</script>

<style scoped>
  section {
    background: #f2f5f7!important;
    font-family: 'Cabin', sans-serif;
  }
  
  .get_app_one{
    font-weight: 800;
    color: #2e4369;
    font-size: 42px;
  }
  .get_app{
    font-weight: 800;
    color: #2e4369;
    font-size: 28px;
  }
  
  .get_app_lead{
    color: #4a5860;
    word-spacing: 1px;
  }
  
  .btn-download {
    position: relative;
    padding: 8px 16px;
    color: #fff;
    text-align: center;
    background-color: #000;
    border-color: #bbb;
    border-radius: 8px!important;
  }
  .btn-download:hover {
    color: #fff;
    background-color: #333;
    border-color: #999;
  }
  
  .btn-download .icons-position-text {
    display: inline-block;
    padding-left: 64px;
    text-align: left;
  }
  
  .btn-download .icons-position {
    position: absolute;
    bottom: 15px;
  }
  
  .btn-download span {
    display: block;
    margin-bottom: 0;
    color: #fff!important;
  }
  
  small, .small {
    font-size: 14px;
    line-height: 24px;
  }
  
  .footer {
    font-size: 14px;
    line-height: 24px;
  }
  
  .footer .footer-title {
    font-size: 14px;
    color:  #f2f5f7;
  }
  
  .list-unstyled li, .list-inline li
  {
    font-weight: 400;
    color: #f2f5f7;
    /*color: #6f8691;*/
  }
  
  /*.list-inline li svg*/
  /*{*/
  /*  font-size: 2em;*/
  /*  margin-right:.3em;*/
  /*  color: #6f8691;*/
  /*}*/
  
  .copyright-text{
    font-size: 12px;
    color: #829ca9;
  }
  
  .footer-link {
    color: #fff;
    font-weight: 400;
  }
  .footer-link:hover {
    color: #829ca9;
    text-decoration: none;
  }
  
  .linky{
    font-weight: 600;
    color: #00b9ff;
    text-decoration: underline;
    letter-spacing: 0;
  }
  
  footer hr {
    opacity: .1;
    border-top: 1px solid #e2e6e8;
  }
  
  .home-map {
    min-height: 600px;
    position: relative;
    background-size: auto;
    /*background: url("../img/map.webp");*/
    margin: 0 auto;
    width:1000px;
  }

  .quoteMark:before, .quoteMark:after {
    content: '';
    background-repeat: no-repeat;
    background-position: 50% 50%;
    height: 20px;
    background-image: url('~@/assets/img/quoteMark.svg');
    display: block;
  }
</style>
