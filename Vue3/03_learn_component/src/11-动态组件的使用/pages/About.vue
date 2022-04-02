<template>
  <div>
    About组件
    <button @click="couter++">{{couter}}</button>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      couter: 0
    }
  },
  created() {
    console.log("about created");
  },
  unmounted() {
    console.log("about unmounted");
  },
  activated() {
    console.log("about activated");
  },
  deactivated() {
    console.log("about deactivated");
  },
}
</script>

<style>

</style>