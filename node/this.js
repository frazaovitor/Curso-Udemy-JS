// acessa o module.exports fora da função

console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)


// acessa o global quando está dentro de uma função
function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === module.exports)
    console.log(this === module.global)

}

logThis()
