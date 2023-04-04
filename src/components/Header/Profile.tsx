import { Avatar, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex gap='5'>
            { showProfileData && (
                <Flex direction='column' justify='center' align='end'>
                    <Text fontSize='16'>Felipe Almeida</Text>
                    <Text color='gray.400' fontSize='12'>felipe.lipe12.fl@outlook.com</Text>
                </Flex>
            )}
            <Avatar size='md' name='Felipe Melo' />
        </Flex>
    );
}