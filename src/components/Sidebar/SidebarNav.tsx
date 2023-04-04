import { Flex } from "@chakra-ui/react";
import { Navigation } from "./Navigation";
import { NavLink } from "./NavLink";
import { FaClipboardList, FaCodeBranch, FaTable, FaUserFriends } from "react-icons/fa";

export function SidebarNav() {
    return (
        <Flex direction='column' gap='12'>
            <Flex direction='column'>
                <Navigation title='General'>
                    <NavLink icon={FaTable}>Dashboard</NavLink>
                    <NavLink icon={FaUserFriends}>Usuários</NavLink>
                </Navigation>
            </Flex>
            <Flex direction='column'>
                <Navigation title='Automação'>
                    <NavLink icon={FaClipboardList}>Formulários</NavLink>
                    <NavLink icon={FaCodeBranch}>Automações</NavLink>
                </Navigation>
            </Flex>
        </Flex>
    )
}