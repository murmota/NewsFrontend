import { createRouter, createWebHistory } from 'vue-router';
import CategoryList from '@/components/CategoryList.vue';
import NewsList from '@/components/NewsList.vue';
import NewsDetails from '@/components/NewsDetails.vue';

const routes = [
  { path: '/', component: CategoryList },
  { path: '/categories/:id/news', component: NewsList, props: true },
  { path: '/news/details/:id', component: NewsDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
