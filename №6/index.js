/*Написать функцию, которая принимает аргумент n и возвращает сумму чисел от 0 до n

sum(3) // 1 + 2 + 3 // 6

Написать 2 реализации - через циклы и рекурсию*/


// реалізація через цикл

/*function sum(n) {
	for (let i = n - 1; i < n; i--) {

		if (i == 0){

			break

		} else {

			n += i;

		}

	}

	alert(n)
}

sum(+prompt('put in some number', 3)) */



//реалізація через рекурсію

function sum(n){
	return n === 1 ? n : n + sum(n - 1);
}

alert(sum(+prompt('put in some number', 3)));
