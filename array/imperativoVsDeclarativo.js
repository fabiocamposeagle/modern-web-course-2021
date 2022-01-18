const alunos = [
	{ nome: 'João', nota: 7.9 },
	{ nome: 'Maria', nota: 9.2 }
];
// Objetivo calcular a media desses alunos!
// Abordagem imperativo - vou criar uma variavel total1 que recebe 0
// que  vou acumular os valores para depois calcular a media
// Imperativo
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
	total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);
// dentro do for estou percorrendo cada um dos alunos[I] pegando o indice dele
// PEGUE A NOTA .nota, e estou acrescentando uma atribuição aditiva (+=) no total1
// estou acrescentando e no final
// executo console.log(total / alunos.length)

// Declarativo
const getNota = (aluno) => aluno.nota;
const soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);
