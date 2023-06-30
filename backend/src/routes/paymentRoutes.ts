import { Router } from "express";
import { PaymentController } from "../controller";
const router = Router();
const paymentController = new PaymentController();

router.post("/checkout", paymentController.checkout.bind(paymentController));

export default router;
