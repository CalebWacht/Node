const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const chines = funcionarios => funcionarios.pais = 'Chines' 
    const mulher = funcionarios => funcionarios.genero = 'F'
    const menorSalario = (func, funcAtual) =>{
        return func.salario < funcAtual.salario ? func : funcAtual
    }
    const resultado = funcionarios.filter(chines).filter(mulher).reduce(menorSalario)
    console.log(resultado)
})
