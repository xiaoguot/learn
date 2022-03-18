<template>
  <div id="app">
    <h1>我是网站的标题</h1>
    <!-- tag: tag可以指定<router-link>之后渲染成什么组件, 比如上面的代码会被渲染成一个<li>元素, 而不是<a>
      replace: replace不会留下history记录, 所以指定replace的情况下, 后退键返回不能返回到上一个页面中
    -->
<!--     <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->

<!--     <button @click="homeClick" active-class="active">首页</button>
    <button @click="aboutClick">关于</button> -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="'/user/' + userId">用户</router-link>
    <router-view></router-view>
    <h2>我是APP中一些底部版权信息</h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    homeClick() {
      // 通过代码的方式修改路由 vue-router
      // this.$router.push("/home");
      this.$router.replace("/home");
    },
    aboutClick() {
      // this.$router.push("/about");
      this.$router.replace("/about");
    },
  }
}
</script>

<style>
.active {
  color: #f00;
}
</style>
