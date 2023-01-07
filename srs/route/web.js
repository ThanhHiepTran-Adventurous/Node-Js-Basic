import express from "express";
//import initWebRoute from './router/web';

let router = express.Router();

//around function
const initWebRoute = (app) => {
    router.get('/', (req, res) => {
        res.render('index.ejs');
    })

    router.get('/about', (req, res) => {

        res.send(`Got a POST request`)
    })


    return app.use('/api/v1/', router)
}


//export default initWebRoute;

module.exports = initWebRoute;