import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import {useLoaderData} from "react-router-dom";

function Booking() {

    const travellerIsLoggedIn = useSelector((state)=>state.traveller.loggedIn);
    if(!travellerIsLoggedIn) {
        window.location.href = '/auth/login';
    }
    return(
        <Container>
            <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>
                MY BOOKINGS
            </Typography>
            <Stack direction='row' marginBottom='2vh'>
                <img className="booking-img" src="/b.jfif" alt="" />
                <Stack direction='column' width='50vw' marginTop='5vh'>
                    <Typography style={{fontWeight:'bolder', fontSize:'large'}}>CINNAMON LAKESIDE - COLOMBO</Typography>
                    <Typography style={{fontWeight:'bold', fontSize:'small', marginBottom:'3vh'}}>15, Sir Chittampalam A Gardiner Mawatha, 00200</Typography>
                    <Typography style={{fontWeight:'bold', fontSize:'small'}}>BOOKING DATE: 24/05/2024</Typography>
                    <Typography style={{fontWeight:'bold', fontSize:'small'}}>NO.OF DAYS: 3</Typography>
                    <Typography style={{fontWeight:'bold', fontSize:'small'}}>AMOUNT: RS.70, 000</Typography>
                </Stack>
                <Button style={{
                    backgroundColor:'#77A6AC', 
                    color:'white', 
                    borderRadius:'15px', 
                    marginRight:'1vh', 
                    width:'15vw', 
                    height:'6vh',
                    marginTop:'8vh'
                }}>
                    CANCEL BOOKING
                </Button>
            </Stack>
            <Stack direction='row' style={{backgroundColor:'#D9D9D9'}} marginBottom='2vh'>
                <Stack direction='column' width='50vw' marginTop='5vh'>
                    <Typography style={{fontWeight:'bolder', fontSize:'large'}}>CINNAMON LAKESIDE - COLOMBO</Typography>
                    <Typography style={{fontWeight:'bold', fontSize:'small', marginBottom:'3vh'}}>15, Sir Chittampalam A Gardiner Mawatha, 00200</Typography>
                    <Typography style={{fontWeight:'bold', fontSize:'small'}}>BOOKING DATE: 24/05/2024</Typography>
                    <Typography style={{fontWeight:'bold', fontSize:'small'}}>NO.OF DAYS: 3</Typography>
                    <Typography style={{fontWeight:'bold', fontSize:'small'}}>AMOUNT: RS.70, 000</Typography>
                </Stack>
                <Button style={{
                    backgroundColor:'#77A6AC', 
                    color:'white', 
                    borderRadius:'15px', 
                    marginRight:'1vh', 
                    width:'15vw', 
                    height:'6vh',
                    marginTop:'8vh'
                }}>
                    CANCEL BOOKING
                </Button>
                <img className="booking-img2" src="/b3.jfif" alt="" />
            </Stack>
            <Stack direction='row' marginBottom='2vh'>
                <img className="booking-img" src="/b2.jfif" alt="" />
                <Stack direction='column' width='50vw' marginTop='5vh'>
                    <Typography style={{fontWeight:'bolder', fontSize:'large'}}>CINNAMON LAKESIDE - COLOMBO</Typography>
                    <Typography style={{fontWeight:'bold', fontSize:'small', marginBottom:'3vh'}}>15, Sir Chittampalam A Gardiner Mawatha, 00200</Typography>
                    <Typography style={{fontWeight:'bold', fontSize:'small'}}>BOOKING DATE: 24/05/2024</Typography>
                    <Typography style={{fontWeight:'bold', fontSize:'small'}}>NO.OF DAYS: 3</Typography>
                    <Typography style={{fontWeight:'bold', fontSize:'small'}}>AMOUNT: RS.70, 000</Typography>
                </Stack>
                <Button style={{
                    backgroundColor:'#77A6AC', 
                    color:'white', 
                    borderRadius:'15px', 
                    marginRight:'1vh', 
                    width:'15vw', 
                    height:'6vh',
                    marginTop:'8vh'
                }}>
                    CANCEL BOOKING
                </Button>
            </Stack>
        </Container>
    )
}

export default Booking