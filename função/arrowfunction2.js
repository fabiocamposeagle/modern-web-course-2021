function Pessoa() {
	this.idade = 0;

	setInterval(() => {
		this.idade++;
		console.log(this.idade);
	}, 1000);
} // contexto lexico

new Pessoa();
