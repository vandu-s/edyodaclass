// var findResult = document.getElementById('demo');
// console.log(findResult);
// var fTag = document.getElementsByTagName('p');
// console.log(fTag);
// var paraClass = document.getElementsByClassName('description');
// console.log(paraClass);
/* Creating orderlist */
// var orderList = document.getElementsByTagName('ol');
// console.log(orderList);
// var listItem1 = document.createElement('li');
// console.log(listItem1);
// var listItem2 = document.createElement('li');
// console.log(listItem2);
// var listItem3 = document.createElement('li');
// console.log(listItem3);
// var listItem4 = document.createElement('li');
// console.log(listItem4);
// var listItem5 = document.createElement('li');
// console.log(listItem5);
// var listText1 = document.createTextNode('Items1');
// var listText2 = document.createTextNode('Items2');
// var listText3 = document.createTextNode('Items3');
// var listText4 = document.createTextNode('Items4');
// var listText5 = document.createTextNode('Items5');

// orderList.appendChild(listItem1);
// orderList.appendChild(listItem2);
// orderList.appendChild(listItem3);
// orderList.appendChild(listItem4);
// orderList.appendChild(listItem5);
// console.log(orderList);
// listItem1.appendChild(listText1);
// listItem2.appendChild(listText2);
// listItem3.appendChild(listText3);
// listItem4.appendChild(listText4);
// listItem5.appendChild(listText5);
var orderList = document.getElementById('list');
var listItem = document.createElement('li');
var listItemText = document.createTextNode('I am Text in list item0');
console.log(listItem);
console.log(listItemText);
listItem.appendChild(listItemText);
orderList.appendChild(listItem);
console.log(orderList)
var orderList1 = document.createElement('ul');
var listItem1 = document.createElement('li');
var listItemText1 = document.createTextNode('I am Text in list item1');
console.log(listItem1);
console.log(listItemText1);
listItem1.appendChild(listItemText1);
orderList1.appendChild(listItem1);
console.log(orderList1);
var container = document.getElementById('div1');
console.log(container);
container.appendChild(orderList1);