const fnWithError = ()=>{
    throw new Error("Jopa")
}


try{
    fnWithError()
}catch(error){
    //console.log(error)
    console.log('there is an error')
    console.log(error.message)
}

console.log('Code continue')