import { connection } from "./baseData";

export default async function postTask(
  title:string, description:string, limit_date:string, creator_user_id:number
):Promise<number> {

  const result = await connection
    .insert({title, description, limit_date, creator_user_id })
    .into("Task");
  
  return result[0]
}