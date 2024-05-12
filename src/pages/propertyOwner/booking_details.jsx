import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { deleteBooking, getBooking } from "../../store/slices/booking-slice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function BookingDetails() {
    const dispatch = useDispatch();
    const propertyOwnerIsLoggedIn = useSelector((state)=>state.propertyOwner.loggedIn);
    const [selectedDate, setSelectedDate] = useState(null);
    const bookings = useSelector((state) => state.booking.bookings);
    console.log(bookings);

    const handleDateChange = (date) => {
        console.log('inside');
        console.log(date);
        const formattedDate = date.toISOString().split('T')[0]; // Format the date
        setSelectedDate(formattedDate);
        console.log(formattedDate);
        dispatch(getBooking(formattedDate));
    };

    const makeAvailable = (id) => {
        dispatch(deleteBooking(id));
    }
    

    if (!propertyOwnerIsLoggedIn) {
        window.location.href = '/auth/loginprop';
        return null; // Prevent rendering the rest of the component if not logged in
    }

    return (
        <Container>
            <Typography sx={{ color: '#26626A', fontSize: 'x-large', fontWeight: 'bolder', marginBottom: '1vh', marginTop: '5vh' }}>
                BOOKINGS DETAILS
            </Typography>
            <Stack direction='row' style={{ backgroundColor: '#CAB1AA', padding: '2vw', marginBottom: '2vh' }}>
                <Form>
                    <DatePicker
                        selected={selectedDate ? new Date(selectedDate) : null}
                        onChange={handleDateChange}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select Date"
                        className="date-picker"
                        // style={{ width: '35vw', backgroundColor: 'green' }}
                    />
                    {bookings.length > 0 ? (
                        <Stack marginTop='2vh' marginBottom='2vh'>
                            {bookings.map((booking, index) => (
                                <Stack key={index} direction='column'>
                                    <Stack direction='row'>
                                    <Typography style={{ fontWeight: 'bold', marginLeft: '1rem' }}>
                                        Name :
                                    </Typography>
                                    <Typography>
                                        {' ' + booking.name}
                                    </Typography>
                                    </Stack>
                                    <Stack direction='row'>
                                    <Typography style={{ fontWeight: 'bold', marginLeft: '1rem' }}>
                                        No.of People :
                                    </Typography>
                                    <Typography>
                                        {' ' + booking.noOfPeople}
                                    </Typography>
                                    </Stack>
                                    <Stack direction='row'>
                                    <Typography style={{ fontWeight: 'bold', marginLeft: '1rem' }}>
                                        Arrival Date :
                                    </Typography>
                                    <Typography>
                                        {' ' + booking.arrival_date}
                                    </Typography>
                                    </Stack>
                                    <Stack direction='row'>
                                    <Typography style={{ fontWeight: 'bold', marginLeft: '1rem' }}>
                                        Departure Date :
                                    </Typography>
                                    <Typography>
                                        {' ' + booking.departure_date}
                                    </Typography>
                                    </Stack>
                                    <Stack direction='row'>
                                    <Typography style={{ fontWeight: 'bold', marginLeft: '1rem' }}>
                                        Phone Number :
                                    </Typography>
                                    <Typography>
                                        {' ' + booking.phone}
                                    </Typography>
                                    </Stack>
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
                                        onClick={() => makeAvailable(booking.id)}
                                    >
                                        MAKE AVAILABLE
                                    </Button>
                                </Stack>
                            ))}
                            
                        </Stack>
                        
                    ) : (
                        <Typography>No reservations for the selected date.</Typography>
                    )}
                    
                </Form>
            </Stack>
        </Container>
    )
}

export default BookingDetails;
