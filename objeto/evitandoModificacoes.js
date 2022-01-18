// Object.preventExtensions
// ele vai  prevenir, nao vai permitir que seu objeto
//seja estendido , vc nao vai conseguir add novos objetos
const produto = Object.preventExtensions({
	nome: 'Qualquer',
	preco: 1.99,
	tag: 'promoção'
});
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

// Object.seal , selar um Objeto
// o que acontece quando voce sela um Objeto:
// voce nao consegue add novos atributos, excluir Atributos do objeto
// que é a diferença que tem relação com preventExtensions
// mais voce consegue modificar valores dos atributos do objeto
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'; // nao conseguiu add sobrenome
delete pessoa.nome; // nao consegui deletar por esta selado
pessoa.idade = 29; // consegue alterar o valor
console.log(pessoa); // nao conseguiu

// Object.freeze = selado + valor constantes
// nada mais é o resultado de um objeto selado que, com valores constantes
// que pode ser alterados.
