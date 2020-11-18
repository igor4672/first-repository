//MAP

/*function map(arr, callback) {
	const newArray = [];

	for (let i = 0; i < arr.length; i++) {
		const newEl = callback(arr[i], i);
		newArray.push(newEl);
	}

	return newArray;

}

const mappedArray = map([1, 2, 3], function(el){
 return el + 1;
});

console.log(mappedArray);*/





//FILTER

/*const arr = [1, 2, null, undefined, 5];

function filter(arr, callback) {
	const filteredArray = [];

	for (let i = 0; i < arr.length; i++) {
		const el = arr[i];
		const isTrueElement = callback(el, i);

		if (isTrueElement) {
			filteredArray.push(el)
		}
		
	}

	return filteredArray;
}

const filteredArr = filter(arr, (el, index) => el !== undefined && el !== null);

console.log(filteredArr);*/






//REDUCE

/*function reduce(arr, callback, initialValue) {
	let callbackResult = initialValue;

	for (let i = 0; i < arr.length; i++) {
		const value = callback(callbackResult, arr[i], i);
		callbackResult = value;
	}

	return callbackResult;
}

const reduce_callback = (beforeIterationValue, el) => beforeIterationValue + el;

const sum = reduce([1, 2, 3], reduce_callback, 0); 

console.log(sum);*/
