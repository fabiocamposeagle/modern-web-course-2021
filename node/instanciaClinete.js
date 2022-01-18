const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');
// POR PADRAO O NODE FAZ CACHE DOS OBJETOS RETORNADOS
// A PARTI DE UM REQUIRE
const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();
// COM require('./instanciaNova') EU RETORNO UMA FUNÇÃO
// () PARANTES RETORNA UM OBJETO ESTOU INVOCANDO A FUNÇAO RETORNADA
// OU SEJA ESTOU INVOCANDO A FUNCAO FACTORY
contadorA.inc();
contadorA.inc();
// INC FIZ DOIS INCREMENTO O RESULTADO GEROU 3
console.log(contadorA.valor, contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);
