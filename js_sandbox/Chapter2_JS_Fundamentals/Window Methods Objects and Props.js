// WINDOW METHODS OBJECTS AND PROPERTIES
window.console.log(123)
//^ This is the same as the below.  We are already at the top of the window object
console.log(123)

// Alert
// An alrert box will pop up in the window
window.alert('Hello World');
//This is the same as the below - the below is used more often
alert('Hello World');

//Prompt
//Similar to alert but it takes an input
const input = prompt();
alert(input);

//Confirm
//used when you are deleting something or something that just needs confirmation from the user
if(confirm('Are you sure')){
    console.log('YES');
} else {
    console.log('NO')
}

let val;
// Outer height and width of the window
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width of the window
val = window.innerHeight;
val = window.innerWidth;

//Scroll points
val = window.scrollY;
val = window.scrollX;

// Location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//Redirect
window.location.href = 'http://google.com'

//Reload
window.location.reload();

//HISTORY OBJECT
//Get browsing history

//brings us back to wherever we came from
window.history.go(-1);

//History Length
val = window.history.length;

// Navigator Object
// This references the browser itself(firefox,chrome, etc.) NOT the window
val = window.navigator
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;


console.log(val);