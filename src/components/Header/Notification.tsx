import { Button, Flex, Icon } from "@chakra-ui/react";
import { FaBell, FaCog } from "react-icons/fa";

export function Notification() {
    return (
        <Flex gap={["1", "2"]}>
            <Button backgroundColor='gray.900' fontSize='20' _hover={{backgroundColor: 'gray.600'}}>
                <Icon as={FaBell} />
            </Button>
            <Button backgroundColor='gray.900' fontSize='20' _hover={{backgroundColor: 'gray.600'}}>
                <Icon as={FaCog} />
            </Button>
        </Flex>
    );
}