import express from "express";
import APIController from '../controller/APIController'
//import initWebRoute from './router/web';

let router = express.Router();

//around function
const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsers); // method GET -> READ DATA 

    router.post('/create-user', APIController.createNewUser);

    router.put('/update-user', APIController.updateUser);

    router.delete('/delete-user/:id', APIController.deleteUser);

    return app.use('/api/v1/', router)
}


//export default initWebRoute;

module.exports = initAPIRoute;