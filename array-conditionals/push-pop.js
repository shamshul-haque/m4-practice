// push
var numbers = [5, 10, 15, 20, 25];
console.log(numbers);
numbers.push(30); //element will be added in the last index
console.log(numbers);
numbers.unshift(35); //element will be added in the first index
console.log(numbers);

// pop
numbers.pop(); //element will be removed from the last index
console.log(numbers);
var removedElement = numbers.pop(); //removed element will be set into a variable
console.log(removedElement);
console.log(numbers);
numbers.shift(); //element will be removed from the first index
console.log(numbers);

//slice
console.log(numbers.slice(1, 4)); //will return a copy of portion of an array.
