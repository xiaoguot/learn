<template>
  <div>
    <template v-for="(item, index) in names">
      <slot :item="item" :index="index"></slot>
    </template>
    <hr>
    <button @click="btnClick">添加</button>
  </div>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    btnClick() {
      this.names.push("kurry")
    }
  },
}
</script>

<style>

</style>