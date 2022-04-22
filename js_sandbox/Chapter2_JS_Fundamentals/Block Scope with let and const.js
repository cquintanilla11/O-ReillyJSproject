// Global Scope
// - Not inside a function or object or anything else, we are at the top level

var a = 1;
let b = 2;
const c = 3;


//Function Scope
//The variables in the function are different variables even though they are named the same because they are in a different scope
function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope ', a, b, c)
}
test()

//Block scope (i.e if statement, loop, anything wrapped in curly braces{})
//If variable names are the same, Var will replace the global scope variable with the new variable value in the block
//Let and Const will not update the global scope variables - most programming languages are like this
if(true){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('If Scope ', a, b, c)
}

//Will NOT change the value of a in the global scope because we are using let
for(let a = 0; a < 10; a++){
    console.log(`Loop: ${a}`)
}

//Will change the value of a in the global scope because we are using var
for(var a = 0; a < 10; a++){
    console.log(`Loop: ${a}`)
}



console.log('Global Scope ', a, b, c)