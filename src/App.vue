<template>
  <div id="app">
    <h1>Todo App</h1>
    <input type="text" v-model="data.name" placeholder="Todo name">
    <input type="text" v-model="data.description" placeholder="Todo description">
    <button v-on:click="createTodoItem">Create Todo</button>
    <div v-for="item in todos" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script src="./App.js"></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
