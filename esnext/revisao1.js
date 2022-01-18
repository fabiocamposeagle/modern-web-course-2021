/* let e const
- o var tem escopo de funcao
- let tem escopo de bloco
*/
{
	var a = 2;
	let b = 3;
	console.log(b);
}
console.log(a);
/*  com o, a
foi definida a palavra reservada var ele nao tem escopo de bloco
- o let já tem escopo de bloco
/*
// Template string
 - O basic T string que é voce delimitar com as crazes,
  com os back tips , 
  e dentro da template string consigo colocar variáveis
  a parti de dolar $ delimitados por chaves{},(${  })
  quanto aquela string for interpretada vai ser interpolada 
  o valor da variavel vai ser interpretado
   o valor da variavel e ela cai ser substituida na string final 
*/
const produto = 'Ipad';
console.log(`${produto} é caro!`);

//Operador Destructuring é a forma de tirar
// de dentro de uma estrutura algo seja voce tirar dentro de um objeto
//  , tirar dentro de uma array , de uma string ,vc pode desestruturar
// as coisas a partir de do o destructuring
const [l, e, ...tras] = 'cod3r';
console.log(l, e, tras);
//entre o x e y botei uma , que ficou vazio
const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade: i, nome } = { nome: 'Ana', idade: 9 };
console.log(1, nome);
