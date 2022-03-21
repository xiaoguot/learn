import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters"
import moduleA from "./modules/moduleA";

// 1.安装插件
Vue.use(Vuex);

const state = {
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
  }

// 2. 创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,

  modules: {
    a: moduleA,
  }
});

// 3. 导出store独享
export default store;