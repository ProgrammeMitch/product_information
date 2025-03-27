import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PopulateView from '../views/PopulateView.vue';
import SearchForProducts from "../views/SearchForProducts.vue"; // ✅ Import the new page

const routes = [
  { path: '/', component: HomeView }, 
  { path: '/populate', component: PopulateView },
  { path: "/search_for_products", component: SearchForProducts } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
