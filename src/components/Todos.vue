<template>
  <section class="todos" v-show="userName">
    <div class="wrapper">
      <section class="todos__body">
        <section class="todos__header">
          <h2 class="todos__currentUser">{{ userName }}'S TODOS</h2>
          <Filters />
        </section>
        <ul class="todos__list">
          <li class="todos__todo" v-for="todo in todos" :key="todo.id">
            <label class="todos__label" :for="todo.id" @click="toggleDone">
              <input
                class="todos__checkbox"
                type="checkbox"
                :id="todo.id"
                :checked="todo.completed"
              />
              <span
                :class="{
                  'todos__todo-title': true,
                  'todos__todo-title--done': todo.completed,
                }"
              >
                {{ todo.title }}</span
              >
            </label>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

import Filters from "./Filters";
export default {
  name: "Todos",

  components: {
    Filters,
  },

  setup() {
    const store = useStore();
    const userName = computed(() => store.state.userName);
    const currentFilter = computed(() => store.state.currentFilter);

    const todos = computed(() => {
      if (currentFilter.value === "All") {
        return store.getters.getTodos;
      } else if (currentFilter.value === "Completed") {
        return store.getters.getCompleted;
      } else if (currentFilter.value === "Uncompleted") {
        return store.getters.getUncompleted;
      }
    });

    const toggleDone = (e) => {
      return e.target.classList.toggle("todos__todo-title--done");
    };

    return {
      todos,
      userName,
      toggleDone,
    };
  },
};
</script>
