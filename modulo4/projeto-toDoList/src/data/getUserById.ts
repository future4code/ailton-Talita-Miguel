import { connection } from "./baseData";

export default async function getUserById(id: number):Promise<any> {
  const result = await connection
    .select("id", "nickname")
    .from("Users")
    .where("Users.id", id);

  return result[0];
}
