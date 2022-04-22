//If Statements & Comparison Operators

// if(something){
//     do something
// }   else{
//     do something else
// }


//Compares values, does not compare type
const id = 100;

//EQUAL TO
if(id == 101){ //== means comparing to, does not mean equal to
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

//NOT EQUAL TO
if(id != 101){ //== means comparing to, does not mean equal to
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

//Compare Value and Type

const idS = '100';

//EQUAL TO VALUE and TYPE
if(idS === 100){ //== means comparing to, does not mean equal to
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

//NOT EQUAL TO VALUE and TYPE
if(idS !== 101){ //== means comparing to, does not mean equal to
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

//Test if Undefined
const idtype = 100
if(typeof idtype !== 'undefined'){
    console.log(`The ID is ${id}`);
} else {
    console.log('NO ID');
}

// GREATER OR LESS THAN
const idA = 100;
if(idA > 200){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

if(idA < 200){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

if(idA <= 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// IF ELSE

const color = 'yellow';

if(color === 'red'){
    console.log('Color is red');
} else if(color === 'blue'){
    console.log('Color is blue');
} else {
    console.log('Color is not red or blue');
}

//Logical Operators

const name = 'Steve';
const age = 70;

//AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <=19){
    console.log(`${name}is a teenager`);
} else{
    console.log(`${name} is an adult`)
}

//OR ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`)
} else {
    console.log(`${name} is registered for the race`)
}

// TERNARY OPERATOR - Short hand way of doing conditionals (what we did above)
const idT = 100
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES - Works but is not recommended
if(idT === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');