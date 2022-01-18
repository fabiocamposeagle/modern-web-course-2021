/* voce usa promises quando voce quer ter algum 
  tipo de processamento assintrono - 
  Dpendendo da promessa pode ser aceita ou rejeitada
 */
 // aqui vou da um delei como fosse simulando uma situraçao um tempo maior de processamento
 
function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
        resolve(frase)
    }, segundos * 1000)
  })
}
falarDepoisDe(3, 'Que legal!')
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log(e))
// catch eu chamo um tratamento de erro

//com o 'then' posso encadear varias chamadas um atras das outra
// a funcao then é chamada quando resolve promise ,resolve(frase)
// passsando 