const fs = require('fs');

const produto = {
	nome: 'Celular',
	preco: 1249.99,
	desconto: 0.15
};

fs.writeFile(
	__dirname + '/arquivoGerado.json',
	JSON.stringify(produto),
	(err) => {
		console.log(err || 'Arquivo.salvo');
	}
);
// Escrevendo um arquivo metodo writeFile
// aqui no file system leio a linha 9 e 10  , com writeFile escrevi um arquivo ,
// dei o nome a ele escrevendo com __dirname para arquivoGerado.json
// com JSON.stringify persistir para ser criado.
