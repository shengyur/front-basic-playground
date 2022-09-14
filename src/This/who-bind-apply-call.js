const foo = {
    name: 'lucas',
    logName: function() {
        console.log(this.name)
    }
}

const bar = {
    name: 'mike'
}

foo.logName.call(bar)