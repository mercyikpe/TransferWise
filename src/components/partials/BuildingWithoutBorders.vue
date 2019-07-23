<template>
  <section id="building" class="">
    <div class="container py-5">
      <div class="row">
        <div class="col-xs-12 col-md-4 text-part">
          <h2 class="building-title">We’re building money without borders<span class="colored-dot">.</span> </h2>
          <p class="mt-3 building-text">The world’s banking systems weren’t designed for people without borders. That’s why we’re building a new one.</p>
          
          <a href="#" class="btn btn-outline btn-block d-xl-none d-md-none d-lg-none mt-4" role="button">Find out more</a>
          
          <ul class="text-xs-left mt-3 list-unstyled">
            <li class="buildOption"><span class="mr-2 colored-dot">1.</span>Be radically transparent</li>
            <li class="buildOption py-2"><span class="mr-2 colored-dot">2.</span>Charge as little as possible</li>
            <li class="buildOption"><span class="mr-2 colored-dot">3.</span>Make premium the new normal</li>
          </ul>
          <a href="#" class="btn btn-outline d-sm-none d-none d-md-block btn-lg mt-4">Find out more</a>
        
        </div>
        
        <div class="col-xs-12 col-md-8 text-center images-part">
          <img src="@/assets/img/hugs.jpg" alt="" class="mb-3" style="width:50%">
          <div class="row text-left">
            <div class="col-8 offset-4 highlight-part" >
              <span class="h4 text-left ">
              For <span class="highlight-text">
              bye bye bad exchange rates
            </span> people.</span>
            </div>
          </div>
        </div>
  
        
        
      </div>
      </div>
  </section>
</template>

<script>
  export default {
    name: 'BuildingWithoutBorders'
  }
</script>

<style scoped>
  section {
    background-color: #2e4369;
    color: #fff;
  }
  
  .building-title {
    font-weight: 800;
  }
  .colored-dot {
    color: #00b9ff;
  }
    
    .buildOption {
      color: #fff;
      font-weight: bold;
    }
    
  .btn-outline {
    color: #00b9ff;
    border-color: #00b9ff;
    font-weight: 400;
  }
  
  .btn-outline:hover,
  .btn-outline:active,
  .btn-outline:focus,
  .btn-outline.active {
    background: #00b9ff;
    color: #ffffff;
    border-color: #00b9ff;
  }

  .highlight-text {
    color: #2ed06e;
  }
  
   /*Extra small devices (portrait phones, less than 576px)*/
  @media (max-width: 575px) {
    section {
      color: #2e4369;
      background: #fff;
    }
    
    .buildOption {
      color: #2e4369;
      font-weight: bold;
    }
    
    .text-part {
      padding: 20px 0;
      margin: 0 20px;
    }
    .building-title {
      text-align: center;
    }
  
    .building-text {
      text-align: justify;
    }
  
    .btn-outline {
      color: #00b9ff;
      border-color: #00b9ff;
      background: #fff;
      font-weight: 400;
    }
  
  }

   /*Small devices (landscape phones, 576px and up)*/
  @media (min-width: 576px) and (max-width: 767px) {  }

   /*Medium devices (tablets, 768px and up)*/
  @media (min-width: 768px) and (max-width: 991px) {
    .text-part {
      padding: 5px 0;
    }
    
    .highlight-part {
      padding-right: 30px;
    }
  }

   /*Large devices (desktops, 992px and up)*/
  @media (min-width: 992px) and (max-width: 1199px) {  }

   /*Extra large devices (large desktops, 1200px and up)*/
  @media (min-width: 1200px) {  }
  
</style>
