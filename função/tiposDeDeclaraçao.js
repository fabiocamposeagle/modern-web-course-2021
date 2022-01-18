console.log(soma(3, 4));

// function declaration ( tipos de forma declaraçao de função )
function soma(x, y) {
	return x + y;
}
// function expression anonima
const sub = function (x, y) {
	return x - y;
};
console.log(sub(3, 4));

// named function expression
const mult = function mult(x, y) {
	return x * y;
};

console.log(mult(3, 4));
