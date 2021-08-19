<template>
  <button id="btn" :title="user.username" :class="props.className" v-for="user in props.users" :key="user.id" @click="test(user.id)">
    {{user.username.toUpperCase()}}

  </button>
  <button id="btn" class="user-btn" @click="test" v-show="false">testing</button>
</template>

<script setup>
 import { defineProps } from 'vue';
  const props = defineProps({
    users: Array,
    className: String
  });
  const log = console.log;

  const test = (id, e) =>{
    // const buttons = document.querySelectorAll('#btn');
    // const button = e.target;

    log(e, id);


    // return buttons.forEach(btn =>{
    //   btn.classList.contains('user-btn--active') ? btn.classList.remove('user-btn--active') : button.classList.add('user-btn--active');
    // })
  }


</script>
