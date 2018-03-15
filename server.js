const express = require('express');
const hbs     = require('hbs');
const fs      = require('fs'); 
var app       = express();
const port    = process.env.PORT || 3000;

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');
app.use((req, res, next) => {
    var date = new Date().toString(); 
    var log  = `${date} : ${req.method} ${req.path}`;
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log(error);
        }
    });
    next();
});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index.hbs', {
        pageTitle  : 'Devin',
        heading    : 'Welcome'
    });
});

app.get('/json', (req, res) => {
    res.send({
        name  : 'Anand Prakash Sharma',
        age   : 21,
        likes : ['Programming', 'Cricket', 'Video games'] 
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle   : 'About',
        heading     : 'About'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Page not found'
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});