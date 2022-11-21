<template>

  <section>

    <div class="container">

      <form @submit.prevent="signUp" class="form">

        <div class="infoRegister">
          <img src="/img/logo-todo.png" alt="logo Todo" class="floating imgLogo">
          <h1 class="title">Create your account</h1>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input v-model="email" class="input email" type="email" placeholder="Write your email..." id="email"
              required>
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <p class="control has-icons-left">
            <input v-model="password" class="input password" type="password" placeholder="Write a password..."
              id="password" required>
          </p>
        </div>

        <div class="field">
          <label class="label">Confirm your password</label>
          <p class="control has-icons-left">
            <input v-model="confirmPassword" class="input" type="password" placeholder="Confirm your password"
              id="confirmPassword" required>
          </p>
        </div>

        <div class="field">
          <div class="control">
            <input type="checkbox" required v-model="checkbok" class="inputCheckbox">
            <span>I accept </span>
            <router-link :to="{ name: 'terms' }" class="checkbox">the terms and conditions</router-link>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button" type="submit">Create your account</button>
          </div>
        </div>

        <div>
          <label> Do you have an account?
            <router-link :to="{ name: 'login' }" class="bttnSignIn">Sign In!</router-link>
          </label>
        </div>

        <div class="bttnHome">
          <router-link :to="{ name: 'welcome' }" class="home">Back Home</router-link>
        </div>

      </form>
    </div>
  </section>


</template>
  
  
<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { registro } from '../api/index'
import swal from 'sweetalert';


const router = useRouter();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const checkbox = ref('false');

const signUp = (e) => {
  let validateForm = 0;

  const emailAuth = email.value;
  const emailValid = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
  if (!emailValid.test(emailAuth)) {
    swal("ATENCIÓN", "Wrong email or password.", "warning");
    validateForm++;
  }

  const pass = password.value;
  const passVal = confirmPassword.value;
  let spaces = false;
  let cont = 0;

  if (pass.includes(" ")) {
    swal("ATENCIÓN", "Password cannot have blank spaces", "warning");
    validateForm++;
  }

  if (pass != passVal) {
    swal("ATENCIÓN", "Passwords don't match", "warning");
    validateForm++;
  }

  if (checkbox.value == false) {
    swal("ERROR", "You must agree to terms and conditions", "error");
    validateForm++;
  }

  if (validateForm == 0) {
    e.preventDefault()
    registro(email.value, password.value)
    swal("Congratulations!", "You have successfully registered", "success");
    router.push({ name: 'login' })
  }
}


</script>
  
  
<style scoped>
.imgLogo {
  width: 15%;
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
  padding: 20px 100px 50px 100px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.infoRegister {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

.title {
  color: azure;
  font-weight: normal;
  font-size: 2.2em;
}

label {
  color: azure;
}

span {
  color: azure;
  margin-left: 10px;

}

.bttnSignIn {
  color: rgb(75, 173, 173);
}

.bttnSignIn:hover {
  color: #A1CDA8;
}

.checkbox:hover {
  color: #A1CDA8;
}

.checkbox {
  color: rgb(75, 173, 173);
}

.button:hover {
  color: rgb(31, 31, 95);
}

.button {
  background-color: #A1CDA8;
  border-color: transparent;
  margin: 10px 0px;
  font-weight: bold;
}

.home {
  color: rgb(104, 169, 169);
}

.home:hover {
  color: rgb(219, 234, 234);
}

.bttnHome {
  margin-top: 30px;
  text-decoration: underline;
  width: 120px;
}

.button:hover {
  background-color: #5e7362;
  color: #dbf0df;
}

@media only screen and (max-width: 860px) {
  .container {
    margin: 0px 30px;
  }
}


@media only screen and (max-width: 480px) {
  .title {
    font-size: 1.8em;
  }

  .container {
    padding: 20px 50px 50px 50px;
    margin: 0px 20px;
  }

}

@media only screen and (max-width: 375px) {
  .title {
    font-size: 1.4em;
    text-align: center;
  }

  .container {
    padding: 20px 30px 50px 30px;
    margin: 0px 15px;
  }
}
</style>