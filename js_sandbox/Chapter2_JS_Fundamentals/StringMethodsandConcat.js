const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,wev dev,web programming';

let val;

val = firstName + lastName

//Concatentation
val = firstName + ' ' + lastName;

//Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + 'and I am ' + age;


//Escaping
//val = 'That's awesome, I can't wait';
val = "That's awesome, I can't wait";
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName)


//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2]


// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//charAt()
val= firstName.charAt('2');

//Get last character
val = firstName.charAt(firstName.length - 1);

//substrings()
val = firstName.substring(0, 4);

//slice()
val = firstName.slice(0,4)
val = firstName.slice(-3)

//Split()
val = str.split(' '); 
val = tags.split(',')

// replace()
val = str.replace('Brad', 'Jack');

//includes()
val = str.includes('Hello');

console.log(val)