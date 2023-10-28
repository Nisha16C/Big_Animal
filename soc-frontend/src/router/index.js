import { createRouter, createWebHistory } from 'vue-router'

import loginPage from '@/components/loginPage.vue'
import rulePage from '@/components/rulePage.vue'
import socDashboard from '@/components/socDashboard.vue'
import onBoard from '@/components/onBoard.vue'
import clusterSetting from '@/components/clusterSetting.vue'
// import homeView from '@/views/HomeView.vue'
import homeView from '@/views/HomeView.vue'



const routes = [
  {
    name: 'login',
    path: '/',
    component: loginPage
  },
  {
    name: 'socdashboard',
    path: '/socdashboard',
    component: socDashboard
  },
  {
    name: 'cluster-setting',
    path: '/cluster-setting',
    component: clusterSetting
  },
  {
    name: 'home',
    path: '/home',
    component: homeView
  },
  {
    name: 'rules',
    path: '/rules',
    component: rulePage
  },
  {
    name: 'onBoard',
    path: '/onBoard',
    component: onBoard
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})



// Create the router guard
router.beforeEach((to, from, next) => {
  const allowedPaths = ['/', ];

  if (allowedPaths.includes(to.path)) {

    next();
  } else {

    const user_id = sessionStorage.getItem('user_id')
    const username = sessionStorage.getItem('username')

    if ( user_id || username) {
      
      next();
    } else {
      next('/');
    }
  }
});


export default router
