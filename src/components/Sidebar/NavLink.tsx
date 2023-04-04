import { Button, Icon, Text, LinkProps as ChakraLinkProps, Link } from "@chakra-ui/react";
import { ElementType } from 'react';

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
    return (
        <Button backgroundColor='gray.900' justifyContent='flex-start' _hover={{ backgroundColor: 'gray.600' }}>
            <Link display='flex' direction='row' gap='4' {...rest}>
                <Icon as={icon} />
                <Text>{children}</Text>
            </Link>
        </Button>
    );
}