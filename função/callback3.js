// Exemplo de callback no browser
// chamar uma funçao que acessar os elementos
// a partir de uma tag com o método getElementByTagName()
/** ele vai retornar uma array, se tiver uma única tag "bady"
 *  de determinado tipo, voce tem que acessar o primeiro indice
 *  para ter acesso a especificamente aquele elemento
 */
document.getElementsByTagName('body')[0].onclick = function (e) {
	console.log('O evento ocorreu!');
};
// No console do browser
/** No exemplo acima vai ser o evento do click do mouse
 * uma vez que registrado uma funçao no console,
 * quando clicar na pagina um evento acorreu
 * se der um refresh (atualizar a pagina )e limpar no console do browser
 * e clicar no body no corpo da pagina, nao vai acontecer nada
 *  _ PORQUE A FUNÇAO DE CALLBACK NAO FOI REGISTRADA
 *
 */
