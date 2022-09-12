import { Request, Response } from "express";
import { connection } from "../data/baseData";
import postUser from "../data/postUser";

export default async function createUser(req:Request, res:Response):Promise<void> {
  try {
    const {name, nickname, email} = req.body

    if(!name || !nickname || !email) {
      res.statusCode = 400;
      throw new Error("All fields cannot be empty");
    }

    await postUser(name, nickname, email)

    res.status(201).send(await connection("Users").select("*"));
    
  } catch (error:any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
}