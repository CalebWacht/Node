const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))


app.get('/produtos', (req, res) => {
    res.send(bancoDeDados.getProdutos()) // converter para JSON, por causa do send
 })

 
 app.get('./produtos/:id', (req, res) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
 })

app.post('./produtos', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req,res) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})



app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})
