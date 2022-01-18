//console.log(global)
global.MinhaApp = Object.freeze({
	saudacao() {
		return 'Estou em todos os lugares';
	},
	nome: 'Sistema Local'
});
/* Dentro do escopo global eu inserir Object.freeze
    com ele eu congelei o que vai executar o qua vai retornar 
    na linha 4 
 */
