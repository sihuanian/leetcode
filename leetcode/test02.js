/* function foo() {
    console.log("foo")
}
var obj = {
    foo
}
console.log(obj.foo === foo) // true */

/* var obj = {
    foo() {
        console.log('foo')
    }
}

var foo1 = obj.foo

console.log(foo1 === obj.foo)
 */

/*  var arr = ['foo', 42, 'bar']
 arr['2'] = 3
 console.log(arr)
 */

 var obj = {}

/*  Object.defineProperty(obj, 'name', {
     value: 'kobe',
     writable: true
 })
 obj.name = 'bryant'
 console.log(Object.getOwnPropertyDescriptor(obj, 'name')) 

 Object.defineProperty(obj, 'name', {
     writable: false
 })
 console.log(Object.getOwnPropertyDescriptor(obj, 'name')) 
 */

/*  var obj = {
    //  a: 100,
     get a()  {
         return 'a'
     }
 }
 console.log(obj.a)

 console.log(obj.hasOwnProperty('a')) */

/*  var obj = {}
 Object.defineProperty(obj, "b", {
     get() {
         return this.a = 'a'
     }
 })

console.log(obj.b) */

/* var arr = ['a', 5, 'c']
for (const i in arr) {
    console.log(i, arr[i])
} */

var s = Symbol('sss')
var obj = {
    [s]: 100
}

for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(obj[key])
    }
}
// console.log(Object.keys(obj))
console.log(obj.hasOwnProperty(s))