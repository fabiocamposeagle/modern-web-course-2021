const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // exemplo o massa quebrou o carro!
// o que esse metodo pop faz, remove o ultimo elemento do array
console.log(pilotos);

pilotos.push('Verstappen'); //acrescenta para ultima posição
console.log(pilotos);

pilotos.shift(); // remove o primeiro! elemento de uma array
console.log(pilotos);

pilotos.unshift('Hamilton'); // unshift add a array para a posição do primeiro elemento
console.log(pilotos);

// o metodo splice pode add ou remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// remover element
pilotos.splice(3, 1); // massa quebrou
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2);
// novo array metodo slice (pegar um pedaço)
//pega uma array apartir do indice 2 em diante.
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
// em teoria pegaria o elemento de 1 a 4
// mais vai gerar uma nova array com elementos de 1 a 3.
console.log(algunsPilotos2);
