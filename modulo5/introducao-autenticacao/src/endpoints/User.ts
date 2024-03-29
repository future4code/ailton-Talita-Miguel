import { Request, Response } from "express";
import { UserDatabase } from "../data/userDatabase";
import { EmailExist } from "../error/EmailExist";
import { EmailNoExist } from "../error/EmailNoExist";
import { InvalidCredencial } from "../error/InvalidCredencial";
import { MissingFields } from "../error/MissingFields";
import User from "../model/User";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";

class UserEndpoint {
  public async createUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!password || password.length < 6) {
        throw new InvalidCredencial();
      }

      const userDataBase = new UserDatabase();

      if (!email || email.indexOf("@") === -1) {
        throw new InvalidCredencial();
      }

      const emailAlreadyExist = await userDataBase.getUserByEmail(email);

      if (emailAlreadyExist.length) {
        throw new EmailExist();
      }

      const id = new GenerateId().createId();

      const user = new User(id, email, password);

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

      if (!emailAlreadyExist.length) {
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

      if (!email || !password) {
        throw new MissingFields();
      }

      const userData = new UserDatabase();

      const validLogin = await userData.getUserLogin(email, password);

      if (!validLogin.length) {
        throw new InvalidCredencial();
      }

      const token = new Authenticator().generateToken(validLogin[0].id);

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  public async getUserById(req: Request, res: Response) {
    try {
      const token = req.headers.authorization!;

			console.log(token)

      const id = new Authenticator().verifyToken(token);

      const userData = new UserDatabase();

			const user =  await userData.getUserById(id);

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
