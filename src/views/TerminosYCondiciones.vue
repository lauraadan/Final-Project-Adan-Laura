<template>

  <section>

    <div class="container">

      <div class="infoTerms">
        <img src="/img/logo-todo.png" alt="logo Todo" class="floating imgLogo">
        <h1 class="title">Terms and Conditions</h1>
      </div>

      <div class="termsConditions">
        <h4>Updated October 24, 2022</h4>
        <br>
        <br>
        <p><span>1. Introduction</span>
          <br>
          <br>
          Applicable conditions. Thank you for using Tu-Du App. This application is a service provided by Google LLC
          ("Google", "we" or "us"), located at 1600 Amphitheater Parkway, Mountain View California 94043, USA.
          Your use of Google Play and applications (including Tu-Du App), games, movies,
          music, books, magazines and other digital content or services (referred to as "Content") available is subject
          to
          these Google Play Terms of Service and the Google Terms of Service ("Google Terms of Service")
          (collectively, the "Terms"). Google Play is a "Service" as described in the Google Terms of Service.
          In the event of a conflict between the Google Play Terms of Service and the Google Terms of Service, the Terms
          of Service shall govern.
          Google Play Terms of Service.
          <br>
          <br>
          <span>2. Tu-du Use</span>
          <br>
          <br>
          Access to Content and its use. You can use Tu-Du App to organize your tasks without profit.
          To use Tu-Du App, you will need a Device that meets the compatibility and system requirements of the
          applicable Content,
          that you have a working internet connection and have compatible software. Availability of Content and features
          will vary
          depending on the country and not all Content or features may be available in your country. In addition, some
          of the Content may be available
          to share with members of your family group. Content may be offered by Google or certain Content may be made
          available through third parties that
          are not affiliated with Google. In this case, Google will not be responsible or liable for any Content
          available on Tu-Du App that does not
          come from Google.
          Age restrictions. To use Tu-Du App, you will need to have a valid email account,
          You will be subject to the following age restrictions. If you are considered a minor in your country, you must
          have
          permission from your parent or legal guardian to use Tu-Du App and accept the Terms. You will need to meet any
          additional age restrictions
          that may apply to the use of specific features or Content of Tu-Du App. Administrators and family members must
          also
          meet these additional requirements.
          Third Party Fees. You will be responsible for any access or data fees incurred through third parties
          (such as your Internet provider or mobile phone provider) in connection with your use and viewing of the
          Content and Tu-Du App..
        </p>
      </div>

      <div class="bttnRegister">
        <router-link :to="{ name: 'register' }" class="register">Back to Sign Up</router-link>
      </div>

    </div>
  </section>


</template>



<script setup>


</script>


<style scoped>
.imgLogo {
  width: 10%;
  margin-bottom: 70px;
}

section {
  background-image: url(/img/background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: auto;
  padding: 80px 0px;
}

.container {
  background-color: rgb(56 63 86);
  box-shadow: rgb(0 0 0 / 62%) 0px 0px 30px, rgb(106 106 106 / 61%) 0px -12px 30px, rgb(0 0 0 / 10%) 0px 4px 6px, rgb(0 0 0 / 53%) 0px 12px 13px, rgb(87 87 87 / 0%) 0px -3px 5px;
  padding: 20px 50px 50px 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.infoTerms {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

p {
  color: azure;
}

h4 {
  font-size: 14px;
  font-style: italic;
  color: rgb(167, 167, 167);
}

.title {
  color: azure;
  font-weight: normal;
  font-size: 2.2em;
}

span {
  color: azure;
  margin-left: 10px;
  text-transform: uppercase;
  text-decoration: underline;
}


.bttnRegister {
  margin-top: 50px;
  width: 100%;
  text-decoration: underline;
}


.register {
  color: rgb(60, 156, 156);
}

.register:hover {
  color: rgb(188, 219, 219);
}

.button {
  background-color: #A1CDA8;
  border-color: transparent;
  margin: 20px 0px;
  font-weight: bold;
}

@media only screen and (max-width: 1200px) {
  .container {
    margin: 0px 40px;
    padding: 20px 40px 50px 40px;
  }
}

@media only screen and (max-width: 860px) {
  .container {
    margin: 0px 30px;
    padding: 20px 35px 50px 35px;
  }
}

@media only screen and (max-width: 480px) {
  section {
    height: 100%;
    padding: 0px 0px;
  }

  .title {
    font-size: 1.8em;
  }

  .container {
    padding: 20px 30px 50px 30px;
    margin: 0px 20px;
  }
}

@media only screen and (max-width: 375px) {
  .container {
    padding: 20px 20px 50px 20px;
    margin: 0px 15px;
  }
}
</style>