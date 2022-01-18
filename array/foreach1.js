const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function (nome, indice) {
	console.log(`${indice + 1}) ${nome}`);
});
// no forEach vou passar uma callback e ele vai chamar
// para cada interação que foi feita numa array
// a rai aprovados quando executar o primeiro elemento Agatha
// ele vai chamar a função passando o ${nome} 'Agatha',
// e o indice 0 Na execução do indice 0 eu somei mais 1 ${INDICE + 1}
// para o numero começar de 1

//outro exemplo com arrow function sem indice
aprovados.forEach((nome) => console.log());

const exibirAprovados = (aprovado) => console.log(aprovado);
aprovados.forEach(exibirAprovados);
