import { Request, Response } from "express"
import { connection } from "./connection"

export default async function selectUsersOrdered(search:string):Promise<any> {
  const result = await connection("aula48_exercicio")
  .select("*")
  .orderBy(`${search}`, 'asc')

  return result
}