const carrinho = [
	'{ "nome": "Borracha", "preco": 3.45}',
	'{ "nome": "Borracha", "preco": 3.45}',
	'{ "nome": "kit de Lapis", "preco": 41.22}',
	'{ "nome": "Caneta", "preco": 7.50}'
];
// exercicio Retornar uma array apenas os preços
const paraObjeto = (json) => JSON.parse(json);
const apenasPreco = (produto) => produto.preco;
// converte um texto para objeto

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);
// executando vou ter vou ter constante resultado = carrinho.map(paraObjeto)
// no final desse metodo vou ter uma array de 4 elementos com 4 objetos
// que representão cada um deles elementos(json) sendo feito o parse para objetos
// e depois chamo o map para extrair apenaspreco e o resultado vou imprimir no console.log()
