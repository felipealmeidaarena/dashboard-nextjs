import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    fonts: {
        body: 'Roboto',
        heading: 'Roboto',
    },
    styles: {
        global: {
            body: {
                backgroundColor: 'gray.900',
                color: 'gray.50',
            }
        }
    }
})