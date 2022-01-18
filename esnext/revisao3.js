// ESB:  Object.values/Object.entries
//  objeto valor , pega valores de um objeto
// object.entries que vai mim dar chave e valor
// um conjunto uma  array de outros arrays
// e essa funçao vai da uma matriz ,
// uma array com varios array com chave e valor.
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.entries(obj));

// teve algumas melhorias na notação Literal
const nome = 'Carta';
const pessoa = {
	nome,
	ola() {
		return 'Oi gente!';
	}
};

console.log(pessoa.nome, pessoa.ola());

// Class usando a sintaxe de classe que eu  herança
// acaba sendo herança por prototipo acaba sendo
// cada um quanto como animal como  cachorro virando uma função
class Animal {}
class Cachorro extends Animal {
	falar() {
		return 'Au au!';
	}
}

console.log(new Cachorro().falar());
