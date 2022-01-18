class Pessoa {
	constructor(nome) {
		this.nome = nome;
	}

	falar() {
		console.log(`Meu nome é ${this.nome}`);
		// O que estou fazendo é acessar o atributo,
		// nome através do this.nome
	}
}

const p1 = new Pessoa('FABIO CAMPOS');
p1.falar();

const criarPessoa = (nome) => {
	return {
		falar: () => console.log(`Meu nome é ${this.nome}`)
	};
};

const p2 = new Pessoa('Fabio Campos');
p2.falar();
/** chamei new pessoa
 * passei a string (joão), foi passada para o construtor
 * no momento que coloquei "this.nome" significa que a
 * variavel nome significa que essa variavel nome se tornou publica
 * então vou ter o acesso a essa variavel
 * sempre que eu quiser.
 *  - APARTIR DA INSTANCIA DESSA
 * CLASSE CONST "P1" VAI ESTA Accessible
 *
 */
