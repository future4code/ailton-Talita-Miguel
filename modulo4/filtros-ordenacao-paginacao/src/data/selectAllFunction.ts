import { Request, Response } from "express";
import { connection } from "./connection";

export default async function selectAllFunction(
  name: string,
  info: string,
  type: string,
  size: number,
  offset: number,
  ordenation: string
): Promise<any> {
  const result = await connection("aula48_exercicio")
    .select()
    .where("name", "like", `%${name}%`)
    .orWhere("type", "like", `%${type}`)
    .orderBy(info, ordenation)
    .limit(size)
    .offset(offset);

  return result;
}
