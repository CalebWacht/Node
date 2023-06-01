const moduloA = require('../../moduloA') // nao respeitando letras minusculas e maiusculas: Não funciona no linux
console.log(moduloA.ola)

const c = require('./pastaC')
console.log(c.ola2)

//const http = require('http')
//http.createServer((req, res)=> {
    //res.write('Bom dia!')
   // res.end()
//}).listen(8080)