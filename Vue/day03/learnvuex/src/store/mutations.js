export default {
    //方法
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, payload) {
      //console.log(payload)
      state.counter += payload.count
    },
    addStudent(state,stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      state.info.name = 'guotian';
      //state.info['address'] = '洛杉矶'  这个不是响应式的
      //Vue.set(state.info, 'address', '洛杉矶')

      //该方式做不到响应式
      //delete state.info.age
      //Vue.delete(state.info, 'age')
    },
  }