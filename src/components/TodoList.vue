<template>
    <div>

        <p class="error" v-if="todos.length === 0">No record(s) found, Add Some?</p>

        <div class="todo-container" v-else>

            <Todo v-for="todo in todos" :todo="todo" :key="todo?.id" />
        </div>

    </div>
</template>

<script setup>
import { computed } from 'vue';
import Todo from './Todo.vue'
import { useStore } from 'vuex';

const store = useStore()

const todos = computed(() => store.getters.getTodos)

</script>

<style lang="css" scoped>
.error {
    color: red;
}

.todo-container {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    grid-auto-rows: 1fr
}
</style>