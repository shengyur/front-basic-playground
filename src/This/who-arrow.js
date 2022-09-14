const foo = {
    fn: function() {
        console.log(this === foo)

        setTimeout(()=>{
            console.log(this)
        })
    }
}

foo.fn()