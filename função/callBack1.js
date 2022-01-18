const fabricantes = ['Mercedes', 'Audi', 'BMW'];

function imprimir(nome, indice) {
	console.log(`${indice + 1}. ${nome}`);
}
/** funçao callback - a ideia de call beck passar uma funçao
 * para outra funçao,e como determinado esse evento acontecer
 *  essa funçao que eu passei ;
 * Vai ser disparada, vai ser chamada de volta,
 *
 *  vai chamar a funçao da linha 11 (imprimir) para cada elemento
 *  que ele for encontrado
 * E aí ele vai passar os parâmetros corretos vai pra
 * mim no console vale o nome.
 */
fabricantes.forEach(imprimir);
/** forEach é uma funcao de fabricantes que é uma array
 * dentro da array tem essa função array
 * e para cada elemento do array ele chama a funçao imprimir
 * e o forEach vai passar como parametro
 *  para essa funçao o  nome que ela ta percorrendo
 * e tambem como segundo parametro vai passar o indice
 */
