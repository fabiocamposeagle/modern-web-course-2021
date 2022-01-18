// Função em JS é First-Class Object ( Citizens)
// Higher-order function
// Objeto de primeira classe (cidadãos)
// Função de ordem superior

// criar uma forma literal
function fun1() {}

// Armazenar em uma variavél
const fun2 = function () {}; // invocar uma funçao dentro do parentese fun2

// Armazenar em uma array
const array = [
	function (a, b) {
		return a + b;
	},
	fun1,
	fun2
];
//Armazenar em um atributo de object
const obj = {};
obj.falar = function () {
	return 'I am going to Canada or elsewhere with the English language';
};
console.log(obj.falar());

// Passar função como param - parametro
function run(fun) {
	fun();
}
run(function () {
	console.log('Executando...');
});

// Uma função pode retor/conter uma função
function soma(a, b) {
	return function (c) {
		console.log(a + b + c);
	};
}
soma(2, 3)(4);
soma(2, 3)(4); // Armazenar em uma variavél const
const cincoMais = soma(2, 3);
