<template>
<div>
  <h2>我是用户界面</h2>
  <p>我是用户相关信息</p>
  <h2>{{Id}}</h2>
  <h2>{{$route.params.userId}}</h2>
</div>
</template>

<script>
export default {
  name: "user",
  computed: {
    Id() {
      return this.$route.params.userId
    }
  }

}
</script>

<style>

</style>