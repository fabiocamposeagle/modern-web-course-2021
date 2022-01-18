function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
      try {
        con.log('temp') 
        if(Math.random() < chanceErro) {
          reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
      } catch(e) {
          reject(e)
      }
    })
}
/* existe um erro na linha 4
    e na linha 24 ,caiu no tratamento 
*/
// tratando esse erro  da linha 13  .then(v => console.log...)
//  com o metodo .catch na linha 14
funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then( 
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )  
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))
