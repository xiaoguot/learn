import Vue from "vue";
import Vuex from "vuex";

// 1.安装插件
Vue.use(Vuex);

// 2. 创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      { id: 110, name: "why", age: 18 },
      { id: 111, name: "kobe", age: 28 },
      { id: 112, name: "james", age: 19 },
      { id: 113, name: "curry", age: 39 }
    ],
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98,
    }
  },
  mutations: {
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
    }
  },
  actions: {
    aUpdateInfo(context, payload) {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
            context.commit('updateInfo');
            console.log(payload);
            resolve('1111111');
          }, 5000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter;
    },
    more20stu(state) {
      return state.students.filter(s => s.age >= 20)
    },
    more20stuLength(state,getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return age => {
          return state.students.filter(s => s.age >= age)
        }
    }
  }
});

// 3. 导出store独享
export default store;