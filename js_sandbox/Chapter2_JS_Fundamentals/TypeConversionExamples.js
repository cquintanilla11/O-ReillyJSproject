let val;

 // Number to string
 val = String(555);
 val = String(4+4);
// Boolean to String
val = String(true);
// Date to String
val = String(new Date());
//Array to String
val = String([1,2,3,4]);

//toString()
val = (5).toString();
val = (true).toString();

//String to Numbers
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello');
val = Number([1,2,3,4]);

val = parseInt('100.');//parseInt only converts integers, will not conver decimals
val = parseFloat('100.30');//parseFloat converts decimals

 //Output
 console.log(val);
 console.log(typeof val);
 //console.log(val.length);//Length only works on strings
console.log(val.toFixed(2));

const val1 = '5';
const val2 = 6;
const sum = Number(val1 + val2)

console.log(sum);
console.log(typeof sum);