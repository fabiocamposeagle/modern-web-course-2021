/** a expressao (contador <=10 )
 * fazer algo para que o contador seja modificado
 *  para quer em determinado momento
 * contador seja maior que 10
 * passe a ser falso e sair do laço
 *  linha 9 // declaraçao de uam variavel
 * // expressao para dizer se continua no laço
 */

let contador = 1;
while (contador <= 10) {
	console.log(`contador = ${contador}`);
	contador++;
}

for (let i = 1; i <= 10; i++) {
	console.log(`i = ${i}`);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for (i = 0; i < notas.length; i++) {
	console.log(`nota = ${notas[i]}`);
}

/**  propriedades de uma array notas.length
 * navegando uma array ate chegar no tamanho do array
 * ele vai sair do laço
 */
