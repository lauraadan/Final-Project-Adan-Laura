import { defineStore } from "pinia";

export const useTaskStore = defineStore("task", {
state: () => ({
  tasks: []
}),
actions: {
  setTask(tasks){
    this.tasks = tasks
  },
},
});
