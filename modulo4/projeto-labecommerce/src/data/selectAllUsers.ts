import { connection } from "./connection";

export const selectAllUsers = async(): Promise<any> => {
    return await connection("labecommerce_users").select("*")
}