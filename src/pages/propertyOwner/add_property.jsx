import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AddProperty(){
    const dispatch = useDispatch();
    const propertyOwnerIsLoggedIn = useSelector((state)=>state.propertyOwner.loggedIn);
    if(!propertyOwnerIsLoggedIn) {
        window.location.href = '/auth/loginprop';
    }
    const [formData, setFormData] = React.useState({
        Type : '',
        RoomDetails : '',
        price : '',
        FacilityDetails : '',
        Images : 'hhh',
        Location : ''
    });

    const handleChange = (e) => {
        setFormData((state) => ({
            ...state,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = () => {
        console.log(formData);
        // dispatch(register(formData));
    }
    return(
        <Container>
            <Stack direction='row' justifyContent='space-between'>
                <Stack direction='column' width='25vw'>
                    <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>
                        LIST YOUR PROPERTIES HERE
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
                    <Typography sx={{fontSize:'large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'1vh'}}>
                        Add your hotels boutiques apartments easily and free 
                    </Typography>
                    <img src="/colombo.jpg" className="destination-image"/>
                </Stack>
                <Stack direction='column' width='60vw' backgroundColor='#CAB1AA' marginTop='2vh' padding='3vw' marginBottom='5vh' justifyContent='center' alignItems='center'>
                    <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder'}}>
                        Add Your Property
                    </Typography>
                    <Typography sx={{color:'#A15D48', fontSize:'medium', fontWeight:'bolder', marginBottom:'2vh'}}>
                        Fill the details to add your property for sale
                    </Typography>
                    <form>
                        <label className="property-form-label">SELECT THE TYPE OF PROPERTY</label>
                        <select className="property-form-dropdown" name="Type" value={formData.Type}>
                            {/* <option >Category</option> */}
                            <option>HOTEL</option>
                            <option>RESTAURANTS</option>
                            <option >BOUTIQUES</option>
                        </select>
                        <label className="property-form-label">ROOM DETAILS</label>
                        <textarea className="property-form-textarea" name="RoomDetails" value={formData.RoomDetails} id="" cols="50" rows="4"></textarea>
                        <label className="property-form-label">PRICE PER NIGHT</label>
                        <input className="property-form-text" type="text" name="price" value={formData.price} />
                        <label className="property-form-label">PROPERTY FACILITY DETAILS</label>
                        <textarea className="property-form-textarea" name="FacilityDetails" value={formData.FacilityDetails} id="" cols="50" rows="4"></textarea>
                        <label className="property-form-label">ADD PROPERTY IMAGES</label>
                        <input type="file" name="property-images" id="" />
                        <label className="property-form-label">ADD PROPERTY LOCATION</label>
                        <input className="property-form-text" type="text" name="Location" value={formData.Location} />
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
                                onClick={handleSubmit}
                            >
                                <Link to={'/propertyOwner/viewProperty'} style={{textDecoration:'none', color:'white'}}>ADD PROPERTY</Link>

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