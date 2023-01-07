import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from './router/web';

let router = express.Router();

//around function
const initWebRoute = (app) => {
    router.get('/', (req, res) => {
        res.render('index.ejs');
    })

    router.post('/about', (req, res) => {

        res.send(`Got a POST request`)
    })


    return app.use('/', router)
}

module.exports = initWebRoute;