const path = require('path');
const express = require('express');
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

app.listen(5200, () => {
    console.log('Server has started on port 5200!');
})
