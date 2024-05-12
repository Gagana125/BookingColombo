import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useLoaderData} from "react-router-dom";
import { getAllBooking, deleteBooking } from "../../store/slices/booking-slice";
import DeleteDialog from "../../components/delete_dialog";

function Booking() {

    const travellerIsLoggedIn = useSelector((state)=>state.traveller.loggedIn);
    if(!travellerIsLoggedIn) {
        window.location.href = '/auth/login';
    }
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state.booking.allBookings);
    const traveller = useSelector((state) => state.traveller.localStorage);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    // console.log(traveller);
    console.log(bookings);

    useEffect(() => {
        dispatch(getAllBooking(traveller.id));
    },[dispatch])

    // const cancelBooking = (id) => {
    //     dispatch(deleteBooking(id));
    // }

    const handleDeleteDialogOpen = () => {
        setDeleteDialogOpen(true);
      };
    
      const handleDeleteDialogClose = () => {
        setDeleteDialogOpen(false);
      };

      const handleDeleteConfirmation = (id) => {
        setDeleteDialogOpen(false);
        dispatch(deleteBooking(id));
      };

    return(
        <Container>
            <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>
                MY BOOKINGS
            </Typography>
            {
                bookings.length > 0 ? bookings.map((booking,index) => {
                    return (
                        <Stack key={index} direction='row' marginBottom='2vh'>
                            <img className="booking-img" src={'http://localhost:3000/'+booking.images[0].image} alt="" />
                            <Stack direction='column' width='50vw' marginTop='5vh'>
                                <Typography style={{fontWeight:'bolder', fontSize:'large'}}>{booking.properties.roomDetails}</Typography>
                                <Typography style={{fontWeight:'bold', fontSize:'small', marginBottom:'3vh'}}>{booking.properties.location}</Typography>
                                <Typography style={{fontWeight:'bold', fontSize:'small'}}>BOOKING DATE: {booking.arrival_date}</Typography>
                                <Typography style={{fontWeight:'bold', fontSize:'small'}}>NO.OF PEOPLE: {booking.noOfPeople}</Typography>
                                <Typography style={{fontWeight:'bold', fontSize:'small'}}>PRICE PER NIGHT: RS.{booking.properties.price}</Typography>
                            </Stack>
                            <Button style={{
                                backgroundColor:'#77A6AC', 
                                color:'white', 
                                borderRadius:'15px', 
                                marginRight:'1vh', 
                                width:'15vw', 
                                height:'6vh',
                                marginTop:'8vh'
                                }}
                                onClick={handleDeleteDialogOpen}
                            >
                                CANCEL BOOKING
                            </Button>
                            <DeleteDialog
                                    open={deleteDialogOpen}
                                    onClose={handleDeleteDialogClose}
                                    onConfirm={() => handleDeleteConfirmation(booking.id)}
                                    title="DELETE BOOKING?"
                                    content="You cannot undo this."
                                />
                        </Stack>
                    )
                })

                 : <div>No bookings yet!</div>
            }  
            
        </Container>
    )
}

export default Booking