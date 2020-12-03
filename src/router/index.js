import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import AboutMe from '@/views/AboutMe.vue';
import TodoDemo from '@/views/TodoDemo.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about-me",
    name: "AboutMe",
    component: AboutMe
  },
  {
    path: "/todo-demo",
    name: "TodoDemo",
    component: TodoDemo
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;