/**Estrutura de controle while
 * 
 *Ele é uma estrutura que é mais apropriada,
 uma estrutura desenhada para quando 
 vc tem uma quantidade indeterminada de repetition
 while - é uma estrutura baseada em verdadeira ou falso                                                        
 */

function getInteiroAleatorioEntre(min, max) {
	const valor = Math.random() * (max - min) + min;
	return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
	opcao = getInteiroAleatorioEntre(-1, 10);
	console.log(`Opção escolhida foi ${opcao}.`);
}

console.log('Até a proxima');
