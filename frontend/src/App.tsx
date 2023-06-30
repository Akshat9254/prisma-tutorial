import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { HomePage, PaymentPage } from "./pages";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Container maxW={"container.md"}>
            <Routes>
              <Route path="/" element={<PaymentPage />} />
              <Route path="/home" element={<HomePage />} />
            </Routes>
          </Container>
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
