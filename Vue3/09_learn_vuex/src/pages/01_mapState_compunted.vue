<template>
  <div>
    <h2>Home:{{ $store.state.counter }}</h2>
    <h2>Home:{{ sCounter }}</h2>
    <h2>Home:{{ sName }}</h2>
    <!-- <h2>Home:{{ age }}</h2>
    <h2>Home:{{ height }}</h2> -->
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      fullName() {
        return "Kobe Bryant"
      },
      // 其他的计算属性, 从state获取
      //映射表  mapState返回的是一个一个对象(函数)
      // ...mapState(["counter", "name", "age", "height"])
      //如果传入的是一个对象，可以自定义名称
      ...mapState({
        sCounter: state => state.counter,
        sName: state => state.name
      })
    }
  }
</script>

<style scoped>

</style>