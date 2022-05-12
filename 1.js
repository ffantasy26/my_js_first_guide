const objToJson = {
    name: 'Vlad',
    age: 21
}

let jsonStr = JSON.stringify(objToJson) //obj to json

console.log(jsonStr)


const objToJsonFromString = JSON.parse(jsonStr)


console.log(objToJsonFromString)