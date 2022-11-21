<template>
    <div class="section">
        <div class="container">
            <form @submit.prevent="onSubmit">
                <div class="field">
                    <div class="control is-large">
                        <input class="input is-large" v-model="tareaUsuario.title" type="text"
                            placeholder="Write a title..." required>
                    </div>
                </div>
                <div class="field">
                    <div class="control is-large">
                        <input class="input is-large" v-model="tareaUsuario.description" type="text"
                            placeholder="Write a description..." required>
                    </div>
                </div>
                <div class="control">
                    <button type="submit" class="mt-2 button bttn">Publish</button>
                </div>
            </form>
        </div>
    </div>
</template>


<script setup>

import { useAuthUser } from '../store/auth';
import { ref } from 'vue';
import { useTaskStore } from '../store/task';
import { newTask, getTasks } from '../api'

const authUser = useAuthUser();
const useTask = useTaskStore();
const tareaUsuario = ref({
    title: "",
    description: "",
})

const onSubmit = (async () => {
    const nuevaTarea = await newTask(authUser.user.id, tareaUsuario.value.title, tareaUsuario.value.description)
    console.log(nuevaTarea)
    if (nuevaTarea.error) {
        alert("No se ha podido guardar la tarea")
    } else { 
        const tasks = await getTasks();
        useTask.setTask(tasks.data)
    }
});

</script>


<style scoped>
body {
    font-family: 'Arbutus Slab', serif;
    padding: 30px 50px 50px 50px;
}


.bttn {
    border: 1px solid;
    color: #438990;
}

.bttn::before,
.btn::after {
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background-color: #fff;
    transform: skewX(50deg);
    transition: 0.4s linear;
}

.bttn::before {
    top: -4px;
    left: 10%;
}

.bttn::after {
    top: 52px;
    right: 10%;
}

.bttn:hover::before {
    left: 80%;
}

.bttn:hover::after {
    right: 80%;
}

.input,
.select select,
.textarea {
    border: 1px solid #438990;
}
</style>