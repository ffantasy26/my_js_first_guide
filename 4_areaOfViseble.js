'use strict' // strict mode
let a
let b

function localArea() {
    //c = true // will throw error if strict mode is set
    let b
    a = true
    b = 10
}

localArea()

console.log(a) //true
console.log(b) //undefined

console.log(Boolean(''))
console.log(Boolean('2312'))


const emptyObj = {}

console.log(!!emptyObj)

let button = {
    width: 22,
    height: 33
}

// ... разделение на св-ва

let buttonWidth = {
    width: 333
}


let redButton = {
    ...button,
    ...buttonWidth, //will override width to 333
    color: 'red'
}



console.table(redButton)