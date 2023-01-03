import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web'
require('dotenv').config()
//const path = require('path');

const app = express();
const port = process.env.PORT || 8085;

console.log('>>> check port: ', port)


//setup view engine
configViewEngine(app);

//init web rout
initWebRoute(app);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})