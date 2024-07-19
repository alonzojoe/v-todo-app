<template>
    <div class="todo-card" :class="todo.completed ? 'bg-green' : ''">
        <h3 :class="todo.completed ? 'striked-text' : ''">{{ todo.title }}</h3>
        <button class="del-btn" @click="removeTodo(todo)">x</button>
        <button @click="toggleTodo(todo)">{{ todo.completed ? 'Undo' : 'Mark as Done' }}</button>
    </div>
</template>

<script setup>
import { inject } from 'vue'
import { useStore } from 'vuex'
const Swal = inject('$swal')
const props = defineProps({
    todo: Object,
    required: true
})


const store = useStore()

const toggleTodo = (todo) => {
    store.dispatch('toggleTodo', todo)
}

const removeTodo = (todo) => {
    Swal.fire({
        icon: 'confirmation',
        title: "Are you sure to remove this todo?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`
    }).then((result) => {
        if (result.isConfirmed) {
            store.dispatch('filterTodos', todo)
        }
    });

}
</script>

<style lang="css" scoped>
.striked-text {
    text-decoration: line-through;
}

.todo-card {
    position: relative;
    background-color: #333;
    color: white;
    padding: 20px;
    border: 2px solid #555;
    border-radius: 8px;
    margin-bottom: 20px;
}

.bg-green {
    background: #4F9D87 !important;
}

.del-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: #fff;
    background: red;
}

.todo-card h3 {
    margin-top: 15px;
    font-size: 1.5rem;
}

.todo-card p {
    margin-bottom: 0;
    font-size: 1.2rem;
    line-height: 1.6;
}
</style>