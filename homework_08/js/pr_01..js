const categories = document.querySelector('.categories');
// console.log(categories.textContent);

console.log('Кол-во элементов li: ', categories.childElementCount);

const list = categories.children;
console.log(list);

const item1 = document.querySelector('li');
console.log('Категория: ', item1.firstChild.textContent);
console.log('Кол-во элементов li: ', item1.querySelector('ul').childElementCount);
console.log(item1.textContent);


const item2 = item1.nextElementSibling;

console.log('Категория: ', item2.firstChild.textContent);
console.log('Кол-во элементов li: ', item2.querySelector('ul').childElementCount);
console.log(item2.textContent);

const item3 = item2.nextElementSibling;

console.log('Категория: ', item3.firstChild.textContent);
console.log('Кол-во элементов li: ', item3.querySelector('ul').childElementCount);
console.log(item3.textContent);
