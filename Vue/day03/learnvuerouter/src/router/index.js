import Vue from "vue";
import VueRouter from 'vue-router';

/* import Home from '../components/home.vue';
import About from '../components/about.vue';
import User from '../components/user.vue'; */

//懒加载  动态导入
const Home = () => import('../components/home.vue');
const HomeNews = () => import('../components/homeNews.vue');
const HomeMessage = () => import('../components/homeMessage.vue');
const About = () => import('../components/about.vue');
const User = () => import('../components/user.vue');
const Profile = () => import('../components/profile.vue');

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
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'HomeNews'
      },
      {
        path: 'HomeNews',
        component: HomeNews
      },
      {
        path: 'HomeMessage',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
];

//3,创建router实例
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
})

//前置守卫  （HOOK）
router.beforeEach((to,from,next) => {
  //从from跳转到to
  document.title = to.matched[0].meta.title;
  //一定不能省
  next();

  //console.log(to);
})

//4,导出router实例
export default router;