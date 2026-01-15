import { 
  ChakraProvider,
  Center,
  Box
 } from "@chakra-ui/react"
import { LoginCard } from "./components/LoginCard";
import { Header } from "./components/Header";

function App() {
  return (
    <ChakraProvider>
          <Header/>
          <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
            <Center>
              <LoginCard/>
            </Center>
          </Box>
        </ChakraProvider>
  );
}

export default App;
