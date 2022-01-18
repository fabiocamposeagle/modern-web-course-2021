// ls - é usado para ver os arquivos quem tem na sua pasta
// node entradaESaida.js -a (-a é uma flag)

const anonimo = process.argv.indexOf('-a') !== -1;
console.log(anonimo);

if (anonimo) {
	process.stdout.write('Fala Anônimo!\n');
	process.exit();
} else {
	process.stdout.write('Informe seu nome: ');
	process.stdin.on('data', (data) => {
		const nome = data.toString().replace('\n', '');

		process.stdout.write(`Fala ${nome}!!\n`);
		process.exit();
	});
}
//  node entradaESaida.js -a
