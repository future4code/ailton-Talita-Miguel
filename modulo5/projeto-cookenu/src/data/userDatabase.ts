import User from "../model/User";
import { BaseDatabase } from "./BaseDataBase";

export class UserDatabase extends BaseDatabase {
  public async createUser(user: User) {
    await this.getConnection()
      .insert({
        id: user.getId(),
        name_user: user.getName(),
        email_user: user.getEmail(),
        password_user: user.getPassword(),
      })
      .into("cookenu_users");
  }

  public async getUserByEmail(email: string): Promise<User> {
    const result = await this.getConnection()
      .select("*")
      .from("cookenu_users")
      .where("email_user", email);

    const newUser = new User(
      result[0].id,
      result[0].name_user,
      result[0].email_user,
      result[0].password_user
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
      .from("User")
      .where({ id });

    return result[0];
  }

  public async getUserByPassword(password: string) {
    const result = await this.getConnection()
      .select("*")
      .from("User")
      .where({ password });

    return result;
  }
}
