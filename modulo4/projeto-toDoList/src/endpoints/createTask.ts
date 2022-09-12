import { Request, Response } from "express";
import { connection } from "../data/baseData";
import postTask from "../data/postTask";

export default async function createTask(req:Request, res:Response):Promise<void>{
  try {
    const {title, description, limit_date_initial, creator_user_id} = req.body

    if(!title || !description || !limit_date_initial || !creator_user_id) {
      res.statusCode = 400;
      throw new Error("All fields cannot be empty");
    }

    const dateBRToUS = (data: string): string => {
      const fullDate = data.split("/");
      const year = fullDate[2];
      const month = fullDate[1];
      const day = fullDate[0];
      return `${year}-${month}-${day}`;
    };
  
    const limit_date = dateBRToUS(limit_date_initial);

    await postTask(title, description, limit_date, creator_user_id)

    res.status(201).send(await connection("Task").select("*"));
    
  } catch (error:any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
}