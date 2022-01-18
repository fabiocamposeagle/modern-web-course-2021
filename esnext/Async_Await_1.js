function esperarPor(tempo = 2000) {
  return new Promise(function(resolve) { 
      setTimeout(() => resolve(), tempo)
  })
}
  
// esperarPor(2000) 
//   .then(() => console.log('Executando promise 1...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promise 2...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promise 3...'))

function retornarValorRapido() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000)
  })
}

async function retornarValorRapido() {
  return 20
  //  a promise foi resolvida na linha 21
  //  na linha 27 com await que faz mostrar o valor
}

async function executar() {
    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}
// tem que acessar o outro valor da linha 32 a partir do then
async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}
executarDeVerdade()


// a ideia por tras Async_Await vc tem um codido que parece sincrono 
// embora seja um codido asincrono
/* em vez de ele chamar a funçao then,     
ele vai ficar parado, esperando a execuçao 
e so vai para proxima linha quando ele terminar a execuçao
*/