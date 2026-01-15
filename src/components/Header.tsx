import { ChakraProvider, Box } from "@chakra-ui/react"

export const Header = () => {
  return (
    <ChakraProvider>
      <Box bg='#595A63' p='4' fontSize='30px' fontFamily='Inter' color='white'>
        Dio Bank
      </Box>
    </ChakraProvider>
  )
}
