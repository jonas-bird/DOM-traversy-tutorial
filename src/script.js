// EXAMINE the Document object//
// console.dir(document);

// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';

// var items = document.getElementsByClassName('list-group-item');
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = 'bold';
// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// Example Queryselector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value="Send";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello from script.js';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
// }

//Traversing the DOM
var itemList = document.querySelector('#items'); //
// parentNode
// console.log(itemList.parentNode); //
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// parentElement
//console.log(itemList.parentElement); //
//itemList.parentElement.style.backgroundColor = '#f4f4f4';

// childNodes
// console.log(itemList.children);
// itemList.firstElementChild.textContent = "Yo";
//itemList.lastElementChild.textContent = "Yo";
// var lastItem = itemList.lastChild.textContent;


// siblings  //
console.log(itemList.nextElementSibling);
// itemList does not have any siblings...
