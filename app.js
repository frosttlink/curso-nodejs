import express from 'express'
const servidor = express();

servidor.use(express.json())

servidor.get('/helloworld', (req, resp) => {
  resp.send({
    mensagem: "Hello World"
  })
})

servidor.get('/mensagem/boasvindas', (req, resp) => {
  resp.send({
    mensagem: 'Olá seja bem vindo !'
  })
})

servidor.get('/v2/mensagem/boasvindas', (req, resp) => {
  resp.send({
    mensagem: 'Que bom q vc chegou aqui'
  })
})

servidor.get('/mensagem/ocupado', (req, resp) => {
  resp.send({
    mensagem: 'Estou ocupado agora'
  })
})

servidor.get('/mensagem/ocupado/recado', (req, resp) => {
  resp.send({
    mensagem: 'Estou ocupado, deixe uma mensagem'
  })
})


servidor.get('/calculadora/somar/:n1/:n2', (req, resp) => {
  let n1 = Number(req.params.n1)
  let n2 = Number(req.params.n2)
  let soma = n1 + n2 

  resp.send({
    soma: soma
  })
})

servidor.get('/calculadora/somar2/', (req, resp) => {
  let n1 = Number(req.query.n1)
  let n2 = Number(req.query.n2)
  let soma = n1 + n2 

  resp.send({
    soma: soma
  })
})

servidor.get('/mensagem/ola', (req, resp) => {
  let pessoa = req.query.nome ?? '!!!';

  resp.send({
    mensagem: 'Olá ' + pessoa
  })
})

servidor.post('/media', (req, resp) => {
  let n1 = req.body.nota1
  let n2 = req.body.nota2
  let n3 = req.body.nota3

  let media = (n1 + n2 + n3) / 3

  resp.send({
    media: media
  })
})
 
servidor.post('/dobros', (req, resp) => {
  let nums = req.body.numeros
  let nums2 = []

  for (let i = 0; i < nums.length; i++) {
    nums2[i] = nums[i] * 2
  }

  resp.send({
    numeros: nums,
    dobros: nums2
  })
})

servidor.post('/loja/pedido', (req, resp) => {
  let total = req.body.total
  let parcelas = req.body.parcelas
  let cupom = req.query.cupom

  if (parcelas > 1) {
    let juros = total * 0.05
    total += juros
  }

  if (cupom == "QUERO100") {
    total -= 100
  }

  let valorParcela = total / parcelas

  resp.send({
    total: total,
    valorParcela: valorParcela
  })
})

servidor.post('/loja/pedido/completo', (req, resp) => {
  let parcelas = req.body.parcelas 
  let itens = req.body.itens
  let cupom = req.query.cupom

  let total = 0 

  for (let produto of itens) {
    total += produto.preco
  }

  if (parcelas > 1) {
    let juros = total * 0.05
    total += juros
  }

  if (cupom == "QUERO100") {
    total -= 100
  }

  let valorParcela = total / parcelas

  resp.status(401).send({
    total: total,
    qtdParcelas: parcelas,
    valorParcela: valorParcela
  })
})


 
servidor.listen(
  5050, 
  () => console.log("Subiu"))