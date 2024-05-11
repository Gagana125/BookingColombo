import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ViewDetails() {
    const travellerIsLoggedIn = useSelector((state)=>state.traveller.loggedIn);
    if(!travellerIsLoggedIn) {
        window.location.href = '/auth/login';
    }
    const images = [
        '/a.jfif',
        '/b.jfif',
        '/c.jfif',
        '/d.jfif',
        '/e.jfif',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    const goToPrev = () => {
      setCurrentIndex(prevIndex);
    };

    const goToNext = () => {
      setCurrentIndex(nextIndex);
    };
    return(
        <Container>
            <Stack direction='column' alignItems='space-around'>
                <Stack direction='row' justifyContent='space-between'>
                    <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>
                        Property Details 
                    </Typography>
                    <Button style={{
                        backgroundColor:'#77A6AC', 
                        color:'white', 
                        borderRadius:'15px', 
                        marginLeft:'1vw',
                        width:'15vw', 
                        height:'6vh',
                        marginTop:'3vh'
                    }}>
                        <Link style={{textDecoration:'none', color:'white', cursor:'pointer'}}>
                        <AddCircleOutline/>
                            ADD TO WISHLIST
                        </Link>
                    </Button>
                    {/* <Form className="search-bar">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search Property"
                      height="2vh"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                </Stack>
                <Stack direction='row' justifyContent='flex-start' alignItems='start'>
                    <Typography sx={{color:'#26626A', fontSize:'medium', fontWeight:'bold', marginBottom:'1vh',}}>Property ID: </Typography>
                    <Typography sx={{color:'#26626A', fontSize:'medium', fontWeight:'bold', marginBottom:'1vh',}}>H001</Typography>
                </Stack>
                <div className="image-slider">
                    <div className="slider-images">
                        <div className="image-container">
                          <img src={images[prevIndex]} alt="Previous" className="prev-image" />
                          <KeyboardArrowLeft className="arrow left-arrow" onClick={goToPrev} style={{color:'black'}} />
                        </div>
                        <img src={images[currentIndex]} alt="Current" className="current-image" />
                        <div className="image-container">
                          <KeyboardArrowRight className="arrow right-arrow" onClick={goToNext} style={{color:'black'}}/> 
                          <img src={images[nextIndex]} alt="Next" className="next-image" />
                        </div>
                    </div>
                </div>
                <Typography sx={{color:'#77A6AC', fontSize:'large', fontWeight:'bolder', marginLeft:'5vw'}}>
                    Family Room, Deluxe hot water, Beach view, Attached bathroom, Fully Air Conditioned
                </Typography>
                <Typography sx={{color:'#CAB1AA', fontSize:'large', fontWeight:'bolder', marginLeft:'5vw'}}>
                    Free wifi, Swimming pool facilities, Restaurant, Bar, Parking available, Beach access
                </Typography>
                
                <Stack direction='row' justifyContent='flex-start' alignItems='start' marginTop='2vh'>
                    <Typography sx={{color:'#A15D48', fontSize:'large', fontWeight:'bolder', marginBottom:'1vh', marginLeft:'5vw'}}>Price per night: </Typography>
                    <Typography sx={{color:'#A15D48', fontSize:'large', fontWeight:'bolder', marginBottom:'1vh', marginLeft:'5vw'}}>Rs. 10, 000</Typography>
                </Stack>
                <Stack direction='row' justifyContent='space-around'>
                    <Button 
                        sx={{ 
                            backgroundColor:'#A15D48', 
                            color:'white', 
                            width:'10vw', 
                            alignContent:'center', 
                            justifyContent:'center', 
                            marginTop:'5vh',
                            marginBottom:'3vh'
                        }}
                    >
                            <Link to={'/traveller/bookingDetails'} style={{textDecoration:'none', color:'white'}}>CHECK BOOKINGS</Link>
                    </Button>
                    <Button 
                        sx={{ 
                            backgroundColor:'#A15D48', 
                            color:'white', 
                            width:'10vw', 
                            alignContent:'center', 
                            justifyContent:'center', 
                            marginTop:'5vh',
                            marginBottom:'3vh'
                        }}
                    >
                            <Link to={'/traveller/reserve'} style={{textDecoration:'none', color:'white'}}>RESERVE</Link>
                    </Button>
                </Stack>
                
            </Stack>
        </Container>
    )
}

export default ViewDetails