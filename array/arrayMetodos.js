const pilotos = ['Vettel', 'Alonso', 'Raikkonem', 'Massa']

// Retira um elemento do array de último indice
pilotos.pop() 
console.log(pilotos)

 // Adiciona um elemento do últio índoce
pilotos.push('Versatappen')
console.log(pilotos)

// Retira o primeiro elemento do array
pilotos.shift() 
console.log(pilotos)

// Adiciona um elemento no primeiro índice
pilotos.unshift('Hamilton') 
console.log(pilotos)

console.log('\nAdiciona em posições específicas')
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

console.log('\n Remove em posições específicas')
pilotos.splice(3,1)
console.log(pilotos)

console.log('\n Gera um novo Array, pega uma parte do array')
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) 
console.log('\nDo índice 1 até o 3')
console.log(algunsPilotos2)