const imprimirResultado = function (nota) {
	switch (Math.floor(nota)) {
		/** importa o switch e feita para multiplas seleções,
		 * a expressao em parentese retorna um valor inteiro
		 * _ padrao break para executar
		 * o default pode por em qualquer lugar nao esquecendo o break
		 * pode por varios cases para uma Sentença
		 */
		case 10:
		case 9:
			console.log('Quadro de honra');
			break;
		case 8:
		case 7:
			console.log('Aprovado');
			break;
		case 6:
		case 5:
		case 4:
			console.log('Recuperação');
			break;
		case (3, 2, 1, 0):
			console.log('Reprovado');
			break;
		default:
			console.log('Nota inválida');
	}
};

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);
