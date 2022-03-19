<template>
  <div>
    <h2>我是首页标题</h2>
    <p>我是首页的内容</p>
    <router-link to="/home/homeNews">新闻</router-link>
    <router-link to="/home/homeMessage">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home"
}
</script>

<style>

</style>