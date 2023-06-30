import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import api from "../api";

type PaymentPageProps = {};

const checkoutHandler = async (amount: number) => {
  //   const { data } = await api.post("/payment/checkout", {
  //     amount,
  //   });

  console.log(window);
};

const PaymentPage: React.FC<PaymentPageProps> = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={"80vh"}>
      {[2000, 3000, 1500].map((amount, index) => (
        <Button key={index} onClick={() => checkoutHandler(amount)}>
          {amount}
        </Button>
      ))}
    </Stack>
  );
};
export default PaymentPage;
