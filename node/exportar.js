console.log(module.exports);
console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;
console.log(module.exports);

exports = {
	NOME: 'Teste'
};

console.log(module.exports);

module.exports = { public: true };
/* voce percebe mesmo atribuindo null, para variavel exports 
   - o module.exports continua apontando para o que site
   - na linha 4, 5, 6 
   - o exports e simplesmente outra variavel que aponta
   -  para o mesmo objeto
   - tanto faz add a parti de moduleExports, 
   -  como diretamente exports,com rela;'ao ao this, com
    que vou apontar para mesma referencia em memoria 
   - this.a = 1 ,exports.b = 2 module.exports.c = 3
   - SO QUEM SERA RETORNADO SERA EXPORTADO A PARTI DE MODULO
   - E O MODULO.exports
   -
   - 
*/
