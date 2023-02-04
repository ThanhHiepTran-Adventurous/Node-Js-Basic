import express from "express";
import APIController from '../controller/APIController'
//import initWebRoute from './router/web';

let router = express.Router();

//around function
const initAPIRoute = (app) => {
    router.get('/users', APIController.getHomepage);


    return app.use('/api/v1/', router)
}


//export default initWebRoute;

module.exports = initAPIRoute;