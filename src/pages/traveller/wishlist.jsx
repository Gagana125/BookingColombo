import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function WishList() {
    return(
        <Container>
            <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>
                WISH LIST
            </Typography>
            <Stack direction='row' marginBottom='2vh'>
                <img className="booking-img" src="/b.jfif" alt="" />
                <Stack direction='column' width='50vw' marginTop='5vh' alignContent='center' justifyContent='center'>
                    <Typography style={{fontWeight:'bolder', fontSize:'large'}}>THE COLOMBO 360</Typography>
                    <Typography style={{fontWeight:'bold', fontSize:'small', marginBottom:'3vh'}}>15, Sir Chittampalam A Gardiner Mawatha, 00200</Typography>
                    <Button style={{
                        backgroundColor:'#77A6AC', 
                        color:'white', 
                        borderRadius:'15px', 
                        marginRight:'1vh', 
                        width:'12vw', 
                        height:'6vh',
                        marginTop:'1vh'
                    }}>
                        <Link to={'/traveller/details'} style={{textDecoration:'none', color:'white', cursor:'pointer'}}>
                            SEE DETAILS
                        </Link> 
                    </Button>
                </Stack>
            </Stack>
            <Stack direction='row' style={{backgroundColor:'#D9D9D9'}} marginBottom='2vh'>
                <Stack direction='column' width='50vw' marginTop='5vh' justifyContent='center' paddingLeft='2vw'>
                    <Typography style={{fontWeight:'bolder', fontSize:'large'}}>THE COLOMBO 360</Typography>
                    <Typography style={{fontWeight:'bold', fontSize:'small', marginBottom:'3vh'}}>15, Sir Chittampalam A Gardiner Mawatha, 00200</Typography>
                    <Button style={{
                        backgroundColor:'#77A6AC', 
                        color:'white', 
                        borderRadius:'15px', 
                        marginRight:'1vh', 
                        width:'12vw', 
                        height:'6vh',
                        marginTop:'1vh'
                    }}>
                        <Link to={'/traveller/details'} style={{textDecoration:'none', color:'white', cursor:'pointer'}}>
                            SEE DETAILS
                        </Link>
                    </Button>
                </Stack>
                <img className="booking-img2" src="/home.jfif" alt="" />
            </Stack>
            <Stack direction='row' marginBottom='2vh'>
                <img className="booking-img" src="/c3.jfif" alt="" />
                <Stack direction='column' width='50vw' marginTop='5vh' alignContent='center' justifyContent='center'>
                    <Typography style={{fontWeight:'bolder', fontSize:'large'}}>THE COLOMBO 360</Typography>
                    <Typography style={{fontWeight:'bold', fontSize:'small', marginBottom:'3vh'}}>15, Sir Chittampalam A Gardiner Mawatha, 00200</Typography>
                    <Button style={{
                        backgroundColor:'#77A6AC', 
                        color:'white', 
                        borderRadius:'15px', 
                        marginRight:'1vh', 
                        width:'12vw', 
                        height:'6vh',
                        marginTop:'1vh'
                    }}>
                       <Link to={'/traveller/details'} style={{textDecoration:'none', color:'white', cursor:'pointer'}}>
                            SEE DETAILS
                        </Link>
                    </Button>
                </Stack>
            </Stack>
        </Container>
    )
}

export default WishList