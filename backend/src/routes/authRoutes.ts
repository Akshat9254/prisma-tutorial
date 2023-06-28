import { Router } from "express";
import { AuthController } from "../controller";

const authController = new AuthController();

const router = Router();

router.post("/login", authController.login.bind(authController));
export default router;
