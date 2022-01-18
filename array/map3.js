Array.prototype.map2 = function (callback) {
	const newArray = [];
	for (let i = 0; i < this.length; i++)
		[newArray.push(callback(this[i], i, this))];
	return newArray;
};
// O que vou fazer dentro desse map2?
// eu vou add dentro no novo array o elemento transformado
// apartir da chamada de uma (callback)
// eu vou passar o elemento vou passar o indice, o array original,
// e o resultado dessa callback vai ser add dentro do newArray
// - o que fiz
// criei uma nova array vazio, linha 2
// percorri o array original usando o this,na linha 3
// dentro de cada interação da nova array chamei a callback,
// passando o elemento atual, o indice,e o array original
// - e o resultado dessa callback na linha 4,
// eu coloquei dentro do novo array
// e finalmente eu retorno a nova array, linha 6

const carrinho = [
	'{ "nome": "Borracha", "preco": 3.45}',
	'{ "nome": "Borracha", "preco": 3.45}',
	'{ "nome": "kit de Lapis", "preco": 41.22}',
	'{ "nome": "Caneta", "preco": 7.50}'
];
const paraObjeto = (json) => JSON.parse(json);
const apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);
