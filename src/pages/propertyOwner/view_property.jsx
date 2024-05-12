import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProperties } from "../../store/slices/property-slice";

function ViewProperty() {
    const propertyOwnerIsLoggedIn = useSelector((state)=>state.propertyOwner.loggedIn);
    const dispatch = useDispatch();
    const propertyOwner = useSelector((state) => state.propertyOwner.localStorage);
    const properties = useSelector((state) => state.property.properties);
    console.log(properties);

    if(!propertyOwnerIsLoggedIn) {
        window.location.href = '/auth/loginprop';
    }
    const images = [];

    useEffect(() => {
        console.log(propertyOwner);
        dispatch(getProperties(propertyOwner.id));
    },[dispatch])

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
                        My Properties
                    </Typography>
                    <Form className="search-bar">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search Property"
                      height="2vh"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Stack>
                {
                    properties.length > 0 ? properties.map((property,index) => {
                        property.images.map((image) => {
                            images.push(image.image);
                        })
                        return (
                            <div key={index}>
                                <Stack direction='row' justifyContent='flex-start' alignItems='start'>
                                    <Typography sx={{color:'#26626A', fontSize:'medium', fontWeight:'bold', marginBottom:'1vh',}}>Property ID: </Typography>
                                    <Typography sx={{color:'#26626A', fontSize:'medium', fontWeight:'bold', marginBottom:'1vh',}}>{property.propertyCode}</Typography>
                                </Stack>
                                <div className="image-slider">
                                    <div className="slider-images">
                                        {
                                            images.length > 1 ?
                                                <div className="image-container">
                                                    <img src={'http://localhost:3000/'+images[prevIndex]} alt="Previous" className="prev-image" />
                                                    <KeyboardArrowLeft className="arrow left-arrow" onClick={goToPrev} style={{color:'black'}} />
                                                </div> : <div></div>
                                        }
                                        <img src={'http://localhost:3000/'+images[currentIndex]} alt="Current" className="current-image" />
                                        {
                                            images.length > 2 ?
                                                <div className="image-container">
                                                    <KeyboardArrowRight className="arrow right-arrow" onClick={goToNext} style={{color:'black'}}/>
                                                    <img src={'http://localhost:3000/'+images[nextIndex]} alt="Next" className="next-image" />
                                                </div> : <div></div>
                                        }
                                    </div>
                                </div>
                                <Typography sx={{color:'#77A6AC', fontSize:'large', fontWeight:'bolder', marginLeft:'5vw'}}>
                                    {
                                        property.roomDetails
                                    }
                                </Typography>
                                <Typography sx={{color:'#CAB1AA', fontSize:'large', fontWeight:'bolder', marginLeft:'5vw'}}>
                                    {
                                        property.facilityDetails
                                    }
                                </Typography>

                                <Stack direction='row' justifyContent='flex-start' alignItems='start' marginTop='2vh'>
                                    <Typography sx={{color:'#A15D48', fontSize:'large', fontWeight:'bolder', marginBottom:'1vh', marginLeft:'5vw'}}>Price per night: </Typography>
                                    <Typography sx={{color:'#A15D48', fontSize:'large', fontWeight:'bolder', marginBottom:'1vh', marginLeft:'5vw'}}>Rs. {property.price}</Typography>
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
                                            marginRight:'5vw',
                                            marginBottom:'3vh'
                                        }}
                                    >
                                        <Link to={'/propertyOwner/editProperty/'+property.propertyCode} style={{textDecoration:'none', color:'white'}}>EDIT PROPERTY</Link>
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
                                        <Link to={'/propertyOwner/bookingDetails'} style={{textDecoration:'none', color:'white'}}>CHECK BOOKINGS</Link>
                                    </Button>
                                </Stack>
                            </div>
                        )
                    }) : <Typography sx={{color:'#26626A', fontSize:'large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>No properties found</Typography>
                }

                
            </Stack>
        </Container>
    )
}

export default ViewProperty