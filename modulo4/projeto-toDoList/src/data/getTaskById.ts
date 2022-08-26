import { connection } from "./baseData";

export default async function getTaskById(id: number):Promise<any> {
  const result = await connection.raw(`SELECT Task.id, title, description, limit_date, status, 
  creator_user_id, nickname FROM Task JOIN Users ON Task.creator_user_id = Users.id 
  WHERE Task.id = ${id}`)

  return result[0];
}
