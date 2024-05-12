import { Container, Stack, Typography } from "@mui/material";
import React, {useEffect} from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import {useDispatch, useSelector} from "react-redux";
import {propertyCounts, reservationCounts, revenueCounts} from "../../store/slices/reports-slice.js";

function Report() {
    const dispatch = useDispatch();
    const propertyOwner = useSelector((state) => state.propertyOwner.localStorage);

    const reservationCount = useSelector((state) => state.reports.reservationCount);
    const propertyCount = useSelector((state) => state.reports.propertyCount);
    const revenue = useSelector((state) => state.reports.revenue);

    const dataIncome = revenue ? [
        { week: 'Hotel', value: revenue.hotel },
        { week: 'Apartment', value: revenue.apartments },
        { week: 'Boutique', value: revenue.boutiques }
    ] : [];

    const data = reservationCount ? [
        { week: '1st week', value: reservationCount.lastWeek },
        { week: '2nd week', value: reservationCount.lastTwoWeeks },
        { week: '3rd week', value: reservationCount.lastThreeWeeks },
        { week: '4th week', value: reservationCount.lastFourWeeks }
    ] : [];

    const data2 = propertyCount ? [
            { id: 0, value: propertyCount.hotel, label: 'HOTELS' },
            { id: 1, value: propertyCount.apartments, label: 'APARTMENTS' },
            { id: 2, value: propertyCount.boutiques, label: 'BOUTIQUES' },
        ] : [];

    useEffect(() => {
        dispatch(reservationCounts(propertyOwner.id));
        dispatch(propertyCounts(propertyOwner.id));
        dispatch(revenueCounts(propertyOwner.id));
    }, [dispatch]);

    return (
        <Container>
            <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>
                OCCUPANCY REPORT 
            </Typography>
            <Stack direction='row' justifyContent='space-between' marginBottom='3vh'>
                <div className={'text-center font-semibold text-2xl'} style={{fontSize:'1.5rem',fontWeight:'bold'}}>
                    <div>Reservation counts for last month</div>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: data.map(item => item.week) }]}
                        series={[{ data: data.map(item => item.value), label: 'Reservations of last month' }]}

                        width={600}
                        height={300}
                    />
                </div>

                <Stack direction='column' justifyContent='center' alignItems='center'>
                    <Typography className={'text-center font-semibold text-2xl'} style={{fontSize:'1.5rem',fontWeight:'bold'}}>Property counts for each property category</Typography>
                    <PieChart
                    series={[
                        {
                          data: data2
                        },
                    ]}
                    width={500}
                    height={200}
                />
                </Stack>
            </Stack>
            <div className={'text-center font-semibold text-2xl'}>
                <div className={'text-center font-semibold text-2xl'} style={{fontSize:'1.5rem',fontWeight:'bold'}}>Revenue for each property category (last month)</div>
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
            </div>

        </Container>
    )
}

export default Report;
