import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function BookingDetails() {
    const travellerIsLoggedIn = useSelector((state)=>state.traveller.loggedIn);
    const [selectedDate, setSelectedDate] = useState(null);
    const [bookings, setBookings] = useState([]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        // Call API to fetch bookings for the selected date
        fetchBookings(date);
    };

    const fetchBookings = async (date) => {
        try {
            const response = await fetch(`/api/bookings?date=${date}`);
            if (response.ok) {
                const data = await response.json();
                setBookings(data.bookings);
            } else {
                console.error('Failed to fetch bookings');
            }
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    if (!travellerIsLoggedIn) {
        window.location.href = '/auth/login';
        return null; // Prevent rendering the rest of the component if not logged in
    }

    return (
        <Container>
            <Typography sx={{ color: '#26626A', fontSize: 'x-large', fontWeight: 'bolder', marginBottom: '1vh', marginTop: '5vh' }}>
                BOOKINGS DETAILS
            </Typography>
            <Stack direction='row' style={{ backgroundColor: '#CAB1AA', padding: '2vw', marginBottom: '2vh' }}>
                <Form>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoItem label={'Select Date'} sx={{ fontWeight: 'bold' }}>
                            <DatePicker
                                value={selectedDate}
                                onChange={handleDateChange}
                                sx={{ backgroundColor: '#26626A', width: '45vw' }}
                            />
                        </DemoItem>
                    </LocalizationProvider>
                    {bookings.length > 0 ? (
                        <Stack marginTop='2vh' marginBottom='2vh'>
                            {bookings.map((booking, index) => (
                                <Stack key={index} direction='row'>
                                    <Typography style={{ fontWeight: 'bold' }}>
                                        Name :
                                    </Typography>
                                    <Typography>
                                        {booking.name}
                                    </Typography>
                                    <Typography style={{ fontWeight: 'bold', marginLeft: '1rem' }}>
                                        No.of People :
                                    </Typography>
                                    <Typography>
                                        {booking.numOfPeople}
                                    </Typography>
                                    <Typography style={{ fontWeight: 'bold', marginLeft: '1rem' }}>
                                        Arrival Date :
                                    </Typography>
                                    <Typography>
                                        {booking.arrivalDate}
                                    </Typography>
                                    <Typography style={{ fontWeight: 'bold', marginLeft: '1rem' }}>
                                        Departure Date :
                                    </Typography>
                                    <Typography>
                                        {booking.departureDate}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    ) : (
                        <Typography>No reservations for the selected date.</Typography>
                    )}
                    <Button
                        sx={{
                            borderRadius: '10px',
                            backgroundColor: '#A15D48',
                            color: 'white',
                            width: '10vw',
                            alignContent: 'center',
                            justifyContent: 'center',
                            marginTop: '2vh',
                            marginBottom: '1vh'
                        }}
                    >
                        MAKE AVAILABLE
                    </Button>
                </Form>
            </Stack>
        </Container>
    )
}

export default BookingDetails;
