import { Button } from "@chakra-ui/react";

interface NavPaginationProps {
    number: number;
    isCurrent?: boolean;
}

export function NavPagination({ isCurrent = false, number }: NavPaginationProps) {
    if (isCurrent) {
        return (<Button size='sm' fontSize='xs' width='4' colorScheme='purple' disabled _disabled={{ backgroundColor: 'purple.500', cursor: 'default' }}>
            {number}
        </Button>)
    }
    return (
        <Button size='sm' fontSize='xs' width='4' backgroundColor='gray.700' _hover={{ backgroundColor: 'gray.500', cursor: 'default' }}>
            {number}
        </Button>
    )
}