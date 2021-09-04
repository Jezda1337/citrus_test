<template>
  <main>
    <Users />

    <Todos />
  </main>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

import Users from "./components/Users.vue";
import Todos from "./components/Todos.vue";
export default {
  name: "App",
  components: {
    Users,
    Todos,
  },
  setup() {
    const store = useStore();

    onMounted(async () => {
      try {
        const users = await fetch("https://jsonplaceholder.typicode.com/users");
        store.dispatch("setUsersList", await users.json());

        const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
        store.dispatch("setTodos", await todos.json());
      } catch (err) {
        console.log(err);
      }
    });
    return {};
  },
};
</script>
