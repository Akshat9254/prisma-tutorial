import { NextFunction, Request, Response } from "express";
import { PaymentService } from "../service";
import HttpStatus from "http-status-codes";

class PaymentController {
  private paymentService: PaymentService;
  constructor() {
    this.paymentService = new PaymentService();
  }

  async checkout(req: Request, res: Response, next: NextFunction) {
    const order = await this.paymentService.checkout(Number(req.body.amount));
    res.status(HttpStatus.OK).json({ order });
  }
}
export default PaymentController;
