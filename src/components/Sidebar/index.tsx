import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from '@chakra-ui/react'
import { SidebarNav } from './SidebarNav'
import { useSidebarDrawer } from '@/contexts/SidebarDrawerContext'

export function Sidebar() {
    const { isOpen, onClose } = useSidebarDrawer()

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent backgroundColor='gray.900' p='4'>
                        <DrawerCloseButton mt='6'></DrawerCloseButton>
                        <DrawerHeader>Navegação</DrawerHeader>
                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }
    return (
        <Box as='aside' width='56' mr='6'>
            <SidebarNav />
        </Box>
    )
}