import express, { Express, Request, Response } from "express";
import cors from "cors";

import createRating from "./endpoints/createRating"
import { AddressInfo } from "net";
import createMovieCast from "./endpoints/createMovieCast";
import moviesAlreadyRated from "./endpoints/moviesAlreadyRated";


const app: Express = express();
app.use(express.json());
app.use(cors());


app.get("/moviesAlreadyRated", moviesAlreadyRated)

app.post("/rating", createRating)

app.post("/movieCast", createMovieCast)



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
