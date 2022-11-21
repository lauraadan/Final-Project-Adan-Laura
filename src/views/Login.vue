<template>

  <section>

    <div class="container">

      <form @submit.prevent="signIn" class="form">

        <div class="infoRegister">
          <img src="/img/logo-todo.png" alt="logo Todo" class="floating imgLogo">
          <h1 class="title">Sign In</h1>
        </div>

        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input v-model="email" class="input email" type="email" placeholder="Write your email" required>
          </p>
        </div>

        <div class="field">
          <p class="control has-icons-left">
            <input v-model="password" class="input password" type="password" placeholder="Write your password" required>
          </p>
        </div>

        <div class="field">
          <p class="control">
            <button class="button" type="submit">Sign In</button>
          </p>
        </div>

        <div>
          <label>You don't have an account?
            <router-link :to="{ name: 'register' }" class="bttnRegister">Sign Up</router-link>
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

import { ref } from 'vue'
import { useAuthUser } from '../store/auth'
import { useRouter } from 'vue-router'
import { login } from '../api/index'

const router = useRouter();
const authUser = useAuthUser();
const email = ref('');
const password = ref('');
const logged = ref(authUser.isAuth);

const signIn = (async () => {
  try {
    const resultado = await login(email.value, password.value);
    if (resultado.data.user != 'null') {
      logged.value = true;
      authUser.login(resultado.data.user.id, email, password);
      router.push({ name: 'task' })
    }
  }
  catch (error) {
    console.log(error);
    swal("ERROR", "Wrong email or password.", "error");
    router.push({
      name: 'login'
    });
  };
});

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
  height: 100vh;
  padding: 80px 0px;
}

.container {
  background-color: rgb(56 63 86);
  box-shadow: rgb(0 0 0 / 62%) 0px 0px 30px, rgb(106 106 106 / 61%) 0px -12px 30px, rgb(0 0 0 / 10%) 0px 4px 6px, rgb(0 0 0 / 53%) 0px 12px 13px, rgb(87 87 87 / 0%) 0px -3px 5px;
  padding: 20px 100px 50px 100px;
  height: 100%;
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

.bttnRegister {
  color: rgb(75, 173, 173);
}

.bttnRegister:hover {
  color: #A1CDA8;
}

.bttnHome {
  margin-top: 50px;
  text-decoration: underline;
  width: 120px;
}


.home {
  color: rgb(81, 189, 189);
}

.home:hover {
  color: rgb(172, 189, 189);
}

.button {
  background-color: #A1CDA8;
  border-color: transparent;
  margin: 20px 0px;
  font-weight: bold;
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