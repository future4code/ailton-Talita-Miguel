import { Request, Response } from "express"
import { connection } from "./connection"

export default async function selectUserByType(type:string):Promise<any> {
  const result = await connection("aula48_exercicio")
  .select("id", "name", "email", "type")
  .where("type", "like", `%${type}%`)

  return result
}