<template>

    <h1 class="mt-5 mb-5 tablaTareas"><i class="fa-sharp fa-solid fa-check pr-3"></i>Your tasks</h1>

    <div class="section">
        <div class="container">
            <div class="cards columns is-multiline ">
                <div class="column is-4-desktop is-4-tablet is-6-mobile" v-for="task in useTask.tasks">
                    <div class="card" :class="{ cardComplete: task.isCompleted }">
                        <header class="card-header card-header-title">
                            <div class="taskTitle">
                                {{ task.title }}
                            </div>
                            <div class="bttnsTasks">
                                <button @click="borrarTask(task.id)" class="button delete-button"><i
                                        class="fa-solid fa-trash"></i></button>
                                <button @click="verModal(task)" class="button edit-button"><i
                                        class="fa-solid fa-pen-to-square"></i></button>

                                <button @click="tareaRealizada(task)" class="button done-button">
                                    <i class="fa-regular fa-circle-check"></i>
                                </button>
                            </div>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <div class="message-body">
                                    {{ task.description }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Modal v-if="isModal" :tarea="taskModal" @close="closeModal()" />

</template>

<script setup>

import { useTaskStore } from '../store/task'
import { getTasks, deleteTask, updateTask } from '../api'
import { onMounted, ref } from 'vue';
import Modal from './Modal.vue';
import swal from 'sweetalert';

const useTask = useTaskStore();

onMounted(async () => {
    const tasks = await getTasks();
    useTask.setTask(tasks.data)
})

// DELETE TASK
const borrarTask = ((id) => {
    swal({
        title: "Are you sure?",
        text: "Once your task is deleted, there is no going back!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then(async (willDelete) => {
            if (willDelete) {
                swal("Your task has been deleted!", {
                    icon: "success",
                })
                const deleteTsk = await deleteTask(id)
                const tasks = await getTasks();
                useTask.setTask(tasks.data)
            }
            else {
                swal("Your task has not been deleted", {
                    icon: "success",
                })
            }
        });
});

// OPEN MODAL
const isModal = ref(false)
const taskModal = ref()

const verModal = (async (task) => {
    isModal.value = !isModal.value
    taskModal.value = task;
})

// CLOSE MODAL
const closeModal = (task) => {
    isModal.value = !isModal.value
};


// COMPLETE TASK
const tareaRealizada = async (task) => {
    if (task.isCompleted = !task.isCompleted) {
        const update = await updateTask(task.id, { isCompleted: task.isCompleted })
        swal("Congratulations!", "You have completed the task!", "success");
    } else {
        const update = await updateTask(task.id, { isCompleted: task.isCompleted })
        swal("Ouch!", "Your task is incomplete again", "info");
    }
}

</script>
  
  
<style scoped>
.cardComplete {
    filter: grayscale(1);
}

.sectionModal {
    display: none;
}

.card-header-title {
    background: #7fafb3;
    width: 100%;
}

.taskTitle {
    width: 100%;
}

.card-content {
    background-color: #d7ece9;
    height: 180px;
}

.message-body {
    border-color: #627264;
    height: 100%;
    word-wrap: break-word;
}

.content {
    height: 100%;
}

.bttnsTasks {
    display: flex;
    width: 100%;
    justify-content: flex-end;
}

.bttnsTasks button {
    margin-right: 7px;
}

.tablaTareas {
    border-bottom: 1px solid #2cb0c057;
    ;
    padding: 20px 30px 15px 30px;
    font-size: 2em;
}

@media only screen and (max-width: 860px) {
    .tablaTareas {
        font-size: 1.8em;
    }

    .column.is-6-mobile {
        width: 100%;
    }
}

@media only screen and (max-width: 480px) {
    .is-large.input {
        font-size: 1.2rem;
    }
}

@media only screen and (max-width: 375px) {
    .card-header-title {
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .bttnsTasks[data-v-a0662bbd] {
        justify-content: flex-start;
        margin-top: 15px;
    }
}
</style>