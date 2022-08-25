import { Request, Response } from "express";
import { connection } from "../data/baseData";
import postMovieCast from "../data/postMovieCast";

export default async function createMovieCast(req:Request, res:Response):Promise<void> {
  try {
    const {movie_id, actor_id} = req.body

    if(!movie_id || !actor_id) {
      res.statusCode = 400;
      throw new Error("All information cannot be empty");
    }

    await postMovieCast(movie_id, actor_id)

    res.status(200).send(await connection("MovieCast").select("*"));
    
  } catch (error:any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
}