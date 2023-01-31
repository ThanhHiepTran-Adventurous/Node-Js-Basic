import express from "express";
import homeController from '../controller/homeController';
//import initWebRoute from './router/web';

let router = express.Router();

//around function
const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:id', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser);
    router.post('/delete-user', homeController.deleteUser)
    router.get('/about', (req, res) => {

        res.send(`Got a POST request`)
    })


    return app.use('/api/v1', router)
}


//export default initWebRoute;

module.exports = initWebRoute;