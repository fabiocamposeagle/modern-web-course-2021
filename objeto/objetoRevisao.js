// coleção dinâmicas de pares chaves/valor
const produto = new Object();
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
	modelo: 'A4',
	valor: 70000,
	proprietario: {
		nome: 'Fábio',
		idade: 37,
		endereco: {
			logradouro: 'Rua falcon',
			numero: 207
		}
	}, // CRIEI MEU PRIMEIRO OBJETO
	condutores: [
		{
			nome: 'Junior',
			idade: 32
		},
		{
			nome: 'madson',
			idade: 23
		}
	],
	calcularValorSeguro: function () {
		//...
	}
};
// uma forma util de ter acesso aos atributos,
// usando string
carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante';
console.log(carro);

// delete carro.condutores
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);
