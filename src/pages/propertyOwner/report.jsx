import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

function Report() {
    const data = [
        { week: '1st week', value: 4 },
        { week: '2nd week', value: 1 },
        { week: '3rd week', value: 2 },
        { week: '4th week', value: 5 }
    ];

    const dataIncome = [
        { week: 'Hotel', value: 100000 },
        { week: 'Apartment', value: 85000 },
        { week: 'Boutique', value: 25000 }
    ];

    return (
        <Container>
            <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>
                OCCUPANCY REPORT 
            </Typography>
            <Stack direction='row' justifyContent='space-between' marginBottom='3vh'>
                <BarChart
                    xAxis={[{ scaleType: 'band', data: data.map(item => item.week) }]}
                    series={[{ data: data.map(item => item.value), label: 'Reservations of last month' }]}

                    width={600}
                    height={300}
                />
                <Stack direction='column' justifyContent='center' alignItems='center'>
                    <Typography>MY PROPERTY COUNT</Typography>
                    <PieChart
                    series={[
                        {
                          data: [
                            { id: 0, value: 10, label: 'HOTELS' },
                            { id: 1, value: 15, label: 'APARTMENTS' },
                            { id: 2, value: 20, label: 'BOUTIQUES' },
                          ],
                        },
                    ]}
                    width={500}
                    height={200}
                />
                </Stack>
            </Stack>
            <BarChart className="custom-barchart"
                xAxis={[{ scaleType: 'band', data: dataIncome.map(item => item.week) }]}
                series={[{ 
                    data: dataIncome.map(item => item.value), 
                    label: 'Monthly Income',
                    colors: ['#FF5733', '#33FF57', '#5733FF'] 
                }]}
                width={1000}
                height={300}
            />
        </Container>
    )
}

export default Report;
