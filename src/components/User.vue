<template>
  <button
    id="btn"
    :title="user.username"
    :class="props.className"
    v-for="user in props.users"
    :key="user.id"
    @click="getButtons(user)"
  >
    {{ user.name.toUpperCase() }}
  </button>
  <button id="btn" class="user-btn" @click="test" v-show="false">
    testing
  </button>
</template>

<script setup>
import { defineProps, onUpdated } from "vue";
import { useStore } from "vuex";
const props = defineProps({
  users: Array,
  className: String,
});

const store = useStore();

onUpdated(() => {
  document.querySelector("#btn").classList.add("user-btn--active");
});

const getButtons = (user) => {
  const buttons = document.querySelectorAll("#btn");
  const button = event.currentTarget;

  store.commit("changeUserId", user.id);
  store.commit("changeName", {
    name: user.name,
  });
  buttons.forEach((btn) => {
    btn.classList.contains("user-btn--active")
      ? btn.classList.remove("user-btn--active")
      : button.classList.add("user-btn--active");
  });
};
</script>
