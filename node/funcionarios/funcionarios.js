const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const nacionalidadeGenero = nacGen => nacGen.pais == 'China' && nacGen.genero == 'F'
    const menorSalario = (funcAcumulado, funcAtual) => funcAcumulado.salario < funcAtual.salario ? funcAcumulado : funcAtual

    const result1 = funcionarios.filter(nacionalidadeGenero).reduce(menorSalario)
    console.log(result1)
})


