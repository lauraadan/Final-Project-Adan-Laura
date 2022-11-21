import { defineStore } from "pinia";

export const useAuthUser = defineStore("user", {
state: () => ({
isAuth: false,
user: {
    id: "",
    email: "",
    pasword: "",
},
}),
actions: {
login(id, email, password) {
    this.isAuth = !this.isAuth;
    this.user.id = id;
    this.user.email = email;
    this.user.password = password;
},
logout() {
    this.isAuth = !this.isAuth;
    this.user.email = "";
    this.user.password = "";
},
},
persist: {
  enabled: true, 
  strategies: [
  {
      key: 'user',
      storage: localStorage
    },
  ],
}
}); 

