<script setup>
import TodoList from './components/TodoList.vue';
import { onMounted, ref } from 'vue';
import { getLocalStorage } from './services'
import { useStore } from 'vuex'

const store = useStore()

const todoInput = ref('')

const addTodo = () => {

  if (todoInput.value.trim() === '') return;
  store.dispatch('addTodo', todoInput.value)
  todoInput.value = ''
}

onMounted(() => {
  const storedTodos = getLocalStorage('todos')
  store.dispatch('retrieveTodos', storedTodos)
})
</script>

<template>
  <div>
    <h2>Vue3 Todo App</h2>
    <div class="input">

      <input type="text" style="font-size: 20px;" @keypress.enter="addTodo" v-model="todoInput">
      <button @click.enter="addTodo">Add Todo</button>
    </div>
    <hr>
    <TodoList />
  </div>

</template>

<style scoped></style>
