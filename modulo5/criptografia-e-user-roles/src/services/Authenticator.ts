import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export enum typeUser {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

interface UserSystem {
  id: string;
  role: typeUser;
}

class Authenticator {
  generateToken(userInfo: UserSystem) {
    const token = jwt.sign(
      {
        userInfo,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: "1hr",
      }
    );

    return token;
  }

  verifyToken(token: string) {
    const verify = jwt.verify(token, process.env.JWT_KEY as string) as any;

    const returnType: UserSystem = verify.userInfo;

    return returnType;
  }
}

export default Authenticator;
