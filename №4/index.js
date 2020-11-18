const randomNumber = Math.floor(Math.random() * 6);

let userNumber = prompt('put in some number', );

if (userNumber == randomNumber) {
			alert('good job');
		}

while (userNumber != randomNumber) {
	alert('another try'); 
	userNumber = prompt('put in some number', );	

		if (userNumber == randomNumber) {
			alert('good job');
		} else if(userNumber === null){
			break;
		}
}

