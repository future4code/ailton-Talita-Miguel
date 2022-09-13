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
    let verify;
    try {
      verify = jwt.verify(token, process.env.JWT_KEY as string) as any;
      console.log(verify);

      const returnType: UserSystem = verify.userInfo;
      return returnType;
    } catch (error) {
      verify = false
      return verify
    }
  }
}

export default Authenticator;
