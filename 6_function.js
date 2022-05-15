//функциональные выражения

function performAction(number, action = (number)=>{
    return number
}){
    console.log(action(number));
}

performAction(5, function(number){
    return 5 * 10
})

performAction(10, function(number){
    return `You entered number ${number}`
})

//arrow functions

performAction(22, (number) => {
    return number / 2
})

performAction(3)

//create new obj

const addFeature = (objName, feature = 'Default') => {
    return {
        ...objName,
        feature
    }
}

const vlad = {
    name: 'Vlad'
}

newVlad = addFeature(vlad)

console.table(newVlad)

const vladWithSurname = addFeature(newVlad, 'Ryazanov')

console.table(vladWithSurname)