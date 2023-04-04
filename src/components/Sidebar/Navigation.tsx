import {  Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavigationProps {
    title: string;
    children: ReactNode;
}

export function Navigation({ title, children }: NavigationProps) {
    return (
        <Flex direction='column'>
            <Text fontWeight='bold' color='gray.400' fontSize='small' textTransform='uppercase'>{title}</Text>
            <Flex direction='column' gap='2' mt='6' align='stretch'>
                {children}
            </Flex>
        </Flex>
    );
}