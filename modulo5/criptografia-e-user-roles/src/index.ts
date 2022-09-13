import { app } from "./app";
import connectionTest from "./endpoints/test";
import UserEndpoint from "./endpoints/User";

const newUser = new UserEndpoint

app.get("/connectionTest", connectionTest);
app.get("/user/login", newUser.login);
app.get("/user/byId", newUser.getUserById);
app.post("/user/signup", newUser.createUser)
