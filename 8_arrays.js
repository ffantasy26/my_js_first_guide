const myArray = [1 , 2 , 3]

const mySecArray = new Array(1 , 2, 3)

console.log(myArray)
console.log(mySecArray)

console.log(myArray === mySecArray) //false

myThirdArr = mySecArray

console.log(myThirdArr === mySecArray) //true