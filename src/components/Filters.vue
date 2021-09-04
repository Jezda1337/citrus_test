<template>
  <section class="filters">
    <button
      @click="setFilter"
      :class="{
        filters__button: true,
        'filters__button--active': filter.filter === currentFilter,
      }"
      v-for="(filter, index) in filters"
      :key="index"
    >
      {{ filter.filter }} ({{ filter.filterLength }})
    </button>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  name: "Filters",

  setup() {
    const store = useStore();
    const currentFilter = computed(() => store.state.currentFilter);
    const filters = [
      {
        filter: "All",
        filterLength: computed(() => store.getters.todosLength),
      },
      {
        filter: "Completed",
        filterLength: computed(() => store.getters.completedLength),
      },
      {
        filter: "Uncompleted",
        filterLength: computed(() => store.getters.unCompletedLength),
      },
    ];

    const setFilter = (e) => {
      return store.commit(
        "setCurrentFilter",
        e.target.textContent.split(" ")[0]
      );
    };

    return { filters, setFilter, store, currentFilter };
  },
};
</script>
