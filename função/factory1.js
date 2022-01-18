// função  factory que no final sempre retorna um objeto
// factory (fabrica) tem o objetivo de fabricar uma estancia do objeto
//
function criarPessoas() {
	return {
		nome: 'Ana',
		sobrenome: 'Silva'
	};
}
console.log(criarPessoas());
