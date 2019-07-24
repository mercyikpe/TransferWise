<template>
  <section id="map" class="pt-5">
    <div class="container py-5">
      <div class="row d-flex justify-content-center">
        
          <div class="col-6 py-3 d-none d-md-block d-lg-block d-xl-block">
            <h2 class="get_app_one text-white text-center">Trusted all over the World<span class="colored-dot">.</span></h2>
            <p>We move over £4 billion every month, and save people and businesses £4 million in hidden fees every day.</p>
          </div>
        
          <div class="col-10 py-3 d-md-none d-lg-none d-xl-none">
            <h3 class="get_app_one text-white">Trusted all over the World<span class="colored-dot">.</span></h3>
            <p>We move over £4 billion every month, and save people and businesses £4 million in hidden fees every day.</p>
          </div>
          
          <div class="d-none d-md-block d-lg-block d-xl-block">
          <dl class="row company-statistics hidden-xs pt-4">
            <div class="col-md-6 col-lg-3 tw-statistics-element">
              <dt class="h1 mb-0">12 offices</dt>
              <dd class="h6">around the world</dd>
            </div>
            <div class="col-md-6 col-lg-3 tw-statistics-element">
              <dt class="h1 mb-0">£4 billion</dt>
              <dd class="h6">sent every month</dd>
            </div>
            <div class="col-md-6 col-lg-3 tw-statistics-element">
              <dt class="h1 mb-0">5 million</dt>
              <dd class="h5">customers</dd>
            </div>
            <div class="col-md-6 col-lg-3 tw-statistics-element">
              <dt class="h1 mb-0">£1 billion</dt>
              <dd class="h5">saved by customers every year</dd>
            </div>
          </dl>
          </div>
        </div>
      
        <div class="home-map">
          <div class="tw-animated-map__map">
            <div class="tw-transfer-map-illustration">

            </div>
          </div>
        </div>
  
      <div class="d-md-none d-lg-none d-xl-none">
      <dl class="row company-statistics pt-4 text-center">
        <div class="col-md-6 col-lg-3 tw-statistics-element">
          <dt class="h4 m-b-0">12 offices</dt>
          <dd class="h6">around the world</dd>
        </div>
        
        <div class="col-md-6 col-lg-3 tw-statistics-element my-3">
          <dt class="h4 m-b-0">£4 billion</dt>
          <dd class="h6">sent every month</dd>
        </div>
        
        <div class="col-md-6 col-lg-3 tw-statistics-element">
          <dt class="h4 m-b-0">5 million</dt>
          <dd class="h6">customers</dd>
        </div>
        
        <div class="col-md-6 col-lg-3 tw-statistics-element mt-3">
          <dt class="h4 m-b-0">£1 billion</dt>
          <dd class="h6">saved by customers every year</dd>
        </div>
      </dl>
      
      <hr>
      </div>
      
      
      <footer class="mt-4 popular-routes">
        <p class="col-lg-10 col-lg-offset-1 mb-4">We’re available in 59 countries, and we add new currencies all the time. If you think we should add a specific currency, let us know. Be the first to know when we add more by
          <a href="#">signing up to our mailing list</a>.
        </p>
        
        <div class="flags-section pt-4">
          <ul class="row list-unstyled m-b-0">
            <li class="col-sm-6 col-md-4 col-xl-3 mb-3"><a class="btn flag-container pl-3 py-2" href="#"><i class="currency-flag currency-flag-gbp hidden-xs"></i><span class="ml-3 flag-title">Europe</span></a></li>
            <li class="col-sm-6 col-md-4 col-xl-3 mb-3"><a class="btn flag-container pl-3 py-2" href="#"><i class="currency-flag currency-flag-gbp hidden-xs"></i><span class="ml-3 flag-title">United Kingdom</span></a></li>
            <li class="col-sm-6 col-md-4 col-xl-3 mb-3"><a class="btn flag-container pl-3 py-2" href="#"><i class="currency-flag currency-flag-gbp hidden-xs"></i><span class="ml-3 flag-title">India</span></a></li>
            <li class="col-sm-6 col-md-4 col-xl-3 mb-3"><a class="btn flag-container pl-3 py-2" href="#"><i class="currency-flag currency-flag-gbp hidden-xs"></i><span class="ml-3 flag-title">United States</span></a></li>
            <li class="col-sm-6 col-md-4 col-xl-3 mb-3 d-none d-md-block d-lg-block d-xl-block"><a class="btn flag-container pl-3 py-2" href="#"><i class="currency-flag currency-flag-gbp hidden-xs"></i><span class="ml-3 flag-title">Brazil</span></a></li>
            <li class="col-sm-6 col-md-4 col-xl-3 mb-3 d-none d-md-block d-lg-block d-xl-block"><a class="btn flag-container pl-3 py-2" href="#"><i class="currency-flag currency-flag-gbp hidden-xs"></i><span class="ml-3 flag-title">Australia</span></a></li>
            <li class="col-sm-6 col-md-4 col-xl-3 mb-3 d-none d-md-none d-lg-block d-xl-block"><a class="btn flag-container pl-3 py-2" href="#"><i class="currency-flag currency-flag-gbp hidden-xs"></i><span class="ml-3 flag-title">Canada</span></a></li>
            <li class="col-sm-6 col-md-4 col-xl-3 mb-3 d-none d-md-none d-lg-block d-xl-block"><a class="btn flag-container pl-3 py-2" href="#"><i class="currency-flag currency-flag-gbp hidden-xs"></i><span class="ml-3 flag-title">Thailand</span></a></li>
          </ul>
        </div>
        <div class="text-center routes-button">
          <button class="btn btn-outline btn-lg mt-4" type="button" data-tracking-id="routes">See all routes we cover</button>
        </div>
      </footer>
      
      </div>
  
    <hr class="">
    
  </section>
</template>

<script>
  export default {
    name: 'Map'
  }
</script>

<style scoped>
  
  section {
    font-family: 'Cabin', sans-serif;
    color: #fff;
    background: #2e4369;
    /*background-image: url('~@/assets/img/MapBg.svg');*/
    background-size: cover;
  }
  
  .get_app_one {
    font-weight: 800;
    color: #2e4369;
  }

  @media (max-width: 768px) {
    .btn {
      width:100%;
    }
  }

 
  
  .btn-download span {
    display: block;
    margin-bottom: 0;
    color: #fff!important;
  }
  
  small {
    font-size: 14px;
    line-height: 24px;
  }
  

  
  .footer .footer-title {
    font-size: 14px;
    color: #2e4369;
  }
  
  .list-unstyled li, .list-inline li
  {
    font-weight: 400;
    color: #6f8691;
  }
  
  .list-inline li .fa
  {
    font-size: 2em;
    margin-right:.3em;
    color: #6f8691;
  }
  
  
  .home-map{
    min-height: 600px;
    position: relative;
    background-size: auto;
    margin: 0 auto;
    width:1000px;
  }

  .company-statistics .h1 {
    font-weight: 800;
    color: #fff;
  }
  
  .company-statistics .h5 {
    font-weight: 500;
    color: #fff;
  }
  .colored-dot {
    color: #00b9ff;
  }

  .flag-container {
    width: 100%;
    background-color: #37517e;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    position: relative;
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

  #map hr {
    opacity: .1;
    border-top: 1px solid #e2e6e8;
  }
  
  footer a {
    font-weight: 600;
    color: #00b9ff;
    text-decoration: underline;
  }
  
  footer a:hover, .flag-title:hover {
    color: #00a4df;
  }
</style>
