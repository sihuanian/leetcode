/* function foo() {
    var a = 2

    function bar() {
        console.log(a)
    }
    bar()
}

foo() */

/* function foo() {
    var a = 2
    
    function bar() {
        console.log(a)
    }
    return bar
}

var baz = foo()
baz() */

/* function foo() {
    var a = 2

    function baz() {
        console.log(a)
    }
    bar(baz)
}

function bar(fn) {
    fn()
}

foo() */
/* var name = "The Window";

　　var object = {
　　　　name : "My Object",

　　　　getNameFunc : function(){
　　　　　　return function(){
　　　　　　　　return this.name;
　　　　　　};

　　　　}

　　};

　　alert(object.getNameFunc()()); */

/* for (var i = 0; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i)
    }, i * 1000)  
} */

/* function CoolModule() {
    var something = 'cool',
        another = [1,2,3]

    function doSomething() {
        console.log(something)
    }
    function doAnother() {
        console.log(another.join('!'))
    }

    let publicAPI = {
        doSomething,
        doAnother
    }
    return publicAPI
}

var foo = CoolModule()
foo.doAnother()
foo.doAnother = function() {
    console.log('hahaha...')
}
foo.doAnother()

var f = CoolModule()
f.doAnother() */

function foo(num) {
    console.log('foo' + num)
    this.count++
}
foo.count = 0
var i = 0
for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo.call(foo, i)
    }
}

console.log(foo.count)