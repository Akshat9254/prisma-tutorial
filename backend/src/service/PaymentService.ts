import { razorpayInstance } from "../config";

class PaymentService {
  constructor() {}
  async checkout(amount: number) {
    return razorpayInstance.orders.create({
      amount: amount * 100,
      currency: "INR",
    });
  }
}
export default PaymentService;
