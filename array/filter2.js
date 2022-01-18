// Dentro da funcao vamos implementar a funçao que filtra os elementos
Array.prototype.filter2 = function (callback) {
	const newArray = [];
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this[i])) {
			newArray.push(this[i]);
		}
	}
	return newArray;
};

const produtos = [
	{ nome: 'Cel Xaomi', preco: 2499, fragil: true },
	{ nome: 'Mi Band 5', preco: 4199, fragil: true },
	{ nome: 'PErfume', preco: 18.99, fragil: true },
	{ nome: 'Sanduiche', preco: 12.49, fragil: false }
];

const caro = (produto) => produto.preco >= 500;
const fragil = (produto) => produto.fragil;

console.log(produtos.filter2(caro).filter2(fragil));
