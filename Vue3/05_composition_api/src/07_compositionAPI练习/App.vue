<template>
  <div>
    <h2>当前计数: {{counter}}</h2>
    <h2>计数*2: {{doubleCounter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <h2>{{data}}</h2>
    <button @click="changeData">修改data</button>

    <p class="content"></p>

    <div class="scroll">
      <div class="scroll-x">scrollX: {{scrollX}}</div>
      <div class="scroll-y">scrollY: {{scrollY}}</div>
    </div>
    <div class="mouse">
      <div class="mouse-x">mouseX: {{mouseX}}</div>
      <div class="mouse-y">mouseY: {{mouseY}}</div>
    </div>
  </div>
</template>

<script>
  import { ref, computed } from 'vue';

  import {
    useCounter,
    useTitle,
    useLocalStorage,
    useMousePosition,
    useScrollPosition,
  } from './hooks';

  export default {
    setup() {
      //counter
      const { counter, doubleCounter, increment, decrement } = useCounter();

      // title
      const titleRef = useTitle();
      setTimeout(() => {
        titleRef.value = "kobe"
      }, 3000);

      //localStorae
      const data = useLocalStorage("info");
      const changeData = () => data.value = "哈哈哈";

      // 滚动位置
      const { scrollX, scrollY } = useScrollPosition();

      // 鼠标位置
      const { mouseX, mouseY } = useMousePosition();

      return {
        counter,
        doubleCounter,
        increment,
        decrement,

        data,
        changeData,

        scrollX,
        scrollY,

        mouseX,
        mouseY,
      }
    }
  }
</script>

<style scoped>
  .content {
    width: 3000px;
    height: 5000px;
  }

  .scroll {
    position: fixed;
    right: 30px;
    bottom: 30px;
  }
  .mouse {
    position: fixed;
    right: 30px;
    bottom: 80px;
  }
</style>