/** contexto Lexico
 * no qual as coisas foram declaradas na linguagem
 * a funçao (function minhaFuncao)
 * carrega consigo no local que foi definido que esta na linha 10
 * elas vai procurar dentro do escopo Lexico
 * onde ela foi definida (function minhaFuncao)
 * vai procurar no lugar mais abrangente ,
 * nao no local de execução
 * MAIS SIM NO LOCAL QUE FOI DEFINIDA
 */
const valor = 'Global';

function minhaFuncao() {
	console.log(valor);
}

function exec() {
	const valor = 'Local';
	minhaFuncao();
}

exec();
// O escopo de uma variável é a faixa de
// comandos em que a mesma é visível
// Uma variável é visível em um comando se puder ser
// referenciada naquele comando ◦ Uma variável é local
// a uma unidade de programa se foi declarada nela
