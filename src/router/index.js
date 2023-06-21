import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Login.vue'
import auth from '@/auth'
import About from '@/components/About.vue'
import Dashboard from '@/components/Dashboard.vue'
import Login from '@/components/Login.vue'
import pro from '@/components/PropVue.vue'

const routes = [
  {
    path:'/propVue',
    component:pro
  }
  ,
  {
    path: '/',
    name:'Home',
    component:() => import ('../views/HomeVue.vue')
  },
  { path: '/about', component: About },
    { path: '/dashboard', component: Dashboard, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/login')
      }
    }
  ,
  {
    path: '/login',
    name: 'login',
    component: HomeView
  },
  {
    path: '/register',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterVue.vue')
  }
]

function requireAuth (to, from, next) {
  console.log(" auth.loggedIn():"+auth.loggedIn())
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 
