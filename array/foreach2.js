Array.prototype.forEach2 = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this);
	}
};
// Estrutura de controle, for (let i = 0; i < this.length; i++)
//  let i = 0, i < this, i tem que ser menor do que o tamanho do array
// e eu acesso o array dentro da funcao que pertence ao prototype,
// ou seja eu acesso a instancia de uma array a parti de variavel this
// 1++ esse laço vai percorrer do "1" elemento até o ultimo elemento,
// estrou percorrendo os indices
// dentro do for () vou chamar  a function(callback) passando 3 parametros:
// callback(this[i], i, this)
// THIS[i] passa o i (indice) ATUAL
// i valor atual
// this o array completo
//e esses são os 3 parametros que vc passa para uma funçao callback,
// que é passado por um forEach2

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach2(function (nome, indice) {
	console.log(`${indice + 1}) ${nome}`);
});
