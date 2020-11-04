let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Carol', 'Ediberto', 'José']
console.log(aprovados)
aprovados.push('Aldair')
console.log(aprovados)

// Organiza os itens dentr de um Array

aprovados.sort()
console.log(aprovados)

// Excluindo o elemento mas não a posição

delete aprovados[1]
console.log(aprovados)

// Adiciona ou remove elementos de um array

aprovados = ['Carol', 'Ediberto', 'José']
aprovados.splice(1,3) // Onde começa e onde termina
console.log(aprovados)

aprovados.splice(1,0,'Vitor', 'Maria') // 
console.log(aprovados)
