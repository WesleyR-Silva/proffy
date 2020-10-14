import express from 'express';
import ClassesControllers from './controllers/classesControllers';
import ConnectionController from './controllers/ConnectionsControllers';

const routes = express.Router();
const classesControllers = new ClassesControllers();
const connectionsController = new ConnectionController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;