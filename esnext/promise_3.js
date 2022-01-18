// destraction - ler os atributos de dentro de uma estrutura 
// ex const [x, y, z] = a
// na linha 6 estou destruturando invertendo o valor das duas variaveis
// [max, min] (desse lado um destructing) = [min, max] desse array
function gerarNumeroEntre(min, max) {
    if(min > max)  [max, min] = [min, max]
    return new  Promise (resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min 
        resolve(aleatorio)
    })
}
gerarNumeroEntre(1, 60)
  .then(num => num * 10)
  .then(numX10 => `O numero gerado foi ${numX10}`)
  .then(console.log)

// A função parseInt converte seu primeiro argumento para uma string,
// analisa, e retorna um inteiro ou NaN
// A função Math.random(aleatorio)() retorna um número pseudo-aleatório no intervalo [0, 1[,
// ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), 
//que depois você pode dimensionar para um intervalo desejado
// O método .then() retorna uma Promise