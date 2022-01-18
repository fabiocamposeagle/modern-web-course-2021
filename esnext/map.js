const tecnologias = new Map();
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

console.log(tecnologias.react); // undefined ,forma errada
console.log(tecnologias.get('react').framework);
// console.log(tecnologias.get('angular').framework)

const chavesVariadas = new Map([
	[function () {}, 'Função'],
	[{}, 'Objeto'],
	[123, 'Numero']
]);

chavesVariadas.forEach((vl, ch) => {
	console.log(ch, vl);
});

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);
// has()  que a funçao que diz
// se um elemento esta ou nao contido  dentro do map
// o atributo .size para dizer quantos elementos estão presente dentro do map

chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b');
console.log(chavesVariadas);
