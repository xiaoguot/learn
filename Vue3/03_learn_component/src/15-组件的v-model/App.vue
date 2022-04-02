<template>
  <div>
    <!-- 组件上使用v-model -->
  <!-- <hy-input v-model="message"></hy-input> -->
  <!-- 上面相当于 -->
  <!-- <hy-input :modelValue="message" @update:model-value="message = $event"></hy-input> -->

  <!-- 绑定两个v-model -->
  <hy-input v-model="message" v-model:title="title"></hy-input>

  <h2>{{message}}</h2>
  <h2>{{title}}</h2>
  </div>
</template>

<script>
  import HyInput from './HyInput.vue';

  export default {
    components: {
      HyInput,
    },
    data() {
      return {
        message: "hello world",
        title: "啊哈哈"
      }
    },
  }
</script>

<style scoped>

</style>