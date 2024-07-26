import { IUserResponse } from "../Interfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class UsersService { 
	static async listUsers(): Promise<IUserResponse[]> {
		return await prisma.user.findMany();
	}

	static async listUsersByQuery(query: string): Promise<IUserResponse[]> {
		return prisma.user.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { city: { contains: query } },
          { country: { contains: query } },
          { favorite_sport: { contains: query } }
        ]
      }
    });
	}


}