// Json e um formato textual de dados
// que é diferente da anotação literal do objeto.
const obj = {
	a: 1,
	b: 2,
	c: 3,
	soma() {
		return a + b + c;
	}
};
console.log(JSON.stringify(obj));

// console.log(JSON.parse("{ a: 1 b: 2, c: 3 }")) syntaxError
// Regra de json deve ser delimitado por aspas duplas
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));
console.log(
	JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')
);
