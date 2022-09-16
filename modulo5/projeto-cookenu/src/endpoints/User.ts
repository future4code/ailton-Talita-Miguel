import { Request, Response } from "express";
import { UserDatabase } from "../data/userDatabase";
import { EmailExist } from "../error/EmailExist";
import { EmailNoExist } from "../error/EmailNoExist";
import { InvalidCredential } from "../error/InvalidCredential";
import { MissingFields } from "../error/MissingFields";
import { PermissionDenied } from "../error/PermissionDenied";
import UserModel from "../model/User";
import User, { USER_ROLES } from "../model/User";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

class UserEndpoint {
  public async createUser(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body;

      if (
        !email ||
        !password ||
        !email.includes("@") ||
        password.length < 6 ||
        !role ||
        !name
      ) {
        throw new InvalidCredential();
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

      const roleUpper: USER_ROLES = role.toUpperCase();

      const newUser = new UserModel(id, name, email, hashPassword, roleUpper);

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
        throw new InvalidCredential();
      }

      const emailAlreadyExist = await userDataBase.getUserByEmail(email);

      if (!emailAlreadyExist) {
        throw new EmailNoExist();
      }

      const result = await userDataBase.getUserByEmail(email);

      res.status(200).send({ message: "Dados do usuário", result });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password || !email.includes("@") || password.length < 6) {
        throw new InvalidCredential();
      }

      const userData = new UserDatabase();
      const emailExist: any = await userData.getUserByEmail(email);
      let correctPassword: boolean = false;

      if (!emailExist) {
        throw new EmailNoExist();
      }

      const hash = emailExist.getPassword();

      correctPassword = await new HashManager().compareHash(password, hash);

      if (!correctPassword) {
        throw new InvalidCredential();
      }

      const token = new Authenticator().generateToken({id: emailExist.getId(), role: emailExist.role});


      res.status(200).send({ token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  public async getUserByIdProfile(req: Request, res: Response) {
    try {
      const token = req.headers.authorization!;

      const isOk = new Authenticator().verifyToken(token);

      const userData = new UserDatabase();

      const user: UserModel = await userData.getUserById(isOk.id);

      if (!user) {
        throw new InvalidCredential();
      }

      res.status(200).send({
        message: {
          id: user.getId(),
          email: user.getEmail(),
          role: user.getRole(),
        },
      });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  public async getUserById(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      const token = req.headers.authorization!;

      if (!userId) {
        throw new InvalidCredential();
      }

      const isOk = new Authenticator().verifyToken(token);

      const userData = new UserDatabase();

      const user: UserModel = await userData.getUserById(isOk.id);

      if (!isOk) {
        throw new PermissionDenied();
      }

      res.status(200).send({
        message: {
          id: user.getId(),
          email: user.getEmail(),
          name: user.getName(),
        },
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
}

export default UserEndpoint;
