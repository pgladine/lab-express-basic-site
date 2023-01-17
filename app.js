const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(express.static(`${__dirname}/assets`));

app.get('/', (req, res, start) => {
    const name = `Paloma`;
    res.render('home', { name: name });
});
app.get('/about', (req, res, next) => {
    const name = 'Paloma';
    res.render('about', { name: name });
});
app.get('/work', (req, res, next) => {
    const name = 'Paloma';
    res.render('work', { name: name });
});
app.get('/gallery', (req, res, next) => {
    const name = 'Paloma';
    res.render('gallery', { name: name });
});

const port = 3000;
app.listen(port, () => { console.log(`Application running at port ${port}`) });
