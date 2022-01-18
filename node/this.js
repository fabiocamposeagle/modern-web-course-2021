// vamos ver o comportamento do this dentro dos modules
/* this é restritamente(===) igual a global
dentro do modulo do node?
*/
// o this dentro de uma função ele aponta para global
/* 
O this fora de uma função dentro de um modulo ele aponta para
para module.exports 
*/
console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis() {
	console.log('Dentro de uma função...');
	console.log(this === exports);
	console.log(this === module.exports);
}

logThis();
// dentro de uma função o this nao aponta para exports
// mais fora de uma função ele aponta
