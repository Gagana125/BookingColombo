import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteDialog from "../../components/delete_dialog";
import { useSelector } from "react-redux";

function EditProperty(){
    const propertyOwnerIsLoggedIn = useSelector((state)=>state.propertyOwner.loggedIn);
    if(!propertyOwnerIsLoggedIn) {
        window.location.href = '/auth/loginprop';
    }
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDeleteDialogOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };

  const handleDeleteConfirmation = () => {
    console.log('Delete confirmed');
    setDeleteDialogOpen(false);
  };

    return(
        <Container>
            <Stack direction='row' justifyContent='space-between'>
                <Stack direction='column' width='25vw'>
                    <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>
                        IS YOUR PROPERTIES DETAILS UPDATED
                    </Typography>
                    <Typography sx={{fontSize:'large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'1vh'}}>
                        LET CUSTOMERS SEE YOUR LATEST FACILITIES 
                    </Typography>
                    <img src="/colombo.jpg" className="destination-image"/>
                </Stack>
                <Stack direction='column' width='60vw' backgroundColor='#CAB1AA' marginTop='2vh' padding='3vw' marginBottom='5vh' justifyContent='center' alignItems='center'>
                    <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder'}}>
                        Update Your Property
                    </Typography>
                    <Typography sx={{color:'#A15D48', fontSize:'medium', fontWeight:'bolder', marginBottom:'2vh'}}>
                        Fill ONLY the details to be updated
                    </Typography>
                    <form>
                        <label className="property-form-label">PROPERTY ID</label>
                        <input className="property-form-text" type="text" value='H001' disabled/>
                        <label className="property-form-label">SELECT THE TYPE OF PROPERTY</label>
                        <select className="property-form-dropdown">
                            {/* <option>Category</option> */}
                            <option selected>HOTEL</option>
                            <option>RESTAURANTS</option>
                        </select>
                        <label className="property-form-label">ROOM DETAILS</label>
                        <textarea className="property-form-textarea" name="" id="" cols="50" rows="4">
                            Family Room, deluxe, hot water available, beach view, attached bathroom,  fully Aircon
                        </textarea>
                        <label className="property-form-label">PRICE PER NIGHT</label>
                        <input className="property-form-text" type="text" value='Rs.10, 000' />
                        <label className="property-form-label">PROPERTY FACILITY DETAILS</label>
                        <textarea className="property-form-textarea" name="" id="" cols="50" rows="4">
                            Free wifi, swimming pool facilities, restaurant, bar, Parking available, beach access
                        </textarea>
                        <label className="property-form-label">ADD PROPERTY IMAGES</label>
                        <input type="file" name="property-images" id="" />
                        <label className="property-form-label">ADD PROPERTY LOCATION</label>
                        <input className="property-form-text" type="text" value='Colombo' />
                        <Stack direction='row' justifyContent='space-around'>
                            <Button
                                sx={{ 
                                    backgroundColor:'#A15D48', 
                                    color:'white', 
                                    width:'10vw', 
                                    alignContent:'center', 
                                    justifyContent:'center', 
                                    marginTop:'5vh'
                                }}
                            >
                                <Link to={'/propertyOwner/viewProperty'} style={{textDecoration:'none', color:'white'}}>UPDATE DETAILS</Link>

                            </Button>
                            <Button
                                sx={{ 
                                    backgroundColor:'#A15D48', 
                                    color:'white', 
                                    width:'12vw', 
                                    alignContent:'center', 
                                    justifyContent:'center', 
                                    marginTop:'5vh'
                                }}
                                onClick={handleDeleteDialogOpen}
                            >
                                DELETE PROPERTY
                            </Button>
                            <DeleteDialog
                                open={deleteDialogOpen}
                                onClose={handleDeleteDialogClose}
                                onConfirm={handleDeleteConfirmation}
                                title="DELETE PROPERTY?"
                                content="Deleting your property will remove all history. You cannot undo this."
                            />
                            <Button
                                sx={{ 
                                    backgroundColor:'#A15D48', 
                                    color:'white', 
                                    width:'10vw', 
                                    alignContent:'center', 
                                    justifyContent:'center', 
                                    marginTop:'5vh'
                                }}
                            >
                                CLEAR DETAILS
                            </Button>
                        </Stack>
                        
                    </form>
                </Stack>
            </Stack>
        </Container>
    )
}

export default EditProperty