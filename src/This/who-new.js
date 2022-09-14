function Foo(){
    this.bar = 'lucas'

    const o = 1
    return o
}

const instance = new Foo()
console.log(instance.bar)

// var obj = {}
// obj.__proto__ = Foo.prototype
// Foo.call(obj)