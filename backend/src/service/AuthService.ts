import { prisma } from "../config";
import CustomErrorHandler from "./CustomErrorHandler";

class AuthService {
  async login(email: string, password: string) {
    const user = await prisma.user.findUniqueOrThrow({ where: { email } });
    if (user.password !== password) {
      throw CustomErrorHandler.wrongCredentails("Credentials");
    }

    return user;
  }
}

export default AuthService;
