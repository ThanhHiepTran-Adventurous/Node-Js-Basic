import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config()
//const path = require('path');

const app = express();
const port = process.env.PORT || 8085;

console.log('>>> check port: ', port)

configViewEngine(app);





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})