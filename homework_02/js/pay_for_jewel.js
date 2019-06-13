const message = 'Proin sociis natoque et magnis parturient montes mus';
let price = 0;
let words;

words = message.split(' ');
console.log('Количество слов - ', words.length);
price = words.length * 10;
console.log('Цена гравировки - ', price);
