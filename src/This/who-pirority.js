/* 场景1 */
// function foo(a){
//     console.log(this.a)
// }

// const obj1 = {
//     a:1,
//     foo: foo
// }

// const obj2 = {
//     a: 2,
//     foo: foo
// }

// obj1.foo.call(obj2)
// obj2.foo.call(obj1)

/* 场景2 */
// function foo(a){
//     this.a = a
// }

// const obj1 = {
//     obj1: ''
// }

// var bar = foo.bind(obj1) // 先bind

// bar(2) 

// console.log(obj1.a) //2

// var baz = new bar(3) // 再 new
// console.log(baz.a) // 3


/* 场景3 */

// var a = 123

// function foo1() {
//     return a => {
//         console.log(this.a)
//     }
// }
// const obj1 = {
//     a:2
// }

// const obj2 = {
//     a:3
// }

// var bar = foo1.call(obj1)

// bar.call(obj2)

/* 场景4 */

{
    var a = 123

    const foo2 = () => {
        return a => {
            console.log(this.a)
        }
    }
    const obj3 = {
        a:2
    }

    const obj4 = {
        a:3
    }

    var bar = foo2.call(obj3)

    bar.call(obj4)
}