<template>

    <section class="hero is-fullwidth">
    <div class="contenedor">
        <div class="has-text-centered contenedorHome">
            <img src="/img/logo-todo.png" alt="logo Todo" class="floating imgLogo">
            <h1 class="title">Welcome to Tu-Du App</h1>
            <h3 class="is-size-4">Tu-Du helps you focus, whether it's for work or play.</h3>
            <div class="buttons">
                <router-link :to="{name: 'login'}" class="button is-success">Sign In</router-link>
                <router-link :to="{name: 'register'}" class="button is-info">Sign Up</router-link>
            </div>
        </div>
    </div>
    </section> 

</template>



<style scoped>

section {
    background-image: url(/img/background.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
.contenedor{
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
}

.contenedorHome{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 150px;
}

.imgLogo{
    width: 50%;
    margin-bottom: 50px;
}

.title{
    color: azure;
    font-weight: bold;
    font-size: 4em;
}

.is-size-4{
    color: azure;
}

.buttons{
    margin-top: 50px;
    font-weight: bolder;
}

.button{
    color: rgb(31, 31, 95);
    border-width: 20px;
    font-size: 1.1em;
}

/* MEDIA QUERIES */
@media only screen and (max-width: 860px) {
.title { font-size: 2.4em;}
.is-size-4 {font-size: 18px !important }
}

@media only screen and (max-width: 480px) {
.title {
    font-size: 1.8em;
}
.is-size-4 {
    font-size: 18px !important;
 }
.buttons{
    flex-direction: column;
}
.contenedorHome{
    margin: 15px;
}
.button{
    font-size: 1em;
    margin-right: 0rem !important;
}
}

@media only screen and (max-width: 375px) {
.title {
    font-size: 1.5em;
}
.is-size-4 {
    font-size: 16px !important;
 }
.contenedorHome{
    margin: 30px;
}
.button{
    font-size: 0.8em;
}

}



</style>