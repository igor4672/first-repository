const STAR_LENGTH = 10;

for (let i = 0; i < 11; i++) {
	let star = '*';
	const middle = STAR_LENGTH / 2;
	const starDiff = i - middle;
	const starLenght = i < middle ? i : middle - starDiff; /*якщо (i < middle), то i; якщо (i >= middle), то middle - starDiff*/

	for (let k = 0; k < starLenght; k++) {
		star += '*';
	}

	console.log(star);
}



/*
1) STAR_LENGTH = 10 ---->
2) i = 0, i < 11 ----> TRUE ---->
	2.1) star = '*' ---->
	2.2) middle = STAR_LENGTH / 2 = 10 / 2 = 5 ---->
	2.3) starDiff = i - middle = 0 - 5 = -5 ---->
	2.4) starLenght = 0(i) < 5(middle) ----> TRUE = 0(i) ---->
	2.5) Внутрішній цикл 
		2.5.1) k = 0, k < starLenght(0) ----> FALSE ----> star += '*' не спрацьовує ---->
	2.6) console.log(*)

3) i = 1, i < 11 ----> TRUE ---->
	2.1) star = '*' ---->
	2.2) middle = STAR_LENGTH / 2 = 10 / 2 = 5 ---->
	2.3) starDiff = i - middle = 1 - 5 = -4 ---->
	2.4) starLenght = 1(i) < 5(middle) ----> TRUE = 1(i) ---->
	2.5) Внутрішній цикл 
		2.5.1) k = 0, k < starLenght(1) ----> TRUE ----> star += '*' ---->
		2.5.2) k = 1, k < starLenght(1) ----> FALSE ----> star += '*' не спрацьовує ---->
	2.6) console.log(**) 

4) i = 2, i < 11 ----> TRUE ---->
	2.1) star = '*' ---->
	2.2) middle = STAR_LENGTH / 2 = 10 / 2 = 5 ---->
	2.3) starDiff = i - middle = 2 - 5 = -3 ---->
	2.4) starLenght = 2(i) < 5(middle) ----> TRUE = 2(i) ---->
	2.5) Внутрішній цикл 
		2.5.1) k = 0, k < starLenght(2) ----> TRUE ----> star += '*' ---->
		2.5.2) k = 1, k < starLenght(2) ----> TRUE ----> star += '*' ---->
		2.5.3) k = 2, k < starLenght(2) ----> FALSE ----> star += '*' не спрацьовує ---->
	2.6) console.log(***) 

5) i = 3, i < 11 ----> TRUE ---->
	2.1) star = '*' ---->
	2.2) middle = STAR_LENGTH / 2 = 10 / 2 = 5 ---->
	2.3) starDiff = i - middle = 3 - 5 = -2 ---->
	2.4) starLenght = 3(i) < 5(middle) ----> TRUE = 3(i) ---->
	2.5) Внутрішній цикл 
		2.5.1) k = 0, k < starLenght(3) ----> TRUE ----> star += '*' ---->
		2.5.2) k = 1, k < starLenght(3) ----> TRUE ----> star += '*' ---->
		2.5.3) k = 2, k < starLenght(3) ----> TRUE ----> star += '*' ---->
		2.5.4) k = 3, k < starLenght(3) ----> FALSE ----> star += '*' не спрацьовує ---->
	2.6) console.log(****)

6) i = 4, i < 11 ----> TRUE ---->
	2.1) star = '*' ---->
	2.2) middle = STAR_LENGTH / 2 = 10 / 2 = 5 ---->
	2.3) starDiff = i - middle = 4 - 5 = -1 ---->
	2.4) starLenght = 4(i) < 5(middle) ----> TRUE = 4(i) ---->
	2.5) Внутрішній цикл 
		2.5.1) k = 0, k < starLenght(4) ----> TRUE ----> star += '*' ---->
		2.5.2) k = 1, k < starLenght(4) ----> TRUE ----> star += '*' ---->
		2.5.3) k = 2, k < starLenght(4) ----> TRUE ----> star += '*' ---->
		2.5.4) k = 3, k < starLenght(4) ----> TRUE ----> star += '*' ---->
		2.5.5) k = 4, k < starLenght(4) ----> FALSE ----> star += '*' не спрацьовує ---->
	2.6) console.log(*****)

7) i = 5, i < 11 ----> TRUE ---->
	2.1) star = '*' ---->
	2.2) middle = STAR_LENGTH / 2 = 10 / 2 = 5 ---->
	2.3) starDiff = i - middle = 5 - 5 = 0 ---->
	2.4) starLenght = 5(i) < 5(middle) ----> FALSE = middle - starDiff = 5 - 0 = 5 ---->
	2.5) Внутрішній цикл 
		2.5.1) k = 0, k < starLenght(5) ----> TRUE ----> star += '*' ---->
		2.5.2) k = 1, k < starLenght(5) ----> TRUE ----> star += '*' ---->
		2.5.3) k = 2, k < starLenght(5) ----> TRUE ----> star += '*' ---->
		2.5.4) k = 3, k < starLenght(5) ----> TRUE ----> star += '*' ---->
		2.5.5) k = 4, k < starLenght(5) ----> TRUE ----> star += '*' ---->
		2.5.6) k = 5, k < starLenght(5) ----> FALSE ----> star += '*' не спрацьовує ---->
	2.6) console.log(******)

8)	i = 6, i < 11 ----> TRUE ---->
	2.1) star = '*' ---->
	2.2) middle = STAR_LENGTH / 2 = 10 / 2 = 5 ---->
	2.3) starDiff = i - middle = 6 - 5 = 1 ---->
	2.4) starLenght = 6(i) < 5(middle) ----> FALSE = middle - starDiff = 5 - 1 = 4 ---->
	2.5) Внутрішній цикл 
		2.5.1) k = 0, k < starLenght(4) ----> TRUE ----> star += '*' ---->
		2.5.2) k = 1, k < starLenght(4) ----> TRUE ----> star += '*' ---->
		2.5.3) k = 2, k < starLenght(4) ----> TRUE ----> star += '*' ---->
		2.5.4) k = 3, k < starLenght(4) ----> TRUE ----> star += '*' ---->
		2.5.5) k = 4, k < starLenght(4) ----> FALSE ----> star += '*' не спрацьовує ---->
	2.6) console.log(*****)

9) i = 7, i < 11 ----> TRUE ---->
	2.1) star = '*' ---->
	2.2) middle = STAR_LENGTH / 2 = 10 / 2 = 5 ---->
	2.3) starDiff = i - middle = 7 - 5 = 2 ---->
	2.4) starLenght = 7(i) < 5(middle) ----> FALSE = middle - starDiff = 5 - 2 = 3 ---->
	2.5) Внутрішній цикл 
		2.5.1) k = 0, k < starLenght(3) ----> TRUE ----> star += '*' ---->
		2.5.2) k = 1, k < starLenght(3) ----> TRUE ----> star += '*' ---->
		2.5.3) k = 2, k < starLenght(3) ----> TRUE ----> star += '*' ---->
		2.5.4) k = 3, k < starLenght(3) ----> FALSE ----> star += '*' не спрацьовує ---->
	2.6) console.log(****)	

	.... 

*/