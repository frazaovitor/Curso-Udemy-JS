const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Percorre todo o Array, primeiro parâmetro são os elementos o segundo são os índices

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)