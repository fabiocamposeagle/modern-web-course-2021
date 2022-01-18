// Cadeia de protótipos (prototipo chain)
Object.prototype.attr0 = '0'; //NÃO FAZER ESSE CADEIA EM CASA!
//
const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B', attr3: '3' };
const filho = { __proto__: pai, attr3: 'C' };
console.log(filho, attr0, filho.attr1, filho.attr2, filho.attr3);

// EXEMPLO
const carro = {
	velAtual: 0,
	velMax: 200,
	acelerarMais(delta) {
		if (this.velAtual + delta <= this.velMax) {
			this.velAtual += delta;
		} else {
			this.velAtual = this.velMax;
		}
	},
	status() {
		// SOBRESCREVENDO PARA REVERENCIAR
		// O METODO QUE ESTA NO PROTOTIPO QUE ESTA NO OBJETO
		return `${this.velAtual}Km/h de ${this.velMax}km/h`;
	}
};

const ferrari = {
	modelo: 'F40',
	velMax: 324 // shadowing quando vc tem um sombreamento privado
};

const volvo = {
	modelo: 'V40',
	status() {
		return `${this.modelo}: ${super.status()}`;
	}
};
// metodo relação de prototipo entre dois objetos
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());
