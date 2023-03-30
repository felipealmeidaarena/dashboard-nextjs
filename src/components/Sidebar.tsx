import { Box, Flex, Text, Link, Icon } from '@chakra-ui/react'
import { FaTable, FaUserFriends, FaClipboardList, FaCodeBranch } from 'react-icons/fa'

export function Sidebar() {
    return (
        <Box as='aside' width='64' mr='4'>
            <Flex direction='column' gap='12' align='flex-start'>
                <Flex direction='column'>
                    <Text fontWeight='bold' color='gray.400' fontSize='small' textTransform='uppercase'>Geral</Text>
                    <Flex direction='column' gap='4' mt='6' align='stretch'>
                        <Link>
                            <Flex align='center' gap='4'>
                                <Icon as={FaTable} />
                                <Text>Dashboard</Text>
                            </Flex>
                        </Link>
                        <Link>
                            <Flex align='center' gap='4'>
                                <Icon as={FaUserFriends} />
                                <Text>Usuários</Text>
                            </Flex>
                        </Link>
                    </Flex>
                </Flex>
                <Flex direction='column'>
                    <Text fontWeight='bold' color='gray.400' fontSize='small' textTransform='uppercase'>Automação</Text>
                    <Flex direction='column' gap='4' mt='6' align='stretch'>
                        <Link>
                            <Flex align='center' gap='4'>
                                <Icon as={FaClipboardList} />
                                <Text>Formulários</Text>
                            </Flex>
                        </Link>
                        <Link>
                            <Flex align='center' gap='4'>
                                <Icon as={FaCodeBranch} />
                                <Text>Automação</Text>
                            </Flex>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}