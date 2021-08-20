<template>
  <section class="users">
    <div class="wrapper">
      <h2 class="users__title">
      Pick a user
    </h2>
    <ul class="users__list">
      <User className="user-btn" :users="users"/>
    </ul>
    </div>
  </section>
</template>

<script setup>
import User from '../components/User.vue'
import {ref} from 'vue';
const url = 'https://jsonplaceholder.typicode.com/users';

let users = ref();
const getUsers = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    users.value = await data;
  } catch(error) {
    console.warn(error)
  }
}
getUsers();
</script>
