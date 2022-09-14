/* 场景1 */
function f1() {
    const that = this
    console.log(that,this)
}

function f2(){
    'use strict'

    console.log(this)
}

f1()
// f2()

/* 场景2 */
const foo = {
    bar: 10,
    fn: function() {
        console.log(this)
        console.log(this.bar)
    }
}

// var fn1 = foo.fn
// fn1()


// foo.fn()