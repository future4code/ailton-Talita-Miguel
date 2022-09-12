import { Usuario } from "../types/usuario";
import { connection } from "./connection";

export async function createUser(newAddress: Usuario) {
  try {
    return await connection("AddressTable")
      .insert({newAddress})
      
  } catch (error: any) {
    console.log(error);
  }
}
