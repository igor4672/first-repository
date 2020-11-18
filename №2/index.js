let secondsInDay = 24 * 60 * 60,
	secondsInMonth_31days = secondsInDay * 31,
	secondsInMonth_30days = secondsInDay * 30,
	secondsInMonth_28days = secondsInDay * 28,
	secondsInYear = secondsInMonth_31days * 7 + secondsInMonth_30days * 4 + secondsInMonth_28days,
	myAgeInMinutes = secondsInYear / 60 * 24;  
console.log( secondsInDay, secondsInMonth_31days, secondsInMonth_30days, secondsInMonth_28days, secondsInYear, myAgeInMinutes);	