//create an object

const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2017;
    },
    getBirthYearFromCurrent: function(){
        return 2017 - this.age; //returns from the current object
    }


}

//create variable to adjust as we go
let val;
val = person;

// Get specific value in an object
val = person.firstName; //Will usually see it this way
val = person['firstName'];
val = person['lastName'];
val = person.age;
val = person.email;
val = person.hobbies;
val = person.hobbies [1];// Display hobbies but only display the value in the 1 position (remember arrays are 0 based)
val = person.address;
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();
val = person.getBirthYearFromCurrent();

console.log(val);

//Array of objects

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nancy', age: 23}
];

//loop through the array and increment by one each time by setting i to 0 and then using i++

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}