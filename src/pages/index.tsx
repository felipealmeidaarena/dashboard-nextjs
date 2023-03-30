import { Flex, Button } from '@chakra-ui/react'
import { Input } from '@/components/Form/Input'

export default function SignIn() {
  return (
    <Flex width='100vw' height='100vh' align='center' justify='center'>
      <Flex as='form' backgroundColor='gray.700' width='100%' maxWidth={360} rounded='xl' direction='column' gap='5' p='8'>
        <Flex direction='column' gap='3'>
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Flex>
        <Button type='submit' backgroundColor='purple.600' _hover={{ bgColor: "purple.500" }}>Entrar</Button>
      </Flex>
    </Flex>
  )
}
