<template>
  <div>
    <h2>User: {{$route.params.username}}--{{$route.params.id}}</h2>
  </div>
</template>

<script>
  import { useRoute } from 'vue-router';

  export default {
    //在created中，通过this.$route.params获取值；
    created() {
      console.log(this.$route.params.username);
    },

    //setup里面没有this，如何拿到route   setup在生命周期函数之前执行，所以先打印setup里面的信息
    setup() {
      const route = useRoute();
      console.log(route.params.username);
    }
  }
</script>

<style>

</style>