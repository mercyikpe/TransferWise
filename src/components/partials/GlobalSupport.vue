<template>
  <section id="customer-support-section" class="py-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-xs-12 col-md-6 text-xs-center text-md-left">
          <h1 class="customer-support-title">Global support in a range of languages<span class="colored-dot">.</span> </h1>
          <p class="mt-3">We don’t do complicated, automated systems. We have offices around the world, full of people ready to help you. Whenever you need it.</p>
          <!--        <a href="/community/mission-and-philosophy" target="_blank" rel="noopener noreferrer" class="btn btn-default btn-block hidden-md hidden-lg hidden-xl" role="button">Find out more</a>-->
<!--          <ul class="text-xs-left mt-3 list-unstyled">-->
<!--            <li class="buildOption"><span class="mr-2 colored-dot">1.</span>Be radically transparent</li>-->
<!--            <li class="buildOption py-2"><span class="mr-2 colored-dot">2.</span>Charge as little as possible</li>-->
<!--            <li class="buildOption"><span class="mr-2 colored-dot">3.</span>Make premium the new normal</li>-->
<!--          </ul>-->
          <a href="#" target="_blank" rel="noopener noreferrer" class="btn btn-outline hidden-xs hidden-sm btn-lg mt-4" role="button">Find out more</a>
        </div>
  
        <div class="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-1">
          <div class="images">
            <span class="circle"></span>
            <img src="@/assets/img/customer.jpg" class="customer-support" alt="customer support">
            <img src="@/assets/img/city.jpg" class="city col-offset-5" alt="home town">
          </div>
        </div>
      
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'GlobalSupport'
  }
</script>

<style scoped>
  .colored-dot {
    color: #00b9ff;
    background: #ffffff;
  }
  section {
    background-color: transparent;
    color: #5d7079;
  }
  
  .btn-outline {
    color: #00b9ff;
    border-color: #00b9ff;
    font-weight: 400;
    /*letter-spacing: 0.05em;*/
  }
  .btn-outline:hover,
  .btn-outline:active,
  .btn-outline:focus,
  .btn-outline.active {
    background: #00b9ff;
    color: #ffffff;
    border-color: #00b9ff;
  }

  #customer-support-section .images .customer-support {
    width: 80%;
    max-width: 480px;
    position: relative;
    z-index: 1;
  }

  #customer-support-section .images .city {
    width: 60%;
    max-width: 390px;
    margin-top: -15%;
    position: relative;
    margin-left: 40%;
    z-index: 2;
  }
  #customer-support-section .images .circle {
    position: absolute;
    border-radius: 50%;
    background: #ffa600;
    left: 28%;
    bottom: 13%;
    width: 159px;
    height: 159px;
  }

  .colored-dot {
    color: #00b9ff;
  }
  
  .customer-support-title {
    font-weight: 800;
    color: #2e4369;
  }
</style>
