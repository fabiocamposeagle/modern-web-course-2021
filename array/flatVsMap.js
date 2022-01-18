const escola = [
	{
		nome: 'Turma M1',
		alunos: [
			{
				nome: 'Gustavo',
				nota: 8.1
			},
			{
				nome: 'Ana',
				nota: 9.3
			}
		]
	},
	{
		nome: 'Turma M2',
		alunos: [
			{
				nome: 'Rebeca',
				nota: 8.9
			},
			{
				nome: 'Roberto',
				nota: 7.3
			}
		]
	}
];

const getNotaDoAluno = (aluno) => aluno.nota;
const getNotasDaTurma = (turma) => turma.alunos.map(getNotaDoAluno);

const notas1 = escola.map(getNotasDaTurma);
console.log(notas1);

console.log([].concat([8.1, 9.3], [8.9, 7.3]));

Array.prototype.flatmap = function (callback) {
	return Array.prototype.concat.apply([], this.map(callback));
};
const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);
// criei minha estrutura que vou navegar e
// a ideia é extrair as notas de todos os alunos independe das turmas
// então vou querer as notas: 8.1, 9.3, 8.9, 7,3
// 1 vou extrair a notas dos alunos, da linha 21
// 2 o proximo passo é extrair de dentro da turma todas as notas da turma,linha 22
// escola é uma array, formada por objetos que represante uma turma ,
// dentro da turma eu tenho uma lista de alunos, que tambem é uma array
// por ser uma array ele vai ter um metodo map, que vou querer converter nesse map,
// converter o objeto do tipo aluno, para APENAS a nota do aluno
// quando voltar a parti desse map turma.alunos.map(getNotaAluno)
// eu vou ter uma array com as notas de cada uma das turmas
// no caso a turma M1 e M2
//
