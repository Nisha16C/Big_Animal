import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import overview from '../components/overview.vue';
import newCluster from '../components/newCluster.vue';
import login from '../views/login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/login', },
    { path: '/login', name: 'login', component: login },
    { path: '/home', name: 'home', component: HomeView },
    { path: '/overview', name: 'overview', component: overview },
    { path: '/cluster/new', name: 'newCluster', component: newCluster },
   
    
  ]
})

export default router
