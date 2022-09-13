import User from "../model/User";
import { BaseDatabase } from "./BaseDataBase";

export class UserDatabase extends BaseDatabase {
  public async createUser(user: User) {
    await this.getConnection()
      .insert({
        id: user.getId(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole()
      })
      .into("User");
  }

  public async getUserByEmail(email: string) {
    const result = await this.getConnection()
      .select("*")
      .from("User")
      .where({ email });

    return result;
  }

  public async getUserLogin(email: string, password: string) {
    const result = await this.getConnection()
      .select("*")
      .from("User")
      .where({ email })
      .andWhere({ password });

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