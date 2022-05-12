let a = 3
let b = 2

function sum(a, b){
    const c = a + b
    return c
}

sum(a, b)

a = 44
b = 123

let c = sum(a,b)
console.log(c)

//console.log(sum)
console.log(sum.name)


const vlad = {
    name: 'Vlad',
    age: 22
}

console.log(vlad)

function increaceAge(vlad){
    vlad.age += 1
}


function increaceAgeSec(vlad){
    const incAge = {...vlad}
    incAge.age++
    return incAge
}

const varr = increaceAgeSec(vlad)

console.log(varr)
console.log(vlad)


//callback
function add(a , b){
    console.log(a + b)
}

function sub(a , b){
    console.log(a - b)
}

function fnWithCallback(callBack, a , b){
    callBack(a, b)
}

let num1 = 3
let num2 = 5

fnWithCallback(sub, num1, num2)
fnWithCallback(add, num1, num2)