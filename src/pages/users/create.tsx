import { Input } from '@/components/Form/Input';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Box, Button, Divider, Flex, Heading, Icon, SimpleGrid } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa';

export default function UserCreate() {
    return (
        <Flex direction='column' height='100vh'>
            <Header />

            <Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius='8' backgroundColor='gray.800' p='8'>
                    <Flex direction='column'>
                        <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>
                        <Divider my='6' borderColor='gray.600' />
                        <Flex direction='column' gap='5'>
                            <SimpleGrid minChildWidth='240px' spacing='8' width='100%'>
                                <Input name='name' label='Nome Completo' />
                                <Input name='email' label='Email' />
                            </SimpleGrid>

                            <SimpleGrid minChildWidth='240px' spacing='8' width='100%'>
                                <Input name='password' label='Senha' />
                                <Input name='password_confirmation' label='Confirme a senha' />
                            </SimpleGrid>

                            <Flex mt='8' justify='flex-end' gap='4'>
                                <Button colorScheme='red'>Cancelar</Button>
                                <Button colorScheme='purple'>Salvar</Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    );
}