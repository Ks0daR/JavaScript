const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// Удалить первый элемент массива
users.shift();
console.log(users);

// Удалить последний элемент массива
users.pop();
console.log(users);

// Добавить в начало массива пользователя "Lux"
users.unshift('Lux');
console.log(users);

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
users.push('Jay', 'Kiwi');
console.log(users);

// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = 'Ajax';
const index = users.indexOf('Ajax');
users.splice(index, 1);
console.log(users);

// Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
const userToInsertBefore = "Jay";
const index1 = users.indexOf(userToInsertBefore);
users.splice(index, 0, 'Kong');
console.log(users);