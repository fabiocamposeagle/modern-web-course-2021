const porta = 3003;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, res, next) => {
	res.send(bancoDeDados.getProdutos());
});

app.get('/produtos/:id', (req, res, next) => {
	res.send(bancoDeDados.getProduto(req.params.id));
});
// Com o app,post para eu submeter os dados,
// e salvar um novo produto
app.post('/produtos', (req, res, next) => {
	const produto = bancoDeDados.salvarProduto({
		nome: req.body.nome,
		preco: req.body.preco
	});
	res.send(produto); // vai geral um JSON para ir para web
});

app.put('/produtos/:id', (req, res, next) => {
	const produto = bancoDeDados.salvarProduto({
		id: req.params.id,
		nome: req.body.nome,
		preco: req.body.preco
	});
	res.send(produto);
});

app.delete('/produtos/:id', (req, res, next) => {
	const produto = bancoDeDados.excluirProduto(req.params.id);
	res.send(produto);
});

app.listen(porta, () => {
	console.log(`Servidor está executando na porta ${porta}.`);
});
// npm i --save body-parser@1.18.2 -E
// instalando essa dependencia para transformar o parser em objeto,

// na linha 10 ,get = pegar, com o /produtos/:id vai trazer um produto especifico
// o parametro está na requisiçao(req) vem da requisiçao
// os parametros e a parti do parametro  obtenho alguma coisa
// e mando a resposta(res)
//- req.params é o local onde eu tenho os parametros
// que coloquei na URL (:id)
