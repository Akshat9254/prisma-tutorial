import { ChakraProvider, Container } from "@chakra-ui/react";
import { HomePage } from "./pages";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Container maxW={"container.md"}>
          <h1>Hello</h1>
          <HomePage />
        </Container>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
