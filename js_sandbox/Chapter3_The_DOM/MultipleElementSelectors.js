// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
//Will give us the full item list
console.log(items);
// Will only give us the first list item
console.log(items[0]);

items[0].style.color = 'red'
items[3].textContent = 'Hello World'

const listItems = document.querySelector('ul').getElementsByClassName('collection-item')
console.log(listItems);


// document.getElementByTagName
let lis = document.getElementsByTagName('li');
//Will give us the full item list
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// Convert HTML Collection into Array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li){
    console.log(li.className);
    li.textContent = 'Hello';
});

lis.forEach(function(li, index){
    console.log(li.className);
    li.textContent = `${index}: Hello`;
});

console.log(lis);


//nodeList-  counts more then just elements, counts things like text nodes, allow forEach without converting to an array first
//document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item')

items.forEach(function(item, index){
        item.textContent = `${index}: Hello`
});

const liOdd = document.querySelectorAll('li:nth-child(odd)')
const liEven = document.querySelectorAll('li:nth-child(even)')

liOdd.forEach(function(li, index){
    li.style.background = '#ccc'
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#f4f4f4'
}

console.log(items)