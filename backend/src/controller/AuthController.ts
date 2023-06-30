import { NextFunction, Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { AuthService } from "../service";
import { ApiResponse, UserDto } from "../types";

class AuthController {
  private authService: AuthService;
  constructor() {
    this.authService = new AuthService();
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    try {
      const user = await this.authService.login(email, password);
      const response: ApiResponse<UserDto> = {
        status: "success",
        data: user,
      };
      res.status(HttpStatus.OK).json(response);
    } catch (err) {
      next(err);
    }
  }
}

export default AuthController;
