const app = new Vue({
  el: '#app',
  data:{
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
    ]

  },
  methods: {
    // getFinalPrice(price){
    //   return '￥' + price.toFixed(2)
    // }

    // 1.添加减功能
    increment(index){
      // console.log("加",index)
      this.books[index].count++;
      // 书数量最小为1，小于1则不能继续减
    },
    decrement(index){
      // console.log("减",index)
      this.books[index].count--;
    },
    removeHandle(index){
      this.books.splice(index,1)
    }
    
  },
  // 过滤器
  filters: {
    showPrice(price){
      return '￥' + price.toFixed(2)
    },
  },
  computed: {
    totalPrice(){
      // 遍历数组的几种方法
      
      // 1.普通的for循环
      // let totalPrice = 0;
      // for(let i=0; i<this.books.length; i++){
      //   totalPrice +=this.books[i].price * this.books[i].count;
      // }
      // return totalPrice

      // 2.for(let i in this.books)---i表示里面的索引
      // for(let i in this.books){
      //   // console.log(i)
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice;

      // 3.for(let i of this.books)
      // for(let item of this.books){
      //   totalPrice += item.price * item.count;
      // }
      // return totalPrice;

      // 4.reduce(高阶函数) 0
      // filter/map/reduce 三个高阶函数

      // return this.books.reduce(function(preValue,book){
      //   return preValue +book.price * book.count
      // }, 0)
      //箭头函数写法
      return this.books.reduce((preValue,book)=> preValue + book.price * book.count , 0)
    }
  }
})

// 函数式编程：命令式编程/声明式编程
//命令式编程：给计算机 第一步做什么，第二步做什么..一步一步的做
//           比如：第一步拿到DOM元素，第二步需要从服务器请求数据，第三步将请求得到的数据放到DOM中

//声明式编程：拿到数据后，保存到某个位置。然后通过声明，自动遍历。

//编程范式：面向对象编程(封装继承多态)(第一公民：对象)/函数式编程(第一公民：函数---将事物抽象为一个函数)