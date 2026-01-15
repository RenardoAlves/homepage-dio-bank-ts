import { ChakraProvider, Button } from "@chakra-ui/react";
import { login } from "../services/login";

export const LoginButton = () => {
    return(
        <ChakraProvider>
            <Button onClick={login} colorScheme='teal' size='sm' width='40%' marginTop='5px'>
              Login
            </Button>
        </ChakraProvider>
    )
}