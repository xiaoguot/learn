<template>
  <div></div>
</template>

<script>
  import emitter from './utils/eventbus';

export default {
  created() {
    emitter.on("why", (info) => {
      console.log("why:" + info);
    }),
    //*是什么都监听
    emitter.on("*", (type,info) => {
      console.log("why:", type, info);
    })
  },
}
</script>

<style>

</style>