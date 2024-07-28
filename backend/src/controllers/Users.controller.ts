import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

import UsersService from "../services/Users.service";

export default class UsersController {
  static async listUsersSince(req: Request, res: Response) {
    const { since } = req.query;
    const listUsers = await UsersService.listUsers(since as string)
    return res.status(200).send(listUsers);
  }

  static async getUserDetails(req: Request, res: Response) { 
    const { username } = req.params;
    const userDetails = await UsersService.userDetails(username)
    return res.status(200).send(userDetails);
  }

  static async listRepos(req: Request, res: Response) {
    const { username } = req.params;
    const userDetails = await UsersService.userRepos(username)
    return res.status(200).send(userDetails);
  }
}
