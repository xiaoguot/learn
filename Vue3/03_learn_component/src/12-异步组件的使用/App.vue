<template>
  <div>
    App组件
    <home></home>

    <async-category></async-category>
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue';

  import Home from './Home.vue';
  import Loading from './Loading.vue';

  //const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"))

  const AsyncCategory = defineAsyncComponent({
    loader: () => import("./AsyncCategory.vue"),
    //加载失败时显示的组件
    loadingComponent: Loading,
    // errorComponent,
    // 在显示loadingComponent组件之前, 等待多长时间
    delay: 2000,
  })

  export default {
    components: {
      Home,
      AsyncCategory,
      Loading
    }
  }
</script>

<style scoped>

</style>

