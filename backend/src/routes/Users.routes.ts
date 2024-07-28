import { Router } from 'express';
import UsersController from '../controllers/Users.controller';

const UserRouter = Router();

UserRouter.get('/users', UsersController.listUsersSince);

UserRouter.get('/users/:username/details', UsersController.getUserDetails);

UserRouter.get('/users/:username/repos', UsersController.listRepos);

export default UserRouter;