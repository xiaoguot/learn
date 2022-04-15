// message? -> undefined | string
function printMessageLength(message?: string) {
  //第一种方法
  // if (message) {
  //   console.log(message.length)
  // }
  // vue3源码  第二种
  console.log(message!.length)
}

printMessageLength("aaaa")
printMessageLength("hello world")

