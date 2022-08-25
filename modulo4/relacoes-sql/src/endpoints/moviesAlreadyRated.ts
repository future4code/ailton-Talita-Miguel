import { Request, Response } from "express";
import { connection } from "../data/baseData";
import getMoviesAlreadyRate from "../data/getMoviesAlreadyRate";

export default async function moviesAlreadyRated(req:Request, res:Response) {
  try {

    const result = await getMoviesAlreadyRate()

    res.status(200).send(result);
    
  } catch (error:any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
}