//Arrow Function
const soma = (a, b) => a + b;
console.log(soma(2, 3));

// Arrow Function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// parametro default
// é vc ter a capacidade em cima de um atributo de uma funçao (texto),
// definir um valor padrão pra ele ('NOde')
function log(texto = 'Node') {
	console.log(texto);
}

log(); // com log ele assume um valor padrão , esse assume o valor padrão
log('Sou mais forte'); // esse é uma chamada passando um parametro

// Operador rest
function total(...numeros) {
	let total = 0;
	numeros.forEach((n) => (total += n));
	return total;
}
console.log(total(1, 2, 3, 4, 5));
// eu passei os paramentros todos espalhados, os parametros da função
// e esse operador fez com que fez com que eu juntasse agrupasse todos esses parametros
// em uma estrutura do tipo array, vc pode trabalhar com esse array que é numeros,
// internamente dentro da function que acabei de fazer
