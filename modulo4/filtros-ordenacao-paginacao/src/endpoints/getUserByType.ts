import { Request, Response } from "express";
import selectUserByType from "../data/selectUserByType";

export const getUserByType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let type: string = req.params.type as string;
    if (!type) {
      type = ""
    }
    const users = await selectUserByType(type);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found with this type");
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
