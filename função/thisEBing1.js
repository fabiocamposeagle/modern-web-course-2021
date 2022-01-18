const pessoa = {
	saudade: 'Bom dia!',
	falar() {
		console.log(this.saudade);
	}
};

pessoa.falar();
const falar = pessoa.falar;
falar(); // deu undefined conflito entre paradigmas; funcional e Oo

const falarDePessoa = pessoa.falar.bind(pessoa);
// O bind é responsável para amarrar determinado objeto
// para ele ser o dono da execução daquele método sempre
// que esse método for chamado
falarDePessoa();
