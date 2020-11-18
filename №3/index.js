'use strict'

let firstNumber = +prompt('Укажите первое число', 2);

let mathOperator = prompt('Укажите математическую операцию', '* - + /');

let secondNumber = +prompt('Укажите второе число', 2);

let isValidFirstNumber = !isNaN(firstNumber)
	&& firstNumber !== null
	&& firstNumber !== '';

let isValidSecondNumber = !isNaN(secondNumber)
	&& firstNumber !== null
	&& firstNumber !== '';

if (isValidFirstNumber && isValidSecondNumber){
		if (mathOperator == '*'){
		alert(firstNumber * secondNumber);
		} else if (mathOperator == '/'){
			alert(firstNumber / secondNumber);
		} else if (mathOperator == '+'){
			alert(firstNumber + secondNumber);
		} else if (mathOperator == '-'){
			alert(firstNumber - secondNumber)
		} else{
			alert('Такую операцию не поддерживаю');
		}
} else{
	alert('Введите число!')
}





