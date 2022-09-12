import { connection } from "./connection";

export const createUser = async(
  name: string,
  email: string,
  password: string
): Promise<any> => {
    return await connection("labecommerce_users").insert({
    name,
    email,
    password,
  });
}