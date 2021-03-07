import express from 'express';

import SessionController from './controllers/SessionController';
import UsersController from './controllers/UsersController';
import ConnectionsController from './controllers/ConnectionsController';
import database from './database/connection';

const routes = express.Router();

const sessionController = new SessionController();
const usersController = new UsersController();
const connectionsController = new ConnectionsController;

// route test
routes.get('/test', async function(req, res) {
    const test = await database('users').select('*');

    return res.status(200).json(test);
});


routes.post('/session/create', sessionController.create);
routes.post('/session', sessionController.index);

routes.post('/users/create', usersController.create);
routes.post('/users/update', usersController.update);
routes.get('/users', usersController.show);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;