import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react"

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name} fontSize='12' fontWeight='normal'>{label}</FormLabel>}

            <ChakraInput
                id={name}
                name={name}
                type='email'
                variant='filled'
                backgroundColor='gray.900'
                focusBorderColor='purple.600'
                _hover={{
                    bgColor: 'gray.800',
                    borderColor: 'gray.500'
                }}
                {...rest}
            />

        </FormControl>
    )
}