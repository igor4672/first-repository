'use strict'

for (let i = 0; i < 10; i++){
	let star = '*';

		for (let k = 0; k < i; k++ ) {
			star += '*';
		}


	console.log(star);
}

/* 1) i = 0, i < 5 ----> star = '*' ----> 
	 1.1) k = 0, оскільки k !< i ----> star += '*' не спрацьовує ----> 
	 1.2) console.log (*)
   
   2) i = 1, i < 5 ----> star = '*' ----> 
    2.1) k = 0, k < i ----> star += '*' ---->  
   	2.2) k = 1, оскільки k !< i ----> star += '*' не спрацьовує ----> 
   	2.3) console.log(**) 
   
   3) i = 2, i < 5 ----> star = '*' ---->
    3.1) k = 0, k < i ----> star += '*' ---->
   	3.2) k = 1, k < i ----> star += '*' ----> 
   	3.3) k = 2, оскільки k !< i ----> star += '*' не спрацьовує ----> 
   	3.4) console.log(***)

   4) i = 3, i < 5 ----> star = '*' ----> 
    4.1) k = 0, k < i ----> star += '*' ----> 
    4.2) k = 1, k < i ----> star += '*' ----> 
    4.3) k = 2, k < i ----> star += '*' ----> 
    4.4) k = 3, оскільки k !< i ----> star += '*' не спрацьовує ----> 
    4.5) console.log(****)

   5) i = 4, i < 5 ----> star = '*' ---->
	4.1) k = 0, k < i ----> star += '*' ----> 
    4.2) k = 1, k < i ----> star += '*' ----> 
    4.3) k = 2, k < i ----> star += '*' ----> 
    4.4) k = 3, k < i ----> star += '*' ---->
    4.5) k = 4, оскільки k !< i ----> star += '*' не спрацьовує ----> 
    4.6) console.log(*****)


    */