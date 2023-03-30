import { Button, Flex } from '@chakra-ui/react'

export function Pagination() {
    return (
        <Flex direction='row' mt='8' align='center' justify='space-between' gap='6'>
            <Flex gap='3'>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Flex>
            <Flex gap='3'>
                <Button size='sm' fontSize='xs' width='4' colorScheme='purple' disabled _disabled={{ backgroundColor: 'purple.500', cursor: 'default' }}>
                    1
                </Button>
                <Button size='sm' fontSize='xs' width='4' backgroundColor='gray.700' _hover={{ backgroundColor: 'gray.500', cursor: 'default' }}>
                    2
                </Button>
                <Button size='sm' fontSize='xs' width='4' backgroundColor='gray.700' _hover={{ backgroundColor: 'gray.500', cursor: 'default' }}>
                    3
                </Button>
                <Button size='sm' fontSize='xs' width='4' backgroundColor='gray.700' _hover={{ backgroundColor: 'gray.500', cursor: 'default' }}>
                    4
                </Button>
            </Flex>
        </Flex>
    )
}