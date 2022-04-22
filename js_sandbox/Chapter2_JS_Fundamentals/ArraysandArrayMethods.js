//Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const numbersM = [43,56,33,23,44,36,5];
const fruit = ['Apple','Banana','Orange','Pear'];
const mixed = [22,'hello', true, undefined, null, {a:1,b:1}, new Date()];

let val;


// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value from array (remember array is 0 based)
val = numbers[3];
val = numbers[0];
//Insert into array
numbers[2] = 100;
// Find index of value in array
val = numbers.indexOf(36);

//Mutating Arrays
//Add on to end of array
numbersM.push(250);
//Add on to front of array
numbersM.unshift(120);
//Remove from end of array
numbersM.pop();
//Remove from front of array
 numbersM.shift();
 //Splice values from array
 numbersM.splice(1,1);
 numbersM.splice(1,3);
 //Reverse the array
 numbersM.reverse();

 //Concatenate Array
 val = numbers.concat(numbers2);

 //Sort Array
 val = fruit.sort();
 val = numbers.sort();

 //Sorting Numbers in array using the "compare function"
 val = numbers.sort(function(x, y){
     return x-y;
 });

 //Reverse sorting numbers in array using "compare function"
 val = numbers.sort(function(x, y){
    return y-x;
});

//Find

function under50(num){
    return num < 50;
}    
val = numbers.find(under50);
//
function over50(num){
    return num > 50;
}    
val = numbers.find(over50);



console.log(numbers);
console.log(numbersM); //For the mutation section
console.log(val);