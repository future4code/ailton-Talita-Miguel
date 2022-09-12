import { Request, Response } from "express";
import { requestCep } from "../services/requestCep";

export async function createAddress(req: Request, res: Response) {
  try {
    const cep = req.params.cep
    const {numero, complemento} = req.body

    console.log(cep)
    if (!cep) {
      res.statusCode = 400
      throw new Error ("Inform a valid CEP")
    }

    if (!numero) {
      res.statusCode = 400
      throw new Error ("Inform a valid number")
    }

    const receivedAddress = await requestCep(cep)

    if(!receivedAddress) {
      res.statusCode = 400
      throw new Error ("CEP doesn't exist.")
    }

    const newAddress = {
      cep: cep,
      logradouro: receivedAddress.logradouro,
      numero: numero,
      complemento: complemento,
      bairro: receivedAddress.bairro,
      cidade: receivedAddress.localidade,
      estado: receivedAddress.uf
    };

    console.log(newAddress)

    res.status(201).send(newAddress)
  } catch (error:any) {
    res.status(res.statusCode || 500).send({message:error.message || error.sqlMessage})
  }
}