console.log(typeof Array, typeof new Array(), typeof []);
//typeof array = da function
//typeof new array = Object
//typeof [] = Object
let aprovados = new Array('Ana', 'fabio', 'red');
console.log(aprovados);

aprovados = ['Ana', 'fabio', 'red'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo';
aprovados.push('Abiã');
// Metodo push add novo elemento
console.log(aprovados.length);

aprovados[9] = 'Ryan';
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort();
// o sort vai alterar a array ordenando ele
console.log(aprovados);

delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Ana', 'fabio', 'red'];
aprovados.splice(1, 1);
// essa funcao splice serve add
//elementos de um indice e remover
// add elemento com ''
console.log(aprovados);
