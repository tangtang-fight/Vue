let app = new Vue({
  el: '#app',
  data: {
    message: "你好Vue",
    books:[
      {
        id: 1,
        name: "《算法导论》",
        data: "2006-2",
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: "《UNIX编程艺术》",
        data: "2006-9",
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: "《计算机网络》",
        data: "2006-8",
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: "《代码大全》",
        data: "2006-5",
        price: 128.00,
        count: 1
      },
    ],
  },
  methods: {
    decrement(index){
      return this.books[index].count--;
    },
    increment(index){
      return this.books[index].count++;
    },
    removeItem(index){
      this.books.splice(index,1)
    }
  },
  // 计算属性
  computed: {
    totalPrice(){
      // 1.普通for遍历1
      let result = 0;
      // for(let i=0 ; i<this.books.length ; i++){
      //   result += this.books[i].price * this.books[i].count;
      // }
      // return result;

      // 2.普通for遍历2--for(let i in Arr) i为索引
      // for(let i in this.books){
      //   result += this.books[i].price * this.books[i].count;
      // }
      // return result;

      // 3.普通for遍历3--for(let i of Arr)  i为元素
      for(let i of this.books){
        result += i.price * i.count;
      }
      return result;

      // 三个高阶函数 filter/map/reduce

    }
  },
  // 过滤器 filter
  filters: {
    priceStyle(price){
      return "￥" + price.toFixed(2);
    }
  }
})