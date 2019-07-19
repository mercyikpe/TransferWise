<template>
  <section>
    <div class="container">
      <h1 class="customer-support-title py-3">Global support in a range of languages<span class="colored-dot">.</span> </h1>
      <div class="row">
        <div class="col-md-4">
          <div class="intro">
            <img src="@/assets/img/register.svg">
            <h5>1. Register for free.</h5>
            <p>Sign up online or in our app for free. All you need is an email address, or a Google or Facebook account.</p>
          </div>
        </div>
      
        <div class="col-md-4">
          <div class="intro">
            <img src="@/assets/img/choose.svg">
            <h5>2. Choose an amount to send.</h5>
            <p>Tell us how much you want to send. We’ll show you our fees upfront, and tell you when your money should arrive.</p>
          </div>
        </div>
      
        <div class="col-md-4">
          <div class="intro">
            <img src="@/assets/img/add.svg">
            <h5>3. Add recipient’s bank details.</h5>
            <p>Fill in the details of your recipient’s bank account. If you don’t know their details, we can request them for you.</p>
          </div>
        </div>
      
        <div class="col-md-4">
          <div class="intro">
            <img src="@/assets/img/verify.svg">
            <h5>4. Verify your identity.</h5>
            <p>For some currencies, or for large transfers, we need a photo of your ID. This helps us keep your money safe.</p>
          </div>
        </div>
      
        <div class="col-md-4">
          <div class="intro">
            <img src="@/assets/img/pay.svg">
            <h5>5. Pay for your transfer.</h5>
            <p>Send your money with a bank transfer, or a debit or credit card</p>
          </div>
        </div>
      
      
        <div class="col-md-4">
          <div class="intro">
            <img src="@/assets/img/that.svg">
            <h5>6. That’s it.</h5>
            <p>We’ll handle the rest. You can track your transfer in your account, and we'll tell your recipient it's coming.</p>
          </div>
      
        </div>
    
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'SendMoney',
  }
</script>

<style scoped>
  section {
    background: #eee url('~@/assets/img/HowToSendMoneyBg.svg') no-repeat top center;
    background-size: cover;
    padding: 80px 0;
  }
  p {
    text-align: center;
  }

  h5 {
    text-align: center;
    color: #2e4369;
    font-weight: 800;
  }

  .intro {
    box-shadow: 0 0 30px 0 rgba(226, 230, 232, 0.3);
    background-color: #fff;
    transition: 0.4s ease-out;
    position: relative;
    left: 0;
    margin: 10px;
    padding: 24px;
    border: none;
    min-height: 380px;
    width: 100%;
  }

  .customer-support-title {
    font-weight: 800;
    color: #2e4369;
    font-size: 42px;
  }
  .colored-dot {
    color: #00b9ff;
  }
</style>
