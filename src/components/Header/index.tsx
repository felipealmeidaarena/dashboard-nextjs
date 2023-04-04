import { Logo } from './Logo'
import { Search } from './Search'
import { Notification } from './Notification'
import { Profile } from './Profile'

import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { useSidebarDrawer } from '@/contexts/SidebarDrawerContext'
import { FaBars } from 'react-icons/fa'

export function Header() {
    const { onOpen } = useSidebarDrawer()
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex as='header' width='100%' height='20' maxWidth={1480} mx='auto' mt='3' px='10' align='center'>
            {!isWideVersion && (
                <IconButton aria-label='Open Navigation' icon={<Icon as={FaBars} />} fontSize='24' variant='unstyled' onClick={onOpen} mr='2'></IconButton>
            )}

            {/* Component - Logo */}
            <Logo />

            {/* Component - Search */}
            {isWideVersion && <Search />}

            <Flex align='center' gap='10' ml='auto'>
                {/* Component - Notification */}
                <Notification />

                {/* Component - Profile */}
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}