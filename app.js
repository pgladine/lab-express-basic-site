const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res, start) => {
    res.render('home');
});
app.get('/about', (req, res, next) => {
    res.render('about');
});
app.get('/work', (req, res, next) => {
    res.render('work');
});
app.get('/gallery', (req, res, next) => {
    res.render('gallery');
});

const port = 3000;
app.listen(port, () => { console.log(`Application running at port ${port}`) });
