import { Request, Response } from "express";
import selectUsersOrdered from "../data/selectUsersOrdered";

export const getUsersOrdered = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let search: string = req.query.search as string;

    if (search !== 'name' && search !== 'type') {
      search = "email"
    }
    const users = await selectUsersOrdered(search);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found with this search");
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
