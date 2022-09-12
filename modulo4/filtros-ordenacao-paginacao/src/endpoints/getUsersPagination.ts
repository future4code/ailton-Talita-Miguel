import { Request, Response } from "express";
import selectUsersPagination from "../data/selectUsersPagination";

export const getUsersPagination = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let page: number = Number(req.query.page);
    const userPerPage = 5
    
    if (!page) {
      page = 1
    }

    const offset:number = Number(userPerPage * (Number(page) - 1))

    const users = await selectUsersPagination(offset);

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
