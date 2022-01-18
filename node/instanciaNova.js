// uma factory retorna um nova instancia objeto
module.exports = () => {
	return {
		valor: 1,
		inc() {
			this.valor++;
		}
	};
};
