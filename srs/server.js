import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web'
import initAPIRoute from './route/api'

// import connection from './configs/connectDB';

require('dotenv').config()
//const path = require('path');

const app = express();
const port = process.env.PORT || 8086;

// không có 2 thằng này khi client gửi thông tin về phía sever sẽ bị undefined
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


console.log('>>> check port: ', port)


//setup view engine
configViewEngine(app);

//init web rout
initWebRoute(app);

//init api route
initAPIRoute(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})