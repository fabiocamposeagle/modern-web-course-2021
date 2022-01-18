let a = 3;

global.b = 3;

this.c = 456;
this.d = false;
this.e = 'teste';

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

// criando uma variavel maluca sem var
abc = 3; // isso nao se faz
console.log(global.abc);

// modulo. exports = { e: 456, f: false, g: 'teste}
