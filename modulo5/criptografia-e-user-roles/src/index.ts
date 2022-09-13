import { app } from "./app";
import connectionTest from "./endpoints/test";
import UserEndpoint from "./endpoints/User";

const newUser = new UserEndpoint

app.get("/connectionTest", connectionTest);
app.get("/user/login", newUser.login);
app.get("/user/byId", newUser.getUserById);
app.get("/user/token", newUser.getUserToken);
app.post("/user/signup", newUser.createUser)
app.delete("/user/deletebyId", newUser.delUserById);
