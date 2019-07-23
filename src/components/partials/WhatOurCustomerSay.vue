<template>
<section class="WhatOurCustomerSay d-none d-md-block d-lg-block d-xl-block">
  <div class="vedio-testimonials">
    <video class="vedio-m" autoplay="true" loop :src="imagesrc">
      <!-- <source >    -->
    </video>
    <div class="vedio-close" v-if="playing">
      <button class="close-button" @click.prevent="stop"></button>
    </div>
    <div class="vedio-content" v-else>
      <h2 class="vedio-text">What our customers say</h2>
      <button class="play-button" @click.prevent="play"></button>
    </div>
  </div>
</section>
</template>

<script>
  export default {
    name: 'WhatOurCustomerSay',
    data() {
      return{
        imagesrc: 'https://res.cloudinary.com/psirius-eem/video/upload/v1563534620/testimonialmute.mp4',
        played: false
      }
    },
    
    computed: {
      playing() {
        return this.played === true;
      }
    },
    
    methods: {
      play() {
        this.played = true;
        this.imagesrc = 'https://res.cloudinary.com/psirius-eem/video/upload/v1563539550/testimonialplay.mp4';
        console.log(this.imagesrc);
      },
      stop() {
        this.played = false;
        this.imagesrc = 'https://res.cloudinary.com/psirius-eem/video/upload/v1563534620/testimonialmute.mp4';
        console.log(this.imagesrc);
      }
    }
  }
</script>

<style scoped>
  .vedio-testimonials{
    max-height: 480px;
    position: relative;
    overflow: hidden;
    width:100%;
  }
  
  .vedio-m{
    display: block;
    width: 100%;
    height: auto;
  }
  
  .play-button{
    width: 100px;
    height: 100px;
    outline: none;
    border:none;
    background: url('https://res.cloudinary.com/psirius-eem/image/upload/v1563534761/vedio_play_button.png');
  }
  
  .vedio-content{
    position: absolute;
    top: 35%;
    width: 100%;
    text-align:center;
  }
  
  .vedio-text{
    font-family: averta,avenir w02,avenir,Helvetica,Arial,sans-serif;
    color:#fff;
    font-size: 42px;
    line-height: 48px;
    font-weight: 800;
  }
  
  .vedio-close{
    position: absolute;
    top:1px;
    width: 100%;
    text-align:right;
    /* display:none; */
  }
  
  .close-button{
    width: 20px;
    height: 20px;
    outline: none;
    margin-right:20px;
    border:none;
    background: url('https://res.cloudinary.com/psirius-eem/image/upload/v1563539480/icons8-multiply-24.png');
  }

</style>
