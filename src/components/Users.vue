<template>
  <section class="user">
    <div class="wrapper">
      <h1 class="user__title">PICK A USER</h1>
      <section class="user__body">
        <button
          @click="setUser(user)"
          :class="{
            user__button: true,
            'user__button--active': user.id === userId,
          }"
          v-for="user in users"
          :key="user.id"
        >
          {{ user.name }}
        </button>
      </section>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Users",

  setup() {
    const store = useStore();
    const users = computed(() => store.state.users);
    const userId = computed(() => store.state.userId);

    // commit state for user od and user name
    const setUser = (user) => {
      store.commit("setUserId", user.id);
      store.commit("setUserName", user.username);
    };

    return {
      users,
      userId,
      setUser,
    };
  },
};
</script>
