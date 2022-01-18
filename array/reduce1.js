const alunos = [
	{ nome: 'João', nota: 7.3, bolsista: false },
	{ nome: 'Maria', nota: 9.2, bolsista: true },
	{ nome: 'Pedro', nota: 9.8, bolsista: false },
	{ nome: 'Ana', nota: 8.7, bolsista: true }
];

console.log(alunos.map((a) => a.nota));
const resultado = alunos
	.map((a) => a.nota)
	.reduce(function (acumulador, atual) {
		console.log(acumulador, atual);
		return acumulador + atual;
	}, 0);
console.log(resultado);
// temos uma array alunos. passando o map(a => a.nota),
// o reduce recebe uma callback(acumulador, atual)
// alem do valor atual vai passar o indice e tambem o array original que esta sendo
// percorrido a parti do reduce.
// internamento dentro do reduce tem um FOR que vai percorrer cada um dos elementos
// para chamar essa function
// sempre passando o valor esse acumulador que é o resultado da callback anterior
