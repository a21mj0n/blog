const express = require('express')
const fileUpload = require('express-fileupload');
const path = require('path')
require('dotenv').config();
const { routes } = require("./router/index");
const ejs = require('ejs')
const Database = require('./database/connection')
const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use('/public', express.static(__dirname + '/public'));
app.use(fileUpload({}))


// EJS
app.engine('ejs', require('ejs-mate'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// init routes
app.use('/', require('./router/web/home'));

routes.forEach(route => {
    app.use(`/${route}`, require(`./router/${route}`));
})


// init app
const PORT = process.env.PORT;

async function startApp() {
    try {
        await Database.connection();
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
