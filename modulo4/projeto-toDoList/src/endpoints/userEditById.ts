import { Request, Response } from "express";
import putUserEditById from "../data/putUserEditById";

export default async function userEditById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { name, nickname } = req.body;

    if (!id || !name || !nickname) {
      res.statusCode = 400;
      throw new Error("All fields cannot be empty");
    }

    const editUser = await putUserEditById(id, name, nickname);

    res.status(201).send(editUser);
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message });
  }
}
