/** O arrow
 * - tem a funçao de ser mais curta uma sintaxe mais reduzida
 * - e tem uma caracteristica forte que motivou essa funçao arrow
 * é o fato de ter um vies associado ao contexto no qual a funçao arrow
 * foi escrita e só irá focar um pouco maia na sintaxe reduzida.
 */

let dobro = function () {
	return 2 * a;
};
// forma reduzida function por "=>"
dobro = (a) => {
	return 2 * a;
};

dobro = (a) => 2 * a; // return esta implicito
console.log(dobro(Math.PI));

let ola = function (a) {
	return 'Olá';
};

ola = () => 'Olá'; // forma padrão
ola = (_) => 'Olá'; // possui um parametro
console.log(ola());
//
