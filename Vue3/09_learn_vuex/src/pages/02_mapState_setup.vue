<template>
  <div>
    <h2>Home:{{ $store.state.counter }}</h2>
    <hr>
    <h2>{{sCounter}}</h2>
    <h2>{{counter}}</h2>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
    <h2>{{height}}</h2>
    <hr>
  </div>
</template>

<script>
  import { mapState, useStore } from 'vuex'
  import { computed } from 'vue'

  export default {
    computed: {
      fullName: function() {
        return "1fdasfdasfad"
      },
      ...mapState(["name", "age"])
    },

    setup() {
      const store = useStore()
      //computed返回的是一个ref对象
      const sCounter = computed(() => store.state.counter)
      // const sName = computed(() => store.state.name)
      // const sAge = computed(() => store.state.age)

      const storeStateFns = mapState(["counter", "name", "age", "height"])

      // 本来是：{name: function, age: function, height: function}
      // 变成目标：{name: ref, age: ref, height: ref}
      const storeState = {}
      Object.keys(storeStateFns).forEach(fnKey => {
        const fn = storeStateFns[fnKey].bind({$store: store})
        storeState[fnKey] = computed(fn)
      })

      return {
        sCounter,
        ...storeState
      }
    }
  }
</script>

<style scoped>

</style>