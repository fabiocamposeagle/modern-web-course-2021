function Pessoa() {
	this.idade = 0;

	const self = this;
	// o self sempre vai apontar para Pessoa
	// usando a const self
	setInterval(
		function () {
			self.idade++;
			console.log(self.idade);
		} /*.bind(this)*/,
		1000
	);
}

new Pessoa();
