<template>
    <div class="backgroundModal">
        <div class="md-content" id="formModal">
            <header class=" card-header-title">
                <div class="taskTittle control">
                    <input type="text" :placeholder="tarea.title" v-model="editarTarea.title" class="input"
                        style="width: 700px;">
                </div>

                <div class="bttnsTasks">
                    <button @click="closeModal()" class="button close-button"><i class="fa-solid fa-xmark"></i></button>
                    <button @click="editTask(props.tarea.id)" class="button confirm-button"><i
                            class="fa-solid fa-check"></i></button>
                </div>

            </header>

            <div class="card-content">
                <div class="content">
                    <div class="message-body control">
                        <input class="input" type="text" v-model="editarTarea.description"
                            :placeholder="tarea.description">
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

import { defineProps, ref } from 'vue'
import { getTasks, updateTask } from '../api'
import { useTaskStore } from '../store/task'

const props = defineProps(
    {
        tarea: Object,
    }

)
const editarTarea = ref({
    title: props.tarea.title,
    description: props.tarea.description,
})

const emit = defineEmits(["close"])
const useTask = useTaskStore();

const closeModal = () => {
    emit("close")
};

const editTask = (async (id) => {
    const modificarTarea = await updateTask(id, editarTarea.value)
    if (editarTarea.value.title == 'EMPTY') {
        editarTarea.value.title = props.tarea.title;
        const tasks = await getTasks();
        useTask.setTask(tasks.data)
        emit("close")
    }
    if (editarTarea.value.description == 'EMPTY') {
        editarTarea.value.description = props.tarea.description;
        const tasks = await getTasks();
        useTask.setTask(tasks.data)
        emit("close")
    }
    else {
        const tasks = await getTasks();
        useTask.setTask(tasks.data)
        emit("close")
    }
})

</script>

<style scoped>
.backgroundModal {
    height: 100vh;
    width: 100vw;
    background-color: rgb(0 0 0 / 69%);
    backdrop-filter: blur(1px);
    filter: blur(1);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}

.md-content {
    width: 100%;
    padding: 0px 150px;
}

.card-header-title {
    background: #438990;
    width: 100%;
}

.card-content {
    background-color: #C5E7E2;
}

.message-body {
    border-color: #627264;
}

.bttnsTasks {
    display: flex;
    width: 100%;
    justify-content: flex-end;
}

.bttnsTasks button {
    margin-right: 7px;
}

.button {
    font-size: 1.2rem !important;
}

@media only screen and (max-width: 1200px) {
    .card-header-title {
        flex-wrap: wrap;
        padding: 1.3rem 1rem;
    }

    .bttnsTasks {
        justify-content: flex-start;
        margin-top: 15px;
    }

    .control {
        width: 100%;
    }

    .taskTittle input {
        width: 100% !important;
    }

    .md-content {
        padding: 0px 80px;
    }
}

@media only screen and (max-width: 860px) {
    .md-content {
        padding: 0px 30px;
    }
}
</style>