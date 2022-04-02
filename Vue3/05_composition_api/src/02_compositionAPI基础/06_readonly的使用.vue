<template>
  <div>
    <button @click="updateState">修改状态</button>
  </div>
</template>

<script>
  import { reactive, ref, readonly } from 'vue';

  export default {
    setup() {
      //1,普通对象
      const info1 = {name: "why"};
      const readonlyInfo1 = readonly(info1);
      console.log(readonlyInfo1.name);

      //2,响应式的对象reactive
      const info2 = reactive({
        name: "why"
      });
      const readonlyInfo2 = readonly(info2);
      console.log(readonlyInfo2.name);

      //3,响应式的对象ref
      const info3 = ref("why");
      const readonlyInfo3 = readonly(info3);
      console.log(readonlyInfo3.value);

      const updateState = () => {
        readonlyInfo3.value = "coderwhy";
        //info1.name = "coderwhy";
      }

      return {
        updateState,
      }
    }
  }
</script>

<style>

</style>