import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {addProperty} from "../../store/slices/property-owner-slice.js";

function AddProperty(){
    const dispatch = useDispatch();
    const propertyOwnerIsLoggedIn = useSelector((state)=>state.propertyOwner.loggedIn);
    if(!propertyOwnerIsLoggedIn) {
        window.location.href = '/auth/loginprop';
    }
    const propertyOwner = useSelector((state)=>state.propertyOwner.localStorage);
    const [formData, setFormData] = React.useState({
        type : '',
        roomDetails : '',
        price : '',
        facilityDetails : '',
        images : [],
        location : ''
    });

    const handleChange = (e) => {
        setFormData((state) => ({
            ...state,
            [e.target.name] : e.target.value
        }))
    }

    const handleAddProperty = (e) => {
        e.preventDefault()
        console.log(formData);
    }

    const handleImageUpload = (e) => {
        setFormData({...formData, images : e.target.files});
        // console.log(e.target.files)
    }

    const handleSubmit = () => {
        let data = new FormData();
        data.append('type', formData.type);
        data.append('roomDetails', formData.roomDetails);
        data.append('price', formData.price);
        data.append('facilityDetails', formData.facilityDetails);
        data.append('location', formData.location);
        for(let i=0; i<formData.images.length; i++) {
            data.append('images', formData.images[i]);
        }
        data.append('propertyOwnerId',propertyOwner.id)
        dispatch(addProperty(data));
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
                    <form encType={'multipart/form-data'} onSubmit={handleAddProperty}>
                        <label className="property-form-label">SELECT THE TYPE OF PROPERTY</label>
                        <select className="property-form-dropdown" name="type" value={formData.type} onChange={handleChange}>
                            {/* <option >Category</option> */}
                            <option value={""} selected> -- Select Category --</option>
                            <option value={"hotel"}>HOTEL</option>
                            <option value={"restaurants"}>RESTAURANTS</option>
                            <option value={"boutiques"}>BOUTIQUES</option>
                        </select>
                        <label className="property-form-label">ROOM DETAILS</label>
                        <textarea className="property-form-textarea" name="roomDetails" value={formData.roomDetails} id="" cols="50" rows="4" onChange={handleChange}></textarea>
                        <label className="property-form-label">PRICE PER NIGHT</label>
                        <input className="property-form-text" type="text" name="price" value={formData.price} onChange={handleChange}/>
                        <label className="property-form-label">PROPERTY FACILITY DETAILS</label>
                        <textarea className="property-form-textarea" name="facilityDetails" value={formData.facilityDetails} onChange={handleChange} id="" cols="50" rows="4"></textarea>
                        <label className="property-form-label">ADD PROPERTY IMAGES</label>
                        <input type="file" name="images" onChange={handleImageUpload} id="" multiple/>
                        <label className="property-form-label">ADD PROPERTY LOCATION</label>
                        <input className="property-form-text" type="text" name="location" value={formData.location} onChange={handleChange}/>
                        <Stack direction='row' justifyContent='space-around'>
                            <Button type={'submit'}
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
                                ADD PROPERTY
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