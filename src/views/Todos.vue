<template>
  <section class="todos">
    <div class="wrapper">
      <section class="todos__header">
        <h2 class="todos__user-name">
          {{ `${userName.toUpperCase()}'S TODOS` }}
        </h2>
        <section class="todos__filters">
          <button
            :class="{
              active: filter == 'All',
              todos__filter: true,
            }"
            @click="changeFilter('All')"
          >
            {{ `All` }}
          </button>
          <button
            :class="{
              active: filter == 'Completed',
              todos__filter: true,
            }"
            @click="changeFilter('Completed')"
          >
            {{ `Completed` }}
          </button>
          <button
            :class="{
              active: filter == 'Uncompleted',
              todos__filter: true,
            }"
            @click="changeFilter('Uncompleted')"
          >
            {{ `Uncompleted` }}
          </button>
        </section>
      </section>
      <ul class="todos__list">
        <li class="todos__item" v-for="todo in filtersTodos" :key="todo.id">
          <label class="todos__label" :for="todo.id">
            <input
              class="todos__check"
              :checked="todo.completed"
              :id="todo.id"
              type="checkbox"
            />
            <p
              :class="
                todo.completed ? 'done todos__todo-title' : 'todos__todo-title'
              "
            >
              {{ todo.title }} {{ todo.completed }}
            </p>
          </label>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

const url = "https://jsonplaceholder.typicode.com/todos";
const state = computed(() => store.state.userId);
const todoList = ref([]);

const userName = computed(() => store.state.name);

const filter = ref("All");
const changeFilter = (status) => {
  filter.value = status;
  console.log(filtersTodos.value.length);
};

const filtersTodos = computed(() => {
  if (filter.value === "All") {
    return todos.value;
  } else if (filter.value === "Completed") {
    return todos.value.filter((todo) => todo.completed);
  } else if (filter.value === "Uncompleted") {
    return todos.value.filter((todo) => !todo.completed);
  } else {
    return todos.value;
  }
});

const getData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

getData().then((data) => todoList.value.push(data));

const todos = computed(() => {
  const newTodoList = todoList.value[0]?.filter(
    (x) => state.value === x.userId
  );
  return newTodoList;
});

console.log(filtersTodos.value);
</script>
