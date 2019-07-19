<template>
  <header>
    <div class="nav-header">
      <div id="app" class="container">
        <nav class="navbar navbar-expand-lg">
          <router-link class="navbar-brand" to="/">TransferWise</router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNavDropdown" class="navbar-collapse collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <router-link class="nav-link" to="/sendMoney">Send Money<i class="caret visible-xl-inline-block text-white"></i></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/receiveMoney">Receive Money<i class="caret visible-xl-inline-block text-white"></i></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/debitCard">Debit Card<i class="caret visible-xl-inline-block text-white"></i></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/debitCard">Business<i class="caret visible-xl-inline-block text-white"></i></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/debitCard">About<i class="caret visible-xl-inline-block text-white"></i></router-link>
              </li>

              <form class="form-inline mt-2 mt-md-0">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                  </li>
                </ul>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Sign up</button>
              </form>
            </ul>

          </div>

        </nav>
      </div>
    </div>

    <div class="nav-header2">
      <div id="app" class="container">
        <nav class="navbar navbar-expand-lg">
          <router-link class="navbar-brand" to="/currency-converter">Currency Converter</router-link>

          <div id="navbarNavDropdown" class="navbar-collapse collapse">

            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link class="nav-link" to="/">Browse all currencies</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/">Get rate alerts</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/">Compare bank rates</router-link>
              </li>

            </ul>

          </div>

        </nav>
      </div>
    </div>

  </header>
</template>

<script>
  export default {
    name: 'AltHeader'
  }
</script>

<style scoped>
  .nav-header {
    background: #37517d;
  }

  .nav-header2 {
    background: #2e4369;
  }

  @media (max-width: 992px) {
    .navbar-collapse {
      position: absolute;
      top: 54px;
      right: 100%;
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 15px;
      width: 100%;
      transition: all 0.3s ease;
      display: block;
    }
    .navbar-collapse.collapsing {
      height: auto !important;
      margin-right: 50%;
      transition: all 0.3s ease;
      display: block;
    }
    .navbar-collapse.show {
      right: 0;
    }
  }
  .nav-item {
    margin-right: 20px;
  }

  .nav-link {
    color: #ffffff;
  }


  .nav-header2 .nav-link:hover {
    color: #00b9ff;
  }
  i {
    border: solid #fff;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    margin-left: 5px;
    margin-bottom: 2px;
  }

  .caret {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

</style>
