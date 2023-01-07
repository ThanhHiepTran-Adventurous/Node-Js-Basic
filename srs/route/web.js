import express from "express";
import homeController from '../controller/homeController';
//import initWebRoute from './router/web';

let router = express.Router();

//around function
const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);

    router.get('/about', (req, res) => {

        res.send(`Got a POST request`)
    })


    return app.use('/api/v1/', router)
}


//export default initWebRoute;

module.exports = initWebRoute;