class Person {
  //开发中私人变量前面习惯加上“_”
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  // 通过访问器setter/getter来访问私有变量（封装两个方法）
  // setter
  set name(newName) {
    this._name = newName
  }
  // getter
  get name() {
    return this._name
  }
}

const p = new Person("why")
p.name = "coderwhy"
console.log(p.name)
