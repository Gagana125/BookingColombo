import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteDialog from "../../components/delete_dialog";

function EditPlace(){
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
            <Stack direction='row' justifyContent='space-between' marginBottom='2vh'>
                <Stack direction='column' width='25vw'>
                    <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>
                        IS PLACES VISIT DETAILS ARE UPDATED
                    </Typography>
                    {/* <Button sx={{ 
                        backgroundColor:'#A15D48', 
                        color:'white', 
                        width:'10vw', 
                        alignContent:'center', 
                        justifyContent:'center', 
                        marginTop:'5vh'
                    }}>
                        <Link to={'/traveller/property'} style={{textDecoration:'none', color:'white'}}>View Properties</Link>
                    </Button> */}
                    {/* <Typography sx={{fontSize:'large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>
                        Colombo Travel Destinations
                    </Typography> */}
                    <img src="/place.jpeg" className="destination-image2"/>
                    <img src="/1.jpeg" className="destination-image2"/>
                </Stack>
                <Stack direction='column' width='60vw' backgroundColor='#CAB1AA' marginTop='2vh' padding='3vw' marginBottom='5vh' justifyContent='center' alignItems='center'>
                    <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder'}}>
                        Add a place to visit
                    </Typography>
                    <Typography sx={{color:'#A15D48', fontSize:'medium', fontWeight:'bolder', marginBottom:'2vh'}}>
                        Fill ONLY the details to be updated
                    </Typography>
                    <form>
                        <label className="property-form-label">PLACE ID</label>
                        <input className="property-form-text" type="text" value='H001' disabled/>
                        <label className="property-form-label">CATEGORY</label>
                        <select className="property-form-dropdown">
                            {/* <option >Category</option> */}
                            <option>CAFES</option>
                            <option selected>COFFEE SHOPS</option>
                            <option>KOVIL</option>
                        </select>
                        <label className="property-form-label">NAME OF THE PLACE</label>
                        <input className="property-form-text" type="text" value='Java Lounge'/>
                        <label className="property-form-label">OPENING TIME</label>
                        <input className="property-form-text" type="time" value='08:30' />
                        <label className="property-form-label">CLOSING TIME</label>
                        <input className="property-form-text" type="time" value='21:30'/>
                        <label className="property-form-label">DESCRIPTION</label>
                        <textarea className="property-form-textarea" name="" id="" cols="50" rows="4">
                            Free wifi, swimming pool facilities, restaurant, bar, Parking available, beach access
                        </textarea>
                        <label className="property-form-label">UPLOAD IMAGES</label>
                        <input type="file" name="property-images" id="" />
                        <label className="property-form-label">LOCATION</label>
                        <input className="property-form-text" type="text" value='Colombo'/>
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
                                UPDATE DETAILS
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
                                DELETE PLACE
                            </Button>
                            <DeleteDialog
                                open={deleteDialogOpen}
                                onClose={handleDeleteDialogClose}
                                onConfirm={handleDeleteConfirmation}
                                title="DELETE PLACE?"
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

export default EditPlace