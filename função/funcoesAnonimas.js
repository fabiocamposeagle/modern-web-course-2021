const soma = function (x, y) {
	return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
	console.log(operacao(a, b));
};

imprimirResultado(3, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(3, 4, function (x, y) {
	return x - y;
});
imprimirResultado(3, 4, (x, y) => x * y);
// função arrow function (=>) , dada uma função anonima
// funçao anonima dentro do objeto
const pessoa = {
	falar() {
		console.log('Boa');
	}
};

pessoa.falar();
