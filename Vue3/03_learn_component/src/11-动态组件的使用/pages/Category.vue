<template>
  <div>
    Category组件
    <button @click="couter++">{{couter}}</button>
  </div>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      couter: 0
    }
  },
}
</script>

<style>

</style>