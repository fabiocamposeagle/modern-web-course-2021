// herança Já falei pra vocês que se você
// tiver que escolher entre herança e composição
// priorize a COMPOSIÇÃO mais flexível herança.
// A gente sabe que a herança é a capacidade é um príncipe
// da obra que faz com que você receba do seu pai
// digamos assim atributos e comportamentos que
// você usa e colhe o objetivo da herança.
// E você não precisará fazer um control C control V copiar tudo aquilo que está num determinado objeto

const ferrari = {
	modelo: 'F40',
	velMax: 324
};

const volvo = {
	modelo: 'V40',
	velMax: 200
};
console.log(ferrari.prototype);
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(ferrari.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
// toda funcao tem prototype
function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);

// quando uso __proto__ a parti disso (__) eu consigo acessar
// quem é o prototipo desse objeto,
// quem seria super objeto pai
