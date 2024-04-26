import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function AddProperty(){
    return(
        <Container>
            <Stack direction='row' justifyContent='space-between'>
                <Stack direction='column' width='35vw'>
                    <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>Places to Visit</Typography>
                    <Button sx={{ 
                        backgroundColor:'#A15D48', 
                        color:'white', 
                        width:'10vw', 
                        alignContent:'center', 
                        justifyContent:'center', 
                        marginTop:'5vh'
                    }}>
                        <Link to={'/traveller/property'} style={{textDecoration:'none', color:'white'}}>View Properties</Link>
                    </Button>
                    <Typography sx={{fontSize:'large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>
                        Colombo Travel Destinations
                    </Typography>
                    <img src="/colombo.jpg" className="destination-image"/>
                </Stack>
                <Stack direction='column' width='60vw' backgroundColor='#CAB1AA' marginTop='2vh' padding='3vw' marginBottom='5vh' justifyContent='center' alignItems='center'>
                    <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder'}}>
                        Add a place to visit
                    </Typography>
                    <Typography sx={{color:'#A15D48', fontSize:'medium', fontWeight:'bolder', marginBottom:'2vh'}}>
                        Fill the details to add place to visit
                    </Typography>
                    <form>
                        <label className="property-form-label">CATEGORY</label>
                        <select className="property-form-dropdown">
                            <option selected>Category</option>
                            <option>CAFES</option>
                            <option>COFFEE SHOPS</option>
                            <option>KOVIL</option>
                        </select>
                        <label className="property-form-label">NAME OF THE PLACE</label>
                        <input className="property-form-text" type="text" />
                        <label className="property-form-label">OPENING TIME</label>
                        <input className="property-form-text" type="time" />
                        <label className="property-form-label">CLOSING TIME</label>
                        <input className="property-form-text" type="time" />
                        <label className="property-form-label">DESCRIPTION</label>
                        <textarea className="property-form-text" name="" id="" cols="10" rows="5"></textarea>
                        <label className="property-form-label">UPLOAD IMAGES</label>
                        <input type="file" name="property-images" id="" />
                        <label className="property-form-label">LOCATION</label>
                        <input className="property-form-text" type="text" />
                        <Stack direction='row' justifyContent='space-around'>
                            <Button
                                sx={{ 
                                    backgroundColor:'#A15D48', 
                                    color:'white', 
                                    width:'10vw', 
                                    alignContent:'center', 
                                    justifyContent:'center', 
                                    marginTop:'5vh',
                                    marginRight:'5vw'
                                }}
                            >
                                ADD PLACE
                            </Button>
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
                                CLEAR
                            </Button>
                        </Stack>
                        
                    </form>
                </Stack>
            </Stack>
        </Container>
    )
}

export default AddProperty