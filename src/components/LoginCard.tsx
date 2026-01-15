import {
  Center,
  Input,
  Box,
} from "@chakra-ui/react"
import { LoginButton } from "./LoginButton"

export const LoginCard = () => {
  return (
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' width='40%'>
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input margin='10px' width='95%' placeholder="E-mail" type='email' />
      <Input margin='10px' width='95%' placeholder="Password" type='password' />
      <Center>
        <LoginButton />
      </Center>
    </Box>
  )
}