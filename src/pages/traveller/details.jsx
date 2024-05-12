import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { Button, Container, Stack, Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import { Form } from "react-bootstrap";
import {Link, useLoaderData} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProperty} from "../../store/slices/property-slice.js";
import {addWishlist} from "../../store/slices/wishlist-slice.js";

function ViewDetails() {
    const travellerIsLoggedIn = useSelector((state)=>state.traveller.loggedIn);
    const traveller = useSelector((state) => state.traveller.localStorage);
    const id = useLoaderData();
    const dispatch = useDispatch()
    const property = useSelector((state) => state.property.property);

    if(!travellerIsLoggedIn) {
        window.location.href = '/auth/login';
    }

    useEffect(() => {
        dispatch(getProperty(id))
    }, [dispatch]);

    const images = property && property.images ? property.images.map(image => image.image) : []

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    const goToPrev = () => {
      setCurrentIndex(prevIndex);
    };

    const goToNext = () => {
      setCurrentIndex(nextIndex);
    };

    const addToWishList = (id) => {
        const data = new FormData()
        data.append('propertyCode', id)
        data.append('travellerID', traveller.id)

        dispatch(addWishlist(data))
    }
    return(
        <Container>
            {
                property ? <Stack direction='column' alignItems='space-around'>
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
                        }}
                                onClick={() => addToWishList(property.propertyCode)}
                        >
                            <div style={{textDecoration:'none', color:'white', cursor:'pointer', display:'flex'}} className={'flex gap-2'}>
                                <AddCircleOutline/>
                                <div>ADD TO WISHLIST</div>
                            </div>
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
                        <Typography sx={{color:'#26626A', fontSize:'medium', fontWeight:'bold', marginBottom:'1vh',}}>{property.propertyCode}</Typography>
                    </Stack>
                    <div className="image-slider">
                        <div className="slider-images">
                            <div className="image-container">
                                <img src={'http://localhost:3000/'+images[prevIndex]} alt="Previous" className="prev-image object-fit-cover" />
                                <KeyboardArrowLeft className="arrow left-arrow" onClick={goToPrev} style={{color:'black'}} />
                            </div>
                            <img src={'http://localhost:3000/'+images[currentIndex]} alt="Current" className="current-image object-fit-cover" />
                            <div className="image-container">
                                <KeyboardArrowRight className="arrow right-arrow" onClick={goToNext} style={{color:'black'}}/>
                                <img src={'http://localhost:3000/'+images[nextIndex]} alt="Next" className="next-image object-fit-cover" />
                            </div>
                        </div>
                    </div>
                    <Typography sx={{color:'#77A6AC', fontSize:'large', fontWeight:'bolder', marginLeft:'5vw'}}>
                        {property.roomDetails}
                    </Typography>
                    <Typography sx={{color:'#CAB1AA', fontSize:'large', fontWeight:'bolder', marginLeft:'5vw'}}>
                        {property.facilityDetails}
                    </Typography>

                    <Stack direction='row' justifyContent='flex-start' alignItems='start' marginTop='2vh'>
                        <Typography sx={{color:'#A15D48', fontSize:'large', fontWeight:'bolder', marginBottom:'1vh', marginLeft:'5vw'}}>Price per night: </Typography>
                        <Typography sx={{color:'#A15D48', fontSize:'large', fontWeight:'bolder', marginBottom:'1vh', marginLeft:'5vw'}}>Rs. {property.price}</Typography>
                    </Stack>
                    <Stack direction='row' justifyContent='space-around'>
                        {/* <Button
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
                        </Button> */}
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
                            <Link to={'/traveller/reserve/'+property.propertyCode} style={{textDecoration:'none', color:'white'}}>RESERVE</Link>
                        </Button>
                    </Stack>

                </Stack> : <div>Loading...</div>
            }

        </Container>
    )
}

export default ViewDetails