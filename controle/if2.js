function teste1(num) {
	if (num > 7) console.log(num);

	console.log('Final');
}

teste1(6);
teste1(8);

function teste2(num) {
	if (num > 7);
	{
		// SENTENÇA DE CODIGO VAZIA TERMINADA COM ;
		console.log(num); // ESSE BLOCO NAO ESTA ASSOCIADO AO if
	}
}

teste2(6);
teste2(8);
