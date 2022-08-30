import { Request, Response } from "express";
import selectUserByName from "../data/selectUserByName";

export const getUserByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let name: string = req.query.name as string;
    
    if (!name) {
      name = ""
    }
    const users = await selectUserByName(name);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found with this name");
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
