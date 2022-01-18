/*function criarProduto(nome, preco, desconto) {
    return {
        nome: 'macarrão',
        preco: 'R$27,00',
        desconto: 0.1

    }
}

console.log(criarProduto())
*/
//EXEMPLO 2 - outra forma
function criarProduto(nome, preco) {
	return {
		nome,
		preco,
		desconto: 0.1
	};
}

console.log(criarProduto('Notebook', 2199.71));
console.log(criarProduto('ipad', 1199.71));
