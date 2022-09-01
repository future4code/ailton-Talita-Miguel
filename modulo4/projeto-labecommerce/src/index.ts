import { app } from "./app";
import connectionTest from "./endpoints/connectionTest";
import { postUser } from "./endpoints/postUser";
import {getAllUser} from "./endpoints/getAllUser"
import { postProduct } from "./endpoints/postProduct";
import { getAllProduct } from "./endpoints/getAllProduct";
import { postPurchase } from "./endpoints/postPurchase";
import { getAllPurchaseByUser } from "./endpoints/getAllPurchaseByUser";

app.get("/connectionTest", connectionTest)
app.get("/users", getAllUser)
app.get("/products", getAllProduct)
app.get("/users/:user_id/purchases", getAllPurchaseByUser)
app.post("/users", postUser)
app.post("/products", postProduct)
app.post("/purchases", postPurchase)