import { Request, Response } from "express";
import { UserDatabase } from "../data/userDatabase";
import { EmailExist } from "../error/EmailExist";
import { EmailNoExist } from "../error/EmailNoExist";
import { InvalidCredencial } from "../error/InvalidCredencial";
import { MissingFields } from "../error/MissingFields";
import User from "../model/User";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

class UserEndpoint {
  public async createUser(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      if (
        !name ||
        !password ||
        password.length < 6 ||
        !email ||
        email.indexOf("@") === -1
      ) {
        throw new InvalidCredencial();
      }

      const userDataBase = new UserDatabase();

      const emailAlreadyExist = await userDataBase.getUserByEmail(email);

      if (emailAlreadyExist) {
        throw new EmailExist();
      }

      const id = new GenerateId().createId();

      const hashPassword: string = await new HashManager().generateHash(
        password
      );

      const user = new User(id, name, email, hashPassword);

      await userDataBase.createUser(user);

      const token = new Authenticator().generateToken(id);

      res
        .status(201)
        .send({ message: "Usuário cadastrado com sucesso", token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  public async getUserByEmail(req: Request, res: Response) {
    try {
      const { email } = req.body;

      const userDataBase = new UserDatabase();

      if (!email || email.indexOf("@") === -1) {
        throw new InvalidCredencial();
      }

      const emailAlreadyExist = await userDataBase.getUserByEmail(email);

      if (!emailAlreadyExist) {
        throw new EmailNoExist();
      }

      const result = await userDataBase.getUserByEmail(email);

      res.status(201).send({ message: "Dados do usuário", result });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (
        !email ||
        !password ||
        !email.includes("@") ||
        password.length < 6
      ) {
        throw new InvalidCredencial();
      }

      const userData = new UserDatabase();

      const emailExist: any = await userData.getUserByEmail(email);

      let correctPassword: boolean = false;
      if (!emailExist) {
        throw new EmailNoExist();
      }

      const hash = emailExist.getPassword();

      correctPassword = await new HashManager().compareHash(
        password,
        hash
      );

      if (!correctPassword) {
        throw new InvalidCredencial();
      }

      const token = new Authenticator().generateToken(emailExist.getId());

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  public async getUserById(req: Request, res: Response) {
    try {
      const token = req.headers.authorization!;

      console.log(token);

      const id = new Authenticator().verifyToken(token);

      const userData = new UserDatabase();

      const user = await userData.getUserById(id);

      if (!user) {
        throw new InvalidCredencial();
      }

      res.status(200).send({ message: "Dados do usuário", user });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }
}

export default UserEndpoint;
