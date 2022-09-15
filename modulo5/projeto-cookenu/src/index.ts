import { app } from "./app";
import createUser from "./endpoints/User";
import connectionTest from "./endpoints/test";

const user = new createUser();

app.get("/connectionTest", connectionTest);
app.get("/user/byEmail", user.getUserByEmail);
// app.get("/user/byId", user.getUserById);
app.post("/user/signup", user.createUser);
app.post("/user/login", user.login);