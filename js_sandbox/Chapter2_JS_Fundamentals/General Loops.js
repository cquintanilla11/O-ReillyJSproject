//FOR LOOP - set up like a function - used when you know how many times it is going to run
// A loop is an instruction that repeats until a specific condidtion is met/reached
// A loop is used to run the same block of code using different values each time
// Takes 3 parameters that are seperated by semi colons - for(declaration of a variable using let or var; the conidtion; increment of variable)

for(let i = 0; i <= 10; i++){
    console.log(i);
}
//i++ is the same as (i + 1)

//Add a string to the loop and concanate i to it
for(let i = 0; i <= 10; i++){
    console.log('Number ' + i);
}

//Do something different when it gets to the number 2
for(let i = 0; i <= 10; i++){
    if(i===2){
        console.log('2 is my favorite number')
    };
}

//Use continue to do this instead of that.  This will replace Number 2 with 2 is may favorite number and then continue on for the rest of the iterations
for(let i = 0; i <= 10; i++){
    if(i===2){
        console.log('2 is my favorite number')
        continue;
    };
    console.log('Number ' + i)
}

//break - breaks out of the loop.  Stops looping through the rest of the iterations
for(let i = 0; i <= 10; i++){
    if(i===2){
        console.log('2 is my favorite number')
        break;
    };
    console.log('Number ' + i)
}

//WHILE LOOP - used when you do not know how many iterations it is going to run
//set up the variable outside of the loop
//only takes one condition in the parenthesis but the iteration will be in the body of the while loop
let h = 0;

while(h <= 10){
    console.log('Number ' + h);
    h++;
}

//DO WHILE
//It will alweays run at least once no matter what
let x = 0
do{
    console.log('Number ' + x)
    x++;
}
while(x <10);

//loop through an array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota']

for(let c = 0; c < cars.length; c++){
    console.log(cars[c])
}

//forEach array loop
//takes an anonymous (just means the function does not have a name) function in the parenthesis
//the function takes in the current iterator - typically this is the singular name of the array - can also use something like currentCar
cars.forEach(function(car){
    console.log(car);
});

//Adds an index to the outout
cars.forEach(function(car, index){
    console.log(`${index} : ${car}`);
});

//Adds the entire array to the outout
cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});


//MAP
//used to return something different - return a different array
//map takes in an anonymous function
const users = [
    {id:1, name:'John'},
    {id:2, name:'Sarah'},
    {id:3, name:'Karen'},
    {id:4, name:'Steve'}
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids)

//forIn loop - used for objects
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

//logs the keys of the object
for(let x in user){
    console.log(x)
}

//logs the keys and values of the object
for(let x in user){
    console.log(`${x} : ${user[x]}`)
}