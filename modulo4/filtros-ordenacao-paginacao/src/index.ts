import { app } from "./app"
import { getAllFunction } from "./endpoints/getAllFunction";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserByName } from "./endpoints/getUserByName";
import { getUserByType } from "./endpoints/getUserByType";
import { getUsersOrdered } from "./endpoints/getUsersOrdered";
import { getUsersPagination } from "./endpoints/getUsersPagination";

app.get("/users",getAllUsers)
app.get("/userByName",getUserByName)
app.get("/usersOrdered",getUsersOrdered)
app.get("/usersPagination",getUsersPagination)
app.get("/userAllFunction",getAllFunction)
app.get("/userByType/:type",getUserByType)





