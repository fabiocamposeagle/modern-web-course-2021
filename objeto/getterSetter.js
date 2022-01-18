// convenção estou convencionando , estou mostrando,
// para os desenvolvedores que essa variavel '_valor1'
// é pretendida ser acessada apenas internamente
// getter(get) e setter(set) são funções e dentro dessas funções
// são valores q sao acessadas,
// qual a vantagem de acessar um valor em cima de uma função?
// a vantagem que vc pode fazer algum tipo de validação, t de processamento
// antes de devolver o  valor da variavel.
const sequencia = {
	_valor: 1,
	get valor() {
		return this._valor++;
	},
	set valor(valor) {
		if (valor > this._valor) {
			this._valor = valor;
		}
	}
};

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor);
