1. 2 minutos 
function even_or_odd () {
	// Laço para exibição dos números
	for (let i = 100; i > -1; i--) {

		// Se o resto da divisão do número por 2 for zero
		if (i%2 == 0) {
			console.log(i + ' - Par');
	    }
		else {
			console.log(i + '  - Ímpar');
	    }
	}
}

even_or_odd();

2. 8 minutos
// Variável para teste
var items = [{preco: 1.75, quantidade: 3}, {preco: 0.25, quantidade: 2}];

function order_price (items) {
	var highest = 0;
	var sum_price = 0;
	var sum_qt = 0;
	items.forEach(function (item) {
		// Se o preço for o mais alto até o momento do loop
		if (item.preco > highest) {
			highest = item.preco;
        }
        // Preço do pedido recebe o valor do item multiplicado por sua quantidade
		sum_price += item.preco * item.quantidade;
		// Quantidade de itens do pedido recebe a quantidade do item
		sum_qt += item.quantidade;
	});
	
	// Definindo a porcentagem de acordo com a quantidade de itens
    let percent = (sum_qt < 5) ? 48 : 37;

    // Total de impostos
	let tax = highest * (percent / 100);

	// Preço total com impostos
	sum_price += tax;
	
	// Preço total com arredondamento de 2 casas nos centavos
	return sum_price.toFixed(2);
}

order_price(items);

3. 5 minutos
function fibonacci (n) {
	// Definição dos dois primeiros números para iniciar a sequência
	let first_number = 0;
	let second_number = 1;

	// Inserção dos dois primeiros números no array
	let array = [];
	array.push(first_number, second_number);

	// Laço para geração da sequência
	for (let i  = 2; i < n; i++) {
		// Variável auxiliar recebe o primeiro número
		let aux = first_number;
		first_number = second_number;
		//O segundo número se torna a soma dele mesmo com o valor do anterior
		second_number += aux;
		// Inserindo o valor no array
		array.push(second_number);
    }

	return array;
}

fibonacci(9);

4. 16 minutos
function draw_pyramid (n) {
	let character = '';
	// Pular a primeira linha, para que as aspas da string não quebrem o desenho
	let pyramid = '\n';

	// Laço para gerar a pirâmide
	for (let i = 1; i <= n; i++) {
		// Se for a primeira linha, inserir apenas um asterisco
		if (i > 1) {
	        character = '*' + character;
	    }
	    // Inserindo um asterisco a mais para manter uma quantidade ímpar
	  	character += '*';
	  	// A linha da pirâmide é a combinação entre a quantidade de espaços e de asteriscos
	 	pyramid += (" ".repeat(n - i + 1) + character) + '\n';
	 }

	 return pyramid;
}

draw_pyramid(8);

 5. 1 minuto
function sort_numeric_asc (array) {
	// Ordenação do array
	array.sort(function(a, b) {
		// Ordem crescente entre um par de números
		return a - b;
    });
	return array;
}
sort_numeric_asc([0, 15, 99, 358, 1, 7]);

6. 5 minutos
function coin_toss () {
	// Geração da porcentagem de chance
    var chance = Math.random() * 100;
	
	// Se a chance for menor igual a 49.5
    if (chance <= 49.5) {
        return 'Cara!';
    }
    // Se a chance for maior que 49.5 e menor ou igual a 99
    else if (chance <= 99) {
        return 'Coroa!';
    }
    // Se a chance estiver entre 99 e 100
    else {
        return 'Empate!';
    }
}

coin_toss();

7. 9 minutos

var message = 'JOTA4ENE1TEAGA1ENE 2AGA 5EME CE1ERRE1 EMETE4 ELE2GE1ELE';

function translate (message) {
	// Array de comparação para vogais
	var vowels = [{original: '1', translation: 'A'}, {original: '2', translation: 'E'}, {original: '3', translation: 'I'}, {original: '4', translation: 'O'}, {original: '5', translation: 'U'}];

	// Array de comparação para consoantes
	var consonants = [{original: 'BE', translation: 'B'}, {original: 'CE', translation: 'C'}, {original: 'DE', translation: 'D'}, {original: 'EFE', translation: 'F'}, {original: 'GE', translation: 'G'}, {original: 'AGA', translation: 'H'}, {original: 'JOTA', translation: 'J'}, {original: 'KA', translation: 'K'}, {original: 'ELE', translation: 'L'}, {original: 'EME', translation: 'M'}, {original: 'ENE', translation: 'N'}, {original: 'PE', translation: 'P'}, {original: 'QUE', translation: 'Q'}, {original: 'ERRE', translation: 'R'}, {original: 'ESSE', translation: 'S'}, {original: 'TE', translation: 'T'}, {original: 'VE', translation: 'V'}, {original: 'DABLIO', translation: 'W'},  {original: 'XIS', translation: 'X'}, {original: 'IPSILON', translation: 'Y'}, {original: 'ZE', translation: 'Z'}];

	// Laço para percorrer a mensagem
	for (let i = 0; i < message.length; i++) {
		// Traduzir cada vogal
        vowels.forEach(function (vowel) {
            message = message.replace(vowel.original, vowel.translation);
        });

		// Traduzir cada consoante
        consonants.forEach(function (consonant) {
            message = message.replace(consonant.original, consonant.translation);
        });
    }

	return message;
}

translate(message);

Bonus 1. 38 minutos
function bonus_1 () {
    //gone representa os que já atravessaram, e to_go representa os que ainda atravessarão
    var to_go = [{name: 'A', time: 1}, {name: 'B', time: 2}, {name: 'C', time: 5}, {name: 'D', time: 8}];
    var gone = [];
    var total_time = 0;

    //Encontrar os dois mais rápidos para a primeira travessia
    var first = to_go[0].time;
    var index;
    to_go.forEach(function (person, i) {
        if (person.time <= first) {
            first = person.time;
            index = i;
        }
    });

    gone.push(index);

    var second = Infinity;
    to_go.forEach(function (person, i) {
        if (person.time != first && person.time < second) {
            second = person.time;
            index = i;
        }
    });

    total_time += to_go[index].time;
    gone.push(index);

    //O mais lento dos dois primeiros deve permanecer
    total_time += to_go[gone[0]].time;

    gone = to_go.splice(gone[1], 1);

    //Os dois mais lentos do novo grupo a atravessar devem ir juntos
    var first = to_go[0].time;
    var index = 0;	

    to_go.forEach(function (person, i) {
        if (person.time > first) {
            first = person.time;
            index = i;
        }
    });

    total_time += to_go[index].time;

    var result = []; 
    result.push(index);

    var second = -Infinity;
    to_go.forEach(function (person, i) {
        if (person.time != first && person.time > second) {
            second = person.time;
            index = i;
        }
    });

    result.push(index);

    for (i = result.length; i > 0; i--) {
        gone.push(to_go.splice(i, 1)[0]);
    }

    //O mais rápido dos que já atravessaram deve retornar
    var first = gone[0].time;

    var index;
    gone.forEach(function (person, i) {
        if (person.time <= first) {
            first = person.time;
            index = i;
        }
    });
    total_time += gone[index].time;

    to_go.push(gone.splice(index, 1)[0]);

    //Os dois restantes juntam-se aos que já atravessaram
    total_time += (to_go[0].time > to_go[1].time) ? to_go[0].time : to_go[1].time;

    gone.push(to_go);

    return total_time;
}

bonus_1();

Bonus 3. 23 minutos
function bonus3 (number) {
	var array = [];
	// Inserir números no array até o tamanho selecionado
	for (let i = 1; i <= number; i++) {
		array.push(i);
    }

    // Removendo o primeiro número
    array.splice(0, 1);

    // Enquanto não restar apenas 1 elemento no array
    while (array.length > 1) {
        for (let j = 1; j <= number; j+=2) {
        	// Removendo um número, pulando o anterior
            array.splice(j, 1);
        }
    }

	return array;
}

bonus3(10);