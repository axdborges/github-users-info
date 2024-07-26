import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

import UsersService from "../services/Users.service";

export default class UsersController {
  static async list(req: Request, res: Response) {
    // return res.status(200).send(instanceToPlain(users));
    const { q } = req.query;

    if (q) {
      try {
        const users = await UsersService.listUsersByQuery(q as string);
        return res.status(200).send(instanceToPlain(users));
      } catch (error) {
        return res.status(500).send({ message: "Error fetching users", error });
      }
    } else {
      try {
        const users = await UsersService.listUsers();
        return res.status(200).send(instanceToPlain(users));
      } catch (error) {
				
			}
    }
  }
}
