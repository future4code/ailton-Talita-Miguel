import UserModel from "../model/User";
import { BaseDatabase } from "./BaseDataBase";

export class UserDatabase extends BaseDatabase {
  
  public async createUser(user: UserModel) {
    await this.getConnection()
      .insert({
        id: user.getId(),
        name_user: user.getName(),
        email_user: user.getEmail(),
        password_user: user.getPassword(),
        role: user.getRole(),
      })
      .into("cookenu_users");
    return `Usuário ${user.getName()} criado com sucesso`;
  }

  public async getUserByEmail(email: string) {
    const result = await this.getConnection()
      .select("*")
      .from("cookenu_users")
      .where("email_user", email);

    if (!result.length) {
      return undefined;
    }
    const newUser = new UserModel(
      result[0].id,
      result[0].name_user,
      result[0].email_user,
      result[0].password_user,
      result[0].role
    );
    return newUser;
  }

  public async getUserLogin(email: string, password: string) {
    const result = await this.getConnection()
      .select("*")
      .from("cookenu_users")
      .where("email_user", email)
      .andWhere("password_user", password);

    return result;
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from("cookenu_users")
      .where("id", id);

    if (!result.length) {
      return undefined;
    }
    const newUser = new UserModel(
      result[0].id,
      result[0].name_user,
      result[0].email_user,
      result[0].password_user,
      result[0].role
    );
    return newUser;
  }
}
