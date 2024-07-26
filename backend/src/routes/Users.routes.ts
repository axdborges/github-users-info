import { Router } from 'express';
import UsersController from '../controllers/Users.controller';

const UserRouter = Router();

UserRouter.get('', UsersController.list);

export default UserRouter;
