const path = require('path');
const express = require('express');
// const hbs = require('express-handlebars');
const {engine} = require("express-handlebars");
const baseRoute = require('./routes/api.routes');

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(baseRoute);

// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName, email(унікальне поле), password, age, city
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект робити на сторінку з усіма юзерами /users
// і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж
// const users = [];

// app.get('/login', (req, res) => {
//     res.render('login');
// });
//
// app.post('/login', ({body}, res) => {
//
//     for (const user of users) {
//         if (user.email === body.email) {
//             return res.render('notFound', {message: 'User has already exist'});
//         }
//     }
//
//     users.push({...body, id: new Date().getTime()});
//     res.redirect('/users');
// });


// -------------------------------------------- classwork Task ----------------------------------------------------
// app.get('/signIn', (req, res) => {
//     res.render('signIn');
// });
//
// app.post('/signIn', ({ body}, res) => {
//     const user = users.find(user => {
//         return body.email === user.email && body.pass === user.pass;
//     });
//
//     if (!user) {
//         res.render('notFound', {message: 'Incorrect password or email'});
//         return;
//     }
//
//     const userId = users.findIndex(user => user.email === body.email);
//     res.redirect(`/users/${userId + 1}`);
// });

// --------------------------------------------- classwork task delete ------------------------------------------------

app.post('/delete', ({body}, res) => {
    const userIndex = users.findIndex(user => user.id === +body.deleteId);
    users.splice(userIndex, 1);
    res.redirect('/users');
});

// --------------------------------------------------------------------------------------------------------------------

// // 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city
// app.get('/users', ({ query}, res) => {
//
//     if (query.age || query.city) {
//         const filteredUsers = users.filter(user => {
//             if (query.age && query.city) {
//                 return user.age === query.age && user.city === query.city;
//             } else {
//                 return user.age === query.age || user.city === query.city;
//             }
//         });
//
//         if (!filteredUsers.length) return res.render('notFound', {message: 'No users found'});
//
//         return res.render('users', {users: filteredUsers});
//     }
//
//     res.render('users', {users});
// });
//
//
// // 3. /user/:id сторінка з інфою про одного юзера
// app.get('/users/:userId', (req, res) => {
//     const {userId} = req.params;
//
//     if (users[userId - 1]) {
//         res.render('userDetails', {user: users[userId - 1]});
//         return;
//     }
//
//     res.render('notFound',{message: 'User not found'});
// });


// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект
app.use((req, res) => {
    res.render('notFound', {message: 'Page not found'});
});

app.listen(5200, () => {
    console.log('Server has started on port 5200!');
})
