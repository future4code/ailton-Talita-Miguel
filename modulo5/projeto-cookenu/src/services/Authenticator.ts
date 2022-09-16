import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { USER_ROLES } from "../model/User";

dotenv.config();

interface UserSystem {
  id: string;
  role: USER_ROLES;
}

class Authenticator {
  generateToken(userInfo: UserSystem) {
    const token = jwt.sign(
      {
        userInfo,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: process.env.ACCESS_EXPIRE_IN as string,
      }
    );

    return token;
  }

  verifyToken(token: string) {
    try {
      const verify = jwt.verify(token, process.env.JWT_KEY as string) as any;

      const returnType = verify.userInfo;

      return returnType;
    } catch (error) {
      return false;
    }
  }
}

export default Authenticator;
