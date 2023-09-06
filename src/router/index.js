import { createRouter, createWebHistory } from 'vue-router'
import AdminView from '../views/AdminView.vue'
import UserView from '../views/UserView.vue'
import LoginView from '../views/LoginView.vue'
import HelloWorld from '../components/HelloWorld.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/user/:name',
    name: 'user',
    component: UserView
  },
  {
    path: '/test',
    name: 'test',
    component: HelloWorld
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
