<template>
  <section class="bg-default py-4">
    <div class="container">
      <div class="row py-5">
        <div class="col-12 text-center">
          <h2 class="get_app">Get the app</h2>
          <p class="get_app_lead">Track your transfers on the go, or make new ones in a couple of taps.</p>
          
          <div class="">
            <a href="#" class="btn btn-download mr-3 mt-4">
              <img src="@/assets/img/apple.svg" alt="Apple Logo" class="icons-position">
              <div class="icons-position-text">
                <span class="small font-weight-bold">Download on the</span>
                <span class="h2 font-weight-bold">App Store</span>
              </div>
            </a>
            
            <a href="#" class="btn btn-download mt-4">
              <img src="@/assets/img/playstore.svg" alt="GooglePlayStore Logo" class="icons-position">
              <div class="icons-position-text">
                <span class="small font-weight-bold">Get it on</span>
                <span class="h2 font-weight-bold">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'GetTheApp'
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
  
  
  footer hr {
    opacity: .1;
    border-top: 1px solid #e2e6e8;
  }
  
</style>
