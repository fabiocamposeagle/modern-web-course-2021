// file system(fs) é um modulo que ja tem interno no node
/* sincrono ... 
é um cuidado que tenho que ter se for um arquivo pesado
ele vai ficar travando ivint loop ele vai ficar párado
de forma asincrono esperando o arquivo completamente 
dai vc nao esta delegando essa questao do io asincrono,
e esta colocando diretamente dentro do ivint loop esse tempo
e ele vai ficar parado esperando ler o arquivo completamente
para ele so entao despachar isso para atender a proxima requisição.
tem que ter cuidado pq é uma estrategia nao muito interessante
para trabalhar com IO : leitura de arquivos, escrita de arquivos, 
acesso a uma requisição remoto por exemplo; manda uma requisição 
para o banco de dados tudo isso envolve um tempo de requisição consideravel
e isso vai travar o ivint loop se nao fizer de forma correta  
*/
const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf8');
console.log(conteudo);

//assincrono..
fs.readFile(caminho, 'utf8', (err, conteudo) => {
	const config = JSON.parse(conteudo);
	console.log(`${config.db.host}:${config.db.port}`);
});

const config = require('./arquivo.json');
console.log(config.db);

fs.readdir(__dirname, (err, arquivos) => {
	console.log('conteudo da pasta...');
	console.log(arquivos);
});
//__dirname é uma constante que esta presente
// em todos os arquivos no node, em todos os modulos do node,
// que representa o diretório atual
//
