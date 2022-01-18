function getInteiroAleatorioEntre(max, min) {
	const valor = Math.random() * (max - min) + min;
	return Math.floor(valor);
}
//( != ) retorna true se os operandos não
//têm o mesmo valor; caso contrário,
//ele retorna false
let opcao = -1;

do {
	opcao = getInteiroAleatorioEntre(-1, 10);
	console.log(`Opção escolhida foi ${opcao}.`);
} while (opcao != -1);

console.log('Até a proxima');
