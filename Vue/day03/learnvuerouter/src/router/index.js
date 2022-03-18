import Vue from "vue";
import VueRouter from 'vue-router';

/* import Home from '../components/home.vue';
import About from '../components/about.vue';
import User from '../components/user.vue'; */

//懒加载  动态导入
const Home = () => import('../components/home.vue');
const About = () => import('../components/about.vue');
const User = () => import('../components/user.vue');

//1,注入插件
Vue.use(VueRouter);

//2,定义路由
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  }
];

//3,创建router实例
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
})

//4,导出router实例
export default router;