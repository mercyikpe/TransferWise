<template>
  <section id="building" class="py-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-xs-12 col-md-6 text-xs-center text-md-left">
          <h2 class="">We’re building money without borders<span class="colored-dot">.</span> </h2>
          <p class="mt-3">The world’s banking systems weren’t designed for people without borders. That’s why we’re building a new one.</p>
          <!--        <a href="/community/mission-and-philosophy" target="_blank" rel="noopener noreferrer" class="btn btn-default btn-block hidden-md hidden-lg hidden-xl" role="button">Find out more</a>-->
          <ul class="text-xs-left mt-3 list-unstyled">
            <li class="buildOption"><span class="mr-2 colored-dot">1.</span>Be radically transparent</li>
            <li class="buildOption py-2"><span class="mr-2 colored-dot">2.</span>Charge as little as possible</li>
            <li class="buildOption"><span class="mr-2 colored-dot">3.</span>Make premium the new normal</li>
          </ul>
          <a href="#" target="_blank" rel="noopener noreferrer" class="btn btn-outline hidden-xs hidden-sm btn-lg mt-4" role="button">Find out more</a>
        </div>
        
        <div class="col-xs-12 col-md-6 col-md-offset-1">
          <img src="@/assets/img/hugs.jpg" alt="" class="mb-3" style="width:50%">
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
.colored-dot {
  color: #00b9ff;
}
  .buildOption {
    color: #fff;
    font-weight: bold;
  }
  section {
    background-color: #2e4369;
    color: #fff;
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

</style>
