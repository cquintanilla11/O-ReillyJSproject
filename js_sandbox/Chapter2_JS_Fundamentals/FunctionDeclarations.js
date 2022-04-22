//FUNCTION DECLARATIONS

//Declare a function with parameters inputs
function greet1(firstName, lastName){
    //console.log('Hello') //inside the curly braces {} is the function block
    return 'Hello ' + firstName + ' ' + lastName;
}

//Declare a function with default parameters
function greet2(firstName = 'John', lastName = 'Doe'){
    return 'Hello ' + firstName + ' ' + lastName;
}

//Calling the function we just defined with parameters
console.log(greet1('Steve', 'Smith'));

//Calling the function we just defined with no parameters
console.log(greet2());

//FUNCTION EXPRESSIONS
//You can declare a function within an object
// You don't have to name the function, you can leave it anonymous

const square = function(x){
    return x*x;
};

console.log(square(8));

// IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS - aka IIFEs
// This is a function that you declare and call at the same time
//Make the function an expression by putting it in parenthesis

(function(){
    console.log('IIFE Ran..')
})();

(function(name){
    console.log('Hello ' + name);
})('Brad');

//PROPERTY METHODS
// When a function is put inside an object it is called a Method

const todo = {
    add: function(){
        console.log('Add todo..');   
    },
    edit: function(id){
        console.log(`Edit todo ${id}`)
    }
}

//Define function for the above object outside of it
todo.delete = function(){
    console.log('Delete todo..')
}

todo.add();
todo.edit();
todo.delete()
