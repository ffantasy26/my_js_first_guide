const a = 4
const b = a

//console.log(b)

//ivade mutation


const language = {
    web: 'js'
}

const vlad = {
    language,
    name: 'Vlad',
    age: 22
}



//const vlad2 = Object.assign({}, vlad)
const vlad2 = {...vlad}
//same result


//vlad and vlad2 is different reference

vlad2.iswork = true 
//nested obj still mutable
const vlad3 = JSON.parse(JSON.stringify(vlad))

vlad2.language.web = 'react.js'
vlad2.language.back = 'node.js'

console.log(vlad)
console.log(vlad2)
console.log(vlad3)