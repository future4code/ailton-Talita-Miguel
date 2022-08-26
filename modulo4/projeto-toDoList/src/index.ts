import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import connectionTest from "./endpoints/connectionTest";
import createUser from "./endpoints/createUser";
import userById from "./endpoints/userById";
import userEditById from "./endpoints/userEditById";
import createTask from "./endpoints/createTask";
import taskById from "./endpoints/taskById";
import allUser from "./endpoints/allUser";
import taskByCreator from "./endpoints/taskByCreator";
import userByName from "./endpoints/userByName";
import taskResponsible from "./endpoints/taskResponsible";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/user/all", allUser);
app.get("/user", userByName);
app.get("/connectionTest", connectionTest);
app.get("/task", taskByCreator);
app.get("/user/:id", userById);
app.get("/task/:id", taskById);

app.post("/user", createUser);
app.post("/task", createTask);
app.post("/task/responsible", taskResponsible)

app.put("/user/edit/:id", userEditById);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
