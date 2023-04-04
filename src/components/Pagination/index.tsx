import { Button, Flex } from '@chakra-ui/react'
import { NavPagination } from './NavPagination'

export function Pagination() {
    return (
        <Flex direction='row' mt='8' align='center' justify='space-between' gap='6'>
            <Flex gap='3'>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Flex>
            <Flex gap='3'>
                <NavPagination number={1} isCurrent />
                <NavPagination number={2} />
                <NavPagination number={3} />
                <NavPagination number={4} />
                <NavPagination number={4} />
            </Flex>
        </Flex>
    )
}