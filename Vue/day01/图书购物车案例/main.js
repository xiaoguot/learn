const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: "《算法导论》",
        date: "2006-9",
        price: 55.0,
        count: 1
      },
      {
        id: 2,
        name: "《UNIX编程艺术》",
        date: "2007-9",
        price: 58.0,
        count: 3,
      },
      {
        id: 3,
        name: "《编程珠玑》",
        date: "2006-10",
        price: 35.0,
        count: 1
      },
      {
        id: 4,
        name: "《代码大全》",
        date: "2016-9",
        price: 85.0,
        count: 2
      },
    ],
  },
  methods: {

  },
  filters: {
    showPrice(price){
      return '¥' + price.toFixed(2)
    }
  }
})