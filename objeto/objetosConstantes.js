// pessoa aponta para o endereco => 123 => {...}
const pessoa = { nome: 'Jack' };
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa ->456->{...}
// pessoa = {nome: 'ana'}

Object.freeze(pessoa); // congelando Objetos

pessoa.nome = 'Maria';
pessoa.end = 'Rua asd';
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'Jack' });
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante);
