<template>
  <div id="todo">
    <div>
      <input type="text" v-model="todoText" @keyup.enter="addTodo" />
      <button @click="addTodo" >Add</button>
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo" > {{todo}}</li>
    </ul>
  </div>
</template>
``
<script>
export default {
  data() {
    return {
      todoText: '',
      todos: [],
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.todoText);
      this.todoText = '';
    },
  },
};
</script>

<style>
  #todo {
    text-align: left;
  }
</style>
