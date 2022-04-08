<template>
  <div id="app">
    <!-- props: href 跳转的链接 -->
    <!-- props: route 对象 -->
    <!-- props: navigate导航函数 -->
    <!-- props: isActive 是否当前处于活跃的状态 -->
    <!-- props: isExactActive 是否当前处于精确的活跃状态 -->

    <router-link to="/home" v-slot="props" custom>
      <button @click="props.navigate">{{props.href}}</button>
<!--  <button @click="props.navigate">{{props.route}}</button>-->
    <span :class="{'active': props.isActive}">{{props.isActive}}</span>
    <span :class="{'active': props.isActive}">{{props.isExactActive}}</span>
    </router-link>
    <router-link to="/about" >关于</router-link>
    <router-link to="/user/guotian/id/123" >用户</router-link>
    <router-link to="/category">分类</router-link>

    <button @click="jumpToAbout">关于</button>
    <button @click="forwardOneStep">前进一步</button>

    <!-- router-view也提供给我们一个插槽，可以用于<transition> 和<keep-alive> 组件来包裹你的路由组件 -->
    <router-view v-slot="props">
      <!-- <transition name="why"> -->
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      <!-- </transition> -->
    </router-view>
  </div>
</template>

<script>

import { useRouter } from 'vue-router';

export default {
  name: 'App',
  methods: {
/*     jumpToAbout() {
      //this.$router.push("/about")
      //也可以传入一个对象
      this.$router.push({
        path: '/about'
      }) */
    },
    //如果是在setup中编写的代码，那么我们可以通过useRouter 来获取：
    setup() {
    const router = useRouter();

    const jumpToAbout = () => {
      //router.push("/about");
      router.push({
        path: "/about",
        query: {
          name: "why",
          age: 18
        }
        // router.replace("/about")
      })
    }

    const forwardOneStep = () => {
      router.go(2)
      // router.go(-1)  相当于back
      // router.forward()
      // router.back()
    }

    return {
      jumpToAbout,
      forwardOneStep
    }
  }
}
</script>

<style>
  .active {
    color: red;
  }

  .why-enter-from,
  .why-leave-to {
    opacity: 0;
  }

  .why-enter-active,
  .why-leave-active {
    transition: opacity 1s ease;
  }
</style>
