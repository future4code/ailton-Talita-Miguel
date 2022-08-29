import { Request, Response } from "express";
import { connection } from "../data/baseData";
import postRating from "../data/postRating";

export default async function createRating(req:Request, res:Response) {
  try {
    const {id, comment, rate, Movies_id} = req.body

    if(!id || !comment || !rate || !Movies_id) {
      res.statusCode = 400;
      throw new Error("All fields cannot be empty");
    }

    await postRating(id, comment, rate, Movies_id)

    res.status(200).send(await connection("Rating").select("*"));
    
  } catch (error:any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
}