import express from 'express'
const servidor = express();

servidor.use(express.json())

servidor.get('/helloworld', (req, resp) => {
  resp.send('Hello World')   //Código do EndPoint
})

servidor.get('/mensagem/boasvindas', (req, resp) => {
  resp.send('Olá seja bem vindo !')
})

servidor.get('/v2/mensagem/boasvindas', (req, resp) => {
  resp.send('Que bom q vc chegou')
})

servidor.get('/mensagem/ocupado', (req, resp) => {
  resp.send('Estou ocupado agora')
})

servidor.get('/mensagem/ocupado/recado', (req, resp) => {
  resp.send('Estou ocupado, deixe uma mensagem')
})


servidor.get('/calculadora/somar/:n1/:n2', (req, resp) => {
  let n1 = Number(req.params.n1)
  let n2 = Number(req.params.n2)
  let soma = n1 + n2 

  resp.send('A soma é ' +  soma)
})

servidor.get('/calculadora/somar2/', (req, resp) => {
  let n1 = Number(req.query.n1)
  let n2 = Number(req.query.n2)
  let soma = n1 + n2 

  resp.send('A soma é ' +  soma)
})

servidor.get('/mensagem/ola', (req, resp) => {
  let pessoa = req.query.nome ?? '!!!';

  resp.send('Olá ' + pessoa)
})

servidor.post('/media', (req, resp) => {
  let n1 = req.body.nota1
  let n2 = req.body.nota2
  let n3 = req.body.nota3

  let media = (n1 + n2 + n3) / 3

  resp.send('Sua media atual é ' + media)
})
 
servidor.post('/dobros', (req, resp) => {
  let nums = req.body.numeros
  let nums2 = []

  for (let i = 0; i < nums.length; i++) {
    nums2[i] = nums[i] * 2
  }

  resp.send('Os dobros dos numeros: ' + nums2)
})
 
servidor.listen(5050, () => console.log("Subiu"))