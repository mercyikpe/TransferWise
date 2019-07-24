<template>
  <header class="nav-header">
      <div id="app" class="container">
        <nav class="navbar navbar-expand-lg">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" v-on:click="handleclick">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">TransferWise</a>
          
          
          <div id="navbarNavDropdown" class="navbar-collapse collapse">
            
            <ul class="navbar-nav ml-auto">
              <li class="d-sm-none d-md-none d-xs-flex transfer">
                <img src="https://img.icons8.com/dusk/64/000000/x.png" class="svg">
                <p>Transfer Wise</p>
              </li>
              <li class="nav-item active">
                <a class="nav-link money-dropdown" href="#">Money transfer<span class="caret visible-xl-inline-block text-white"></span>
                 <div class="dropdown-content">
                 <div class="top">
                   <img class="drop-icon" src="https://daw291njkc3ao.cloudfront.net/conversion/navigation/send-money.svg"/>
                   <p class="drop-option">Send Money</p>
                   <p>Make a one-off payment. You'll get the real exchange rate with the low fee we're known for.</p>
                </div>
                <div class="bottom">
                    <p class="drop-option"><a href="#" id="drop-anchor">Send large amounts</a></p>
                    <p class="drop-option"><a href="#" id="drop-anchor">About TransferWise</a></p>
               </div>
             </div>
                </a>
              </li>
            
              <li class="nav-item">
                <a class="nav-link borderless-drop" href="#" v-if="!toggled"><span class="badge badge-success badge-pill">New</span>Borderless account
                <div class="borderless-dropdown-content">
                <div class="top">
                   <img class="drop-icon" src="https://daw291njkc3ao.cloudfront.net/conversion/navigation/borderless.svg"/>
                   <p class="drop-option">Borderless account</p>
                   <p>Receive money from 30+ countries. Send at the real exchange rate, and spend with a free Mastercard.</p>
                </div>
                <div class="bottom">
                    <p class="drop-option"><a href="#" id="drop-anchor">Pricing</a></p>
                    <p class="drop-option"><a href="#" id="drop-anchor">About TransferWise</a></p>
               </div>
             </div>
                </a>
                 <a class="nav-link" href="#" v-else>Borderless account<span class="badge badge-success badge-pill">New</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link business-drop" href="#">Business
                 <div class="business-dropdown-content">
                <div class="top">
                  <span v-on:click="closeClick" class="close"><img class="drop-icon" src="https://daw291njkc3ao.cloudfront.net/conversion/navigation/business.svg"/></span>
                   <p class="drop-option">TransferWise for Business</p>
                   <p>A free multi-currency account to send, spend, and receive in over 40 currencies.</p>
                </div>
                <div class="bottom">
                    <p class="drop-option"><a href="#" id="drop-anchor">Business pricing</a></p>
                    <p class="drop-option"><a href="#" id="drop-anchor">Freelancers</a></p>
                    <p class="drop-option"><a href="#" id="drop-anchor">E-commerce</a></p>
                    <p class="drop-option"><a href="#" id="drop-anchor">Enterprise</a></p>
               </div>
             </div>
                </a>
              </li>
            </ul>
            
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Help</a>
              </li>
              <li class="nav-item">
                <a class="nav-link en-drop" href="#">EN
                <div class="en-dropdown-content">
                <div class="top">
                   <h5 class="drop-option">{{languagechosen}}</h5>
                </div>
                <ul class="bottom">
                    <li class="drop-option"><a href="#" id="drop-anchor" @mouseover="changeLang">Deutsch</a></li>
                    <li class="drop-option active"><a href="#" id="drop-anchor" @mouseover="changeLang">English (UK)</a></li>
                    <li class="drop-option"><a href="#" id="drop-anchor" @mouseover="changeLang">English (US)</a></li>
                    <li class="drop-option"><a href="#" id="drop-anchor" @mouseover="changeLang">Español</a></li>
                    <li class="drop-option"><a href="#" id="drop-anchor" @mouseover="changeLang">Français</a></li>
                    <li class="drop-option"><a href="#" id="drop-anchor" @mouseover="changeLang">Italiano</a></li>
                    <li class="drop-option"><a href="#" id="drop-anchor" @mouseover="changeLang">Magyar</a></li>
                    <li class="drop-option"><a href="#" id="drop-anchor" @mouseover="changeLang">Polski</a></li>
                    <li class="drop-option"><a href="#" id="drop-anchor" @mouseover="changeLang">Português</a></li>
                    <li class="drop-option"><a href="#" id="drop-anchor" @mouseover="changeLang">Română</a></li>
                    <li class="drop-option"><a href="#" id="drop-anchor" @mouseover="changeLang">Русский</a></li>
                    <li class="drop-option"><a href="#" id="drop-anchor" @mouseover="changeLang">日本語</a></li>
               </ul>
             </div>
                </a>
              </li>
              
            </ul>
           
          </div>
          <div class="btn-reg">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Register</button>
          </div>
        </nav>
      </div>
    
  </header>
</template>

<script>
    export default {
        name: "topNavbar",
        data(){
           return {
         toggled:false,
         languagechosen: "English (UK)"
         }
        },
        methods: {
           handleclick(){
             let that = this;
             that.toggled = true;
          },
          
          closeClick () {
             let that = this;
            that.toggled = false;
          },
          
          changeLang(event){
            let that = this;
            that.languagechosen = event.target.innerHTML;
          }
        },
    }
</script>

<style scoped>

@import '../../assets/main.css';

  .btn {
    color: #00b9ff !important;
    border: 1px  #00b9ff solid !important;
  }
  .nav-header {
    background: #37517d;
    
  }

  .nav-header a {
    text-decoration: none !important;
    color:#fff !important;
    
  }
  
  .svg {
    margin-right: 10px;
    padding: 0px;
    height: 1.5em;
    cursor: pointer;
  }
  
  .close{
    cursor: pointer;
  }
  
  .transfer {
    font-size: 1.5em;
    font-family: cursive;
    color: white;
    display: flex;
    padding: 0 10px;
  }
  
  @media (max-width: 992px) {
  .navbar {
    display: flex !important;
    justify-content: flex-start !important;
    max-height: 50px !important;
  }
  
     .navbar-toggler-icon {
       font-size: 1.25em;
       font-weight: bold;
       z-index: 1 !important;
       background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(	0, 185, 255)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E")
      }
    
    .navbar-toggler {
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: #37517d;
    /*border: 1px solid #00b9ff;*/
    /*border-radius: .25rem;*/
      z-index: 1000;
      color: #00b9ff;
      background-color: transparent;
      margin-right: 10px;
    }
    
    .navbar-collapse {
      position: absolute;
      top: 0;
      z-index: 1000;
      height: 100vh;
      right: 100%;
      padding: 25px 0 40px;
      width: 100%;
      transition: all 0.3s ease;
      display: block;
      background-color:#37517d;
    }

   .navbar-nav .nav-link{
    padding-right: 0;
    padding-left: 0;
    text-align: left;
    /*border-top: 1px black solid;*/
    margin-left: 8px;
    }

   .btn-reg {
     display: none;
    color: #00b9ff !important;
    /*border-top: 1px black solid;*/
  }
   
    .navbar-collapse.collapsing {
      /*height: auto !important;*/
      margin-right: 50%;
      transition: all 0.3s ease;
      display: block;
    }
    .navbar-collapse.show {
      right: 0;
    }
  }
</style>
