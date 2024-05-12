import { Button, Container, Stack, Typography } from "@mui/material";
import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { getWishlist } from "../../store/slices/wishlist-slice.js";

function WishList() {
    const travellerIsLoggedIn = useSelector((state)=>state.traveller.loggedIn);
    const traveller = useSelector((state) => state.traveller.localStorage);
    const wishlists = useSelector((state) => state.wishlist.wishlists);

    const dispatch = useDispatch();

    if(!travellerIsLoggedIn) {
        window.location.href = '/auth/login';
    }

    useEffect(() => {
        dispatch(getWishlist(traveller.id));
    }, [dispatch]);

    return(
        <Container className={'h-[80vh]'}>
            <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>
                WISH LIST
            </Typography>

            {
                wishlists ? wishlists.map((wishlist, index) => {
                    return(
                        index % 2 !== 0 ?
                        <Stack direction='row' style={{backgroundColor:'#D9D9D9'}} marginBottom='2vh'>
                            <Stack direction='column' width='50vw' marginTop='5vh' justifyContent='center' paddingLeft='2vw'>
                                <Typography style={{fontWeight:'bolder', fontSize:'large'}}>{wishlist.property.roomDetails}</Typography>
                                <Typography style={{fontWeight:'bold', fontSize:'small', marginBottom:'3vh'}}>{wishlist.property.location}</Typography>
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
                            <img className="booking-img2" src={'http://localhost:3000/'+wishlist.property.images[0].image} alt="" />
                        </Stack> : <Stack direction='row' marginBottom='2vh'>
                                <img className="booking-img" src={'http://localhost:3000/'+wishlist.property.images[0].image} alt="" />
                                <Stack direction='column' width='50vw' marginTop='5vh' alignContent='center' justifyContent='center'>
                                    <Typography style={{fontWeight:'bolder', fontSize:'large'}}>{wishlist.property.roomDetails}</Typography>
                                    <Typography style={{fontWeight:'bold', fontSize:'small', marginBottom:'3vh'}}>{wishlist.property.location}</Typography>
                                    <Button style={{
                                        backgroundColor:'#77A6AC',
                                        color:'white',
                                        borderRadius:'15px',
                                        marginRight:'1vh',
                                        width:'12vw',
                                        height:'6vh',
                                        marginTop:'1vh'
                                    }}>
                                        <Link to={'/traveller/details/'+wishlist.propertyCode} style={{textDecoration:'none', color:'white', cursor:'pointer'}}>
                                            SEE DETAILS
                                        </Link>
                                    </Button>
                                </Stack>
                            </Stack>

                    )
                }) : null

            }
        </Container>
    )
}

export default WishList