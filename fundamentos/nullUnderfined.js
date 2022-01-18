let valor; // não iniciazada
console.log(valor);

valor = null; // ausência de valores
//console.log(valor).tostring()) //erro!

const produto = {};
console.log(produto.preco);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; // evite atributo underfined
console.log(produto.preco);
// delete produto.preco
console.log(produto);

produto.preco = null; // sem preco
console.log(!!produto.preco);
console.log(produto);
