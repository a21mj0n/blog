const express = require('express')
const fileUpload = require('express-fileupload');
const path = require('path')
require('dotenv').config();
const { routes } = require("./router/index");
const exphbs = require('express-handlebars')
const Database = require('./database/connection')
const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use('/public', express.static(__dirname + '/public'));
app.use('/utils', express.static(__dirname + '/utils'));
app.use(fileUpload({}))

// view hanlebars
app.engine('hbs', exphbs.engine({
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    extname: '.hbs',
    helpers: {
        section: function(name, options){
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views', 'pages'))

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
