// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.


const path = require('path');
const fs = require('fs');

// fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true},(err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// });
//
// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// });

const onlineUsers = [
    {name: "Andrii", age: 22, city: "Lviv"},
    {name: "Vanya", age: 23, city: "Kyiv"},
    {name: "Petya", age: 12, city: "Odessa"},
    {name: "Anya", age: 35, city: "Broklin"},
    {name: "Kolya", age: 40, city: "Lviv"}
]
const inPersonUsers = [
    {name: "Vasya", age: 15, city: "Rivne"},
    {name: "Tolya", age: 23, city: "Charkiv"},
    {name: "Sanya", age: 42, city: "Odessa"},
    {name: "Anya", age: 35, city: "Broklin"},
    {name: "Fedya", age: 60, city: "Chernigiv"}
]

let onlineUsersData = '';
onlineUsers.map(user => {
    onlineUsersData += `Name: ${user.name} \n Age: ${user.age} \n City: ${user.city}\n\n`
})

let inPersonUsersData = '';
inPersonUsers.map(user => {
    inPersonUsersData += `Name: ${user.name} \n Age: ${user.age} \n City: ${user.city}\n\n`
})

fs.writeFile(path.join(__dirname, 'main', 'online', 'users2.txt'), onlineUsersData,(err) => {
    if (err) {
        console.log(err);
        throw err;
    }
} );

fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'users1.txt'), inPersonUsersData,'utf8',(err) => {
    if (err) {
        console.log(err);
        throw err;
    }
});


// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)
const path1 = path.join(__dirname, 'main', 'inPerson', 'users1.txt');
const path2 = path.join(__dirname, 'main', 'online', 'users2.txt');

const changeUsers = () => {
    fs.readFile(path1,'utf8',(err, data) => {
        if (err) {
            console.log(err);
            throw err;
        }
        fs.writeFile(path2, data, 'utf8',(err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        });
    })
    fs.readFile(path2,'utf8',(err, data) => {
        if (err) {
            console.log(err);
            throw err;
        }
        fs.writeFile(path1, data, 'utf8',(err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        });
    })
}

changeUsers();


