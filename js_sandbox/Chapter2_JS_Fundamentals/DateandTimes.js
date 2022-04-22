//Date and Times

let val;
let valbirth;

let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');
birthday.setMonth(2);//Sets the month to the 2nd month (remember dates start with a 0 based array i.e janurary = 0)
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

valbirth = birthday;

birthday.setMonth(2);

console.log(valbirth);




const today = new Date();
val = today.getMonth();//dates are 0 based so januaury will output 0 in this case
val = today.getDate();
val = today.getDay();//Numerical representation of the day of the week
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();//Time Stamp - The amount of seconds that have passed since janurary 1 1970
console.log(val); 




valdatatype = today; //Object data type by default
valdatatype = today.toString(); //change the date tyoe to a string
console.log(typeof valdatatype);
