Array.prototype.map2 = function (callback) {
    let novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this))
    }
    return novoArray
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno","preco": 13.90}',
    '{"nome": "Kit de Lapis","preco": 41.22}',
    '{"nome": "Caneta","preco": 7.50}'
]

// Retorna um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = e => e.preco

let carrinho2 = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(carrinho2)