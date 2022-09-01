import { Request, Response } from "express";
import { selectAllPurchasesByUser } from "../data/selectAllPurchaseByUser";
import { selectAllUsers } from "../data/selectAllUsers";

export const getAllUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const users = await selectAllUsers();

    if (!users.length) {
      res.statusCode = 400;
      throw new Error("No user on this table");
    }

    for (const user of users) {
      const purchases = await selectAllPurchasesByUser(user.id);
      user.purchases = purchases;
    }
    res.status(200).send(users);
  } catch (error: any) {
    res.status(res.statusCode).send(error.sqlMessage || error.message);
  }
};
