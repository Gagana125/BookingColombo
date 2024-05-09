import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Form } from "react-router-dom";

function BookingDetails() {
    const travellerIsLoggedIn = useSelector((state)=>state.traveller.loggedIn);
    if(!travellerIsLoggedIn) {
        window.location.href = '/auth/login';
    }
    return(
        <Container>
            <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>
                BOOKINGS DETAILS
            </Typography>
            <Stack direction='row' justifyContent='space-around' style={{backgroundColor:'#CAB1AA', padding:'2vw', marginBottom:'2vh'}}>
                <Stack direction='column' width='17vw'>
                    <Form>
                        <TextField
                            id="outlined-disabled"
                            label="First Name"
                            // defaultValue="Keren"
                            style={{backgroundColor:'#26626A', borderRadius:'5px', color:'white', width: '16vw', margin:'2vh'}}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="Selected Date"
                            // defaultValue="Keren"
                            style={{backgroundColor:'#26626A', borderRadius:'5px', color:'white', width: '16vw', margin:'2vh'}}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="Date Availability"
                            // defaultValue="Keren"
                            style={{backgroundColor:'#26626A', borderRadius:'5px', color:'white', width: '16vw', margin:'2vh'}}
                        />
                        <Stack direction='row' width='17vw'>
                        <Button 
                        sx={{
                            borderRadius:'15px', 
                            backgroundColor:'#A15D48', 
                            color:'white', 
                            width:'10vw', 
                            alignContent:'center', 
                            justifyContent:'center', 
                            marginTop:'1vh',
                            marginBottom:'1vh',
                            marginLeft:'2vw'
                            }}
                        >
                            MAKE RESERVED
                        </Button>
                        <Button 
                        sx={{
                            borderRadius:'15px', 
                            backgroundColor:'#A15D48', 
                            color:'white', 
                            width:'10vw', 
                            alignContent:'center', 
                            justifyContent:'center', 
                            marginTop:'1vh',
                            marginBottom:'1vh',
                            marginLeft:'2vw'
                            }}
                        >
                            MAKE AVAILABLE
                        </Button>
                        </Stack>
                        <TextField
                            id="outlined-disabled"
                            label="Booking Status"
                            // defaultValue="Keren"
                            style={{backgroundColor:'#26626A', borderRadius:'5px', color:'white', width: '16vw', margin:'2vh'}}
                        />
                        <Stack direction='row' width='17vw'>
                        <Button 
                        sx={{
                            borderRadius:'15px', 
                            backgroundColor:'#A15D48', 
                            color:'white', 
                            width:'12vw', 
                            height:'7vh',
                            alignContent:'center', 
                            justifyContent:'center', 
                            marginTop:'1vh',
                            marginBottom:'1vh',
                            marginLeft:'2vw'
                            }}
                        >
                            COMPLETED
                        </Button>
                        <Button 
                        sx={{
                            borderRadius:'15px', 
                            backgroundColor:'#A15D48', 
                            color:'white', 
                            width:'12vw', 
                            height:'7vh', 
                            alignContent:'center', 
                            justifyContent:'center', 
                            marginTop:'1vh',
                            marginBottom:'1vh',
                            marginLeft:'2vw'
                            }}
                        >
                            CONFIRMED
                        </Button>
                        </Stack>
                        <Button 
                        sx={{
                            borderRadius:'15px', 
                            backgroundColor:'#A15D48', 
                            color:'white', 
                            width:'12vw', 
                            height:'7vh', 
                            alignContent:'center', 
                            justifyContent:'center', 
                            marginTop:'1vh',
                            marginBottom:'2vh',
                            marginLeft:'2vw'
                            }}
                        >
                            CANCEL
                        </Button>
                    </Form>
                </Stack>
                <Container sx={{backgroundColor:'#ECE7E4', width:'50vw', height:'75vh'}}>

                </Container>
            </Stack>
        </Container>
    )
}

export default BookingDetails