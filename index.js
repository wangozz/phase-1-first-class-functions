function candyBar(){
    console.log("Omondi ate the cat.")
}
function receivesAFunction(callback){
    callback()
}

const returnsANamedFunction = () =>receivesAFunction
const fn = returnsANamedFunction()

function returnsAnAnonymousFunction(){
    return function(){return "Omondi ate the dog"}
}