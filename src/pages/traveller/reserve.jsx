import { Container, FormControl, Stack, TextField, Button, Typography } from "@mui/material";
import React, {useState} from "react";
import {useLoaderData} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addBooking} from "../../store/slices/booking-slice.js";

function Reserve () {
    const id = useLoaderData();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        arrival_date: '',
        departure_date: '',
        noOfPeople: ''
    });
    const traveller = useSelector(state => state.traveller.localStorage);
    const dispatch = useDispatch();
    const error = useSelector(state => state.booking.errors.addBooking);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = new FormData();

        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('arrival_date', formData.arrival_date);
        data.append('departure_date', formData.departure_date);
        data.append('noOfPeople', formData.noOfPeople);
        data.append('propertyCode', id);
        data.append('travellerID', traveller.id);

        dispatch(addBooking(data))
    }

    return(
        <Container>
            <Typography style={{marginTop:'5vh', color:'#A15D48', fontWeight:'bold', fontSize:'x-large', marginBottom:'2vh'}}>
                RESERVE THE HOTEL
            </Typography>
            {
                error ? <Typography style={{color:'red', marginBottom:'2vh'}}>{error}</Typography> : null
            }
            <Stack direction='column' width='55vw' alignItems='center'>
                <FormControl variant="outlined" fullWidth>
                    <TextField id="name" label="Name" style={{backgroundColor:'#26626A', color:'white', borderRadius:'5px', marginBottom:'3vh'}} name={"name"} onChange={handleChange} value={formData.name}/>
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <TextField id="email" label="Email" style={{backgroundColor:'#26626A', color:'white', borderRadius:'5px', marginBottom:'3vh'}} name={"email"} onChange={handleChange} value={formData.email}/>
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <TextField id="phone" label="Phone Number" style={{backgroundColor:'#26626A', color:'white', borderRadius:'5px', marginBottom:'3vh'}} name={"phone"} onChange={handleChange} value={formData.phone}/>
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <TextField id="arrivalDate" label="Arrival Date" type="date" style={{backgroundColor:'#26626A', color:'white', borderRadius:'5px', marginBottom:'3vh'}} InputLabelProps={{shrink: true}} name={"arrival_date"} onChange={handleChange} value={formData.arrival_date}/>
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <TextField id="departureDate" label="Departure Date" type="date" style={{backgroundColor:'#26626A', color:'white', borderRadius:'5px', marginBottom:'3vh'}} InputLabelProps={{shrink: true}} name={"departure_date"} onChange={handleChange} value={formData.departure_date}/>
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <TextField id="noOfPeople" label="No. of People" type="number" style={{backgroundColor:'#26626A', color:'white', borderRadius:'5px', marginBottom:'3vh'}} name={"noOfPeople"} onChange={handleChange} value={formData.noOfPeople}/>
                </FormControl>
                <Button variant="contained" style={{backgroundColor:'#A15D48', width:'10vw', marginBottom:'10vh'}} onClick={handleSubmit}>
                    RESERVE
                </Button>
            </Stack>
            
        </Container>
    )
}

export default Reserve;
