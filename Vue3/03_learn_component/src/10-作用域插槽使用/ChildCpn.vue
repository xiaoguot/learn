<template>
  <div>
    <h2>{{title}}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "12345"
    }
  }
}
</script>

<style>

</style>