import * as bcrypt from "bcryptjs";
import dotenv from "dotenv";

export class HashManager {
  public generateHash = async (password: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(password, salt);
    return result;
  };

  public compare = async (password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash);
  };
}
