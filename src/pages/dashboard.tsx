import { Flex, Box, Text, SimpleGrid, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic';
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})
const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[300],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[500]
        },
        axisTicks: {
            color: theme.colors.gray[500]
        },
        categories: [
            '2021-03-18T00:00:00.000Z',
            '2021-03-19T00:00:00.000Z',
            '2021-03-20T00:00:00.000Z',
            '2021-03-21T00:00:00.000Z',
            '2021-03-22T00:00:00.000Z',
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
};
const series = [
    { name: 'series1', data: [31, 120, 10, 28, 61] }
];

export default function Dashboard() {
    return (
        <Flex direction='column' height='100vh'>
            <Header />

            <Flex width='100%' my='3' maxWidth={1480} mx='auto' px='10'>
                <Sidebar />

                <SimpleGrid flex='1' gap='10' minChildWidth='320px' alignItems='flex-start'>
                    <Box padding={["4", "6"]} backgroundColor='gray.800' borderRadius='8'>
                        <Text fontSize='lg' mb='4'>Inscritos da Semana</Text>
                        <Chart options={options} series={series} type='area' height='160' />
                    </Box>
                    <Box padding='8' backgroundColor='gray.800' borderRadius='8'>
                        <Text fontSize='lg' mb='4'>Taxa de Abertura</Text>
                        <Chart options={options} series={series} type='area' height='160' />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}

