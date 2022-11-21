<template>

    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <img src="/img/logo-todo.png" class="navbar-item">
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong @click="logOut">Sign Off</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>

<script setup>
import { useAuthUser } from '../store/auth';
import { useRouter } from 'vue-router'
const router = useRouter();
const authUser = useAuthUser();

const logOut = (() => {
    swal({
        title: "Are you sure you want to sign out?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then(async (willDelete) => {
            if (willDelete) {
                await authUser.logout();
                router.push({
                    name: 'welcome'
                });
            }
            else {
                router.push({
                    name: 'task'
                });
            }
        });
});


</script>

<style scoped>
.navbar-item {
    max-height: 4.75rem;
}

nav {
    border-bottom: 1px solid #2cb0c057;
    ;
    padding: 20px 30px 15px 30px;
}

.navbar-menu {
    display: block;
}

@media screen and (max-width: 1024px) {
    .navbar {
        display: flex;
        justify-content: space-between;
    }

    .navbar-menu {
        box-shadow: none;
    }
}

@media screen and (max-width: 480px) {
    .navbar {
        flex-direction: column;
    }
}
</style>