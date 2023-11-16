import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Главная страница',
    component: () => import('../views/Home.vue'),
    meta: {
      power: {
        isAdminWatch: false
      }
    }
  },
  {
    path: '/search',
    name: 'Страница поиска',
    component: () => import('../views/Search.vue'),
    meta: {
      power: {
        isAdminWatch: false
      }
    }
  },
  {
    path: '/user-profile',
    name: 'Cтраница пользователя',
    component: () => import('../views/UserProfile.vue'),
    meta: {
      power: {
        isAdminWatch: false
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router