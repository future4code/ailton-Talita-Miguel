import { connection } from "./baseData";

export default async function postUser(
  name:string, nickname:string, email:string
) {
  const result = await connection
    .insert({ name, nickname, email })
    .into("Users");
  
  return result[0]
}