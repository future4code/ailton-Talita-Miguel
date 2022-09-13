import { Request, Response } from "express";
import { UserDatabase } from "../data/userDatabase";
import { EmailExist } from "../error/EmailExist";
import { EmailNoExist } from "../error/EmailNoExist";
import { InvalidCredencial } from "../error/InvalidCredencial";
import { MissingFields } from "../error/MissingFields";
import { PermissionDenied } from "../error/PermissionDenied";
import User from "../model/User";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

class UserEndpoint {
  public async createUser(req: Request, res: Response) {
    try {
      const { email, password, role } = req.body;

      if (!password || password.length < 6 || !email || !role) {
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

      const hashPassword: string = await new HashManager().generateHash(
        password
      );

      const roleUpper = role.toUpperCase() ;

      const newUser = new User(id, email, hashPassword, roleUpper);

      const result = await userDataBase.createUser(newUser);

      const token = new Authenticator().generateToken({ id, role: roleUpper });

      res
        .status(201)
        .send({ message: "Usuário cadastrado com sucesso", result, token });
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

      if (!email || !password || !email.includes("@") || password.length < 6) {
        throw new MissingFields();
      }

      const userData = new UserDatabase();

      const emailExist = await userData.getUserByEmail(email);

      if (!emailExist) {
        throw new EmailNoExist();
      }

      const correctPassword: boolean = await new HashManager().compare(
        password,
        emailExist[0].password
      );

      if (!correctPassword) {
        throw new InvalidCredencial();
      }

      // const validLogin = await userData.getUserLogin(email, password);

      // if (!validLogin.length) {
      //   throw new InvalidCredencial();
      // }

      const token = new Authenticator().generateToken({
        id: emailExist[0].id,
        role: emailExist[0].role,
      });

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  public async getUserById(req: Request, res: Response) {
    try {
      const token = req.headers.authorization!;

      const isOk = new Authenticator().verifyToken(token);

      if(isOk.role === "ADMIN") {
        throw new PermissionDenied();
      }

      const userData = new UserDatabase();

      const user = await userData.getUserById(isOk.id);

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
