import { Search } from './Header/Search'
import { Notification } from './Header/Notification'
import { Profile } from './Header/Profile'
import { Flex, Text } from '@chakra-ui/react'

export function Header() {
    return (
        <Flex as='header' width='100%' height='20' maxWidth={1480} mx='auto' py='2' px='6' align='center'>
            <Text fontSize='3xl' fontWeight='900' letterSpacing='tight' w='64'>Dashboard</Text>
            {/* Component - Search */}
            <Search />

            <Flex align='center' gap='10' ml='auto'>
                {/* Component - Notification */}
                <Notification />

                {/* Component - Profile */}
                <Profile />
            </Flex>
        </Flex>
    )
}