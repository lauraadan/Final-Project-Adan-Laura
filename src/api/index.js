import { createClient } from "@supabase/supabase-js"; 
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
); 
import { ref } from "vue";
const user = ref(null);


// REGISTER
export const registro = async (email, password) => {
  return await supabase.auth.signUp({
    email,
    password,
  });
};

// LOGIN
export const login = async (email, password) => {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

// NEW TASK
export const newTask = async (id, title, description) => {
  return await supabase.from("task").insert({
    user_id: id,
    title: title,
    description: description,
  });
};

// GET TASK
export const getTasks = async () => {
  return await supabase
    .from("task") 
    .select("*") 
    .order("id", { ascending: false }); 
};

// REFRESH TASK
export const updateTask = async (taskId, task) => {
  return await supabase
    .from("task") 
    .update(task)
    .eq("id", taskId);
};

// DELETE TASK
export const deleteTask = async (taskId) => {
  return await supabase
    .from("task") 
    .delete()
    .eq("id", taskId);
};

// SIGN OFF
export const logOut = async () => {
  return await supabase.auth.signOut();
};
