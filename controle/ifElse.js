const imprimirResultado = function (nota) {
	if (nota >= 7) {
		console.log('Aprovador!');
	} else {
		console.log('Reprovado!');
	}
};

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa!'); // cuidado com esse epa !!! È um err
