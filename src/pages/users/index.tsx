import { Header } from '@/components/Header';
import { Pagination } from '@/components/Pagination';
import { Sidebar } from '@/components/Sidebar';
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from '@chakra-ui/react'
import { FaPlus, FaPen, FaTrashAlt } from 'react-icons/fa';

export default function UserList() {
    return (
        <Flex direction='column' height='100vh'>
            <Header />

            <Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius='8' backgroundColor='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Usuários</Heading>
                        <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={FaPlus} fontSize='12' />}>Criar novo</Button>
                    </Flex>
                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' width='8'>
                                    <Checkbox colorScheme='purple' />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th width='8'>Ações</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='purple' />
                                </Td>
                                <Td>
                                    <Flex direction='column'>
                                        <Text fontWeight='bold'>Felipe Almeida</Text>
                                        <Text fontSize='sm' color='gray.400'>felipe.lipe12.fl@outlook.com</Text>
                                    </Flex>
                                </Td>
                                <Td>
                                    <Text>12 de outubro, 1996</Text>
                                </Td>
                                <Td>
                                    <Flex gap='5'>
                                        <Button as='a' size='sm' fontSize='sm' colorScheme='green' leftIcon={<Icon as={FaPen} fontSize='12' />}>Editar</Button>
                                        <Button as='a' size='sm' fontSize='sm' colorScheme='red' leftIcon={<Icon as={FaTrashAlt} fontSize='12' />}>Delete</Button>
                                    </Flex>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='purple' />
                                </Td>
                                <Td>
                                    <Flex direction='column'>
                                        <Text fontWeight='bold'>Felipe Almeida</Text>
                                        <Text fontSize='sm' color='gray.400'>felipe.lipe12.fl@outlook.com</Text>
                                    </Flex>
                                </Td>
                                <Td>
                                    <Text>12 de outubro, 1996</Text>
                                </Td>
                                <Td>
                                    <Flex gap='5'>
                                        <Button as='a' size='sm' fontSize='sm' colorScheme='green' leftIcon={<Icon as={FaPen} fontSize='12' />}>Editar</Button>
                                        <Button as='a' size='sm' fontSize='sm' colorScheme='red' leftIcon={<Icon as={FaTrashAlt} fontSize='12' />}>Delete</Button>
                                    </Flex>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='purple' />
                                </Td>
                                <Td>
                                    <Flex direction='column'>
                                        <Text fontWeight='bold'>Felipe Almeida</Text>
                                        <Text fontSize='sm' color='gray.400'>felipe.lipe12.fl@outlook.com</Text>
                                    </Flex>
                                </Td>
                                <Td>
                                    <Text>12 de outubro, 1996</Text>
                                </Td>
                                <Td>
                                    <Flex gap='5'>
                                        <Button as='a' size='sm' fontSize='sm' colorScheme='green' leftIcon={<Icon as={FaPen} fontSize='12' />}>Editar</Button>
                                        <Button as='a' size='sm' fontSize='sm' colorScheme='red' leftIcon={<Icon as={FaTrashAlt} fontSize='12' />}>Delete</Button>
                                    </Flex>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Flex>
    );
}