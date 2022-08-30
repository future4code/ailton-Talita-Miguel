import { Request, Response } from "express"
import { connection } from "./connection"

export default async function selectUserByName(name:string):Promise<any> {
  const result = await connection("aula48_exercicio")
  .select("id", "name", "email", "type")
  .where("name", "like", `%${name}%`)

  return result
}