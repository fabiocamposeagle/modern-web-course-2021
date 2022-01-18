
// outra forma reduzida no qual gera o mesmo valor
//outro exemplo
p.then(function(valor) {
  console.log(valor)
}) 

//a promise só pode passar um unico valor.!
//  a promise, usando o conceito de callback
// voce passa a funçao como parametro , e essa funcao 
// é chamada no momento que a promessa for comprida
// variavel let ,objeto .p 
// posso gerar na promessa um objeto (x:3, y:4),
// uma array de dados lista com nomes de valores

//const  primeiroElemento = (array) =>array[0]

const  primeiraLetra = arrayOuString => arrayOuString [0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise (function(resolve) {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
  .then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(v => console.log(v))
  .then(console.log)
 

/* p 
.then(valor => valor[0])
.then(primeiro => primeiro[0])
.then(letra => letra.toLowerCase())
.then(letraMinuscula => console.log(letraMinuscula))
*/




