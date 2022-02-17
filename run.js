
// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city
// 3. /user/:id сторінка з інфою про одного юзера
//
// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект



const path = require('path');
const express = require('express');
// const hbs = require('express-handlebars');
const {engine} = require("express-handlebars");

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName, email(унікальне поле), password, age, city
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект робити на сторінку з усіма юзерами /users
// і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж
const users = [];

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    if (!users.length) {
        users.push(req.body);
        res.redirect('/users')
    } else {
        for (const user of users) {
            if (user.email === req.body.email) {
                return res.render('notFound', {message: 'User has already exist'});
            }
        }
        users.push(req.body);
        res.redirect('/users');
    }
})

app.get('/users', (req, res) => {
    if (req.query.age || req.query.city) {
        const filteredUsers = users.filter(user => {
            if (req.query.age && req.query.city) {
                return user.age === req.query.age && user.city === req.query.city;
            } else {
                return user.age === req.query.age || user.city === req.query.city;
            }
        });
        return res.render('users', {filteredUsers})
    }
    res.render('users', {users});
})

app.get('/users/:userId', (req, res) => {
    const
});


app.get('/notFound', (req, res) =>  {
    res.render('notFound', {message: 'Page not found'});
})


app.listen(5200, () => {
    console.log('Server has started on port 5200!')
})

