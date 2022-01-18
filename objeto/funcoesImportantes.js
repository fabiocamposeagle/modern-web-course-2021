const pessoa = {
	nome: 'Rebeca',
	idade: 2,
	valor: 13
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => {
	console.log(`${chave}: ${valor}`);
});
//definir uma propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
	enumerable: true, // nao aceita a escrita
	writable: false, //nao aceita a escrita
	value: '01/01/2019'
	// funciona como freeze,
	//  vai ficar esse valor original
});

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object .assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
// assign é uma forma de concatenar
// vários objetos em um só
//console.log(dest)
Object.freeze(obj);
obj.c = 1234;
console.log(obj);
