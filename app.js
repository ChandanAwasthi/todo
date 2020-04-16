const express =  require('express');
const { db } = require('./database');
const todoRoute = require('./paths/todos');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', express.static(__dirname + '/public'));
app.use('/todo', todoRoute);

const server_port = process.env.PORT || 9999
db.sync()
    .then(() => {
        app.listen(server_port);
    })
    .catch((err) => {
        console.error(err);
    })




