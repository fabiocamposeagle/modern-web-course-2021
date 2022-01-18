// tagged Templates - processa o template dentro de uma função
function tag(partes, ...valores) {
	console.log(partes);
	console.log(valores);
	return 'Outra string';
}

const aluno = 'Gui';
const situacao = 'Aprovados';
console.log(tag`${aluno}, está ${situacao}.`);
