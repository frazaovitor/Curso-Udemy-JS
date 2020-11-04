const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

// Retorna verdadeiro ou falso

let produtoCaro = p => p.preco > 500
let produtoFragil = f => f.fragil == true

console.log (produtos.filter(produtoCaro).filter(produtoFragil))