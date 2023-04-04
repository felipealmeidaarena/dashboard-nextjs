import { Flex, Input, Icon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export function Search() {
    return (
        <Flex as='label' align='center' flex='1' py='4' px='8' maxWidth={400} alignSelf='center' color='gray.200' position='relative' bg='gray.800' borderRadius='full'>
            <Input color='gray.50' variant='unstyled' px='4' mr='4' placeholder='Buscar na plataforma' _placeholder={{ color: 'gray.400' }} />
            <Icon as={FaSearch} />
        </Flex>
    );
}