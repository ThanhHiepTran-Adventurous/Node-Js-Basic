import express from 'express';
import configViewEngine from './configs/viewEngine';
//const path = require('path');

const app = express();
const port = 8084


configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('/about', (req, res) => {

    res.send(`I'm Thanh Hiệp`)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})