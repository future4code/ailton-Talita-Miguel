import { app } from "./app";
import createUser from "./endpoints/User";
import createRecipe from "./endpoints/Recipe";
import connectionTest from "./endpoints/test";

const user = new createUser();
const recipe = new createRecipe();

app.get("/connectionTest", connectionTest);
app.get("/user/byEmail", user.getUserByEmail);
app.get("/user/profile", user.getUserByIdProfile);
app.post("/user/signup", user.createUser);
app.post("/user/login", user.login);
app.get("/user/:userId", user.getUserById);

app.post("/recipe", recipe.createRecipe);