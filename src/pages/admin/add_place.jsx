import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {addPlace} from "../../store/slices/place-slice.js";

function AddPlace(){
    const dispatch = useDispatch();
    const [formData, setFormData] = React.useState({
        category: '',
        place: '',
        opening_time: '',
        closing_time: '',
        description: '',
        location: '',
        images: []
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleImageUpload = (e) => {
        setFormData({
            ...formData,
            images: e.target.files
        });
    }

    const submitForm = (e) => {
        e.preventDefault();
        let data = new FormData();

        data.append('category', formData.category);
        data.append('place', formData.place);
        data.append('opening_time', formData.opening_time);
        data.append('closing_time', formData.closing_time);
        data.append('description', formData.description);
        data.append('location', formData.location);
        for (let i = 0; i < formData.images.length; i++) {
            data.append('images', formData.images[i]);
        }
        dispatch(addPlace(data));
    }

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
                        <Link to={'/traveller/property'} style={{textDecoration:'none', color:'white'}}>View Places</Link>
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
                        <select className="property-form-dropdown" name={"category"} value={formData.category} onChange={handleChange}>
                            <option selected>Category</option>
                            <option>CAFES</option>
                            <option>COFFEE SHOPS</option>
                            <option>KOVIL</option>
                        </select>
                        <label className="property-form-label">NAME OF THE PLACE</label>
                        <input className="property-form-text" type="text" name={"place"} value={formData.place} onChange={handleChange}/>
                        <label className="property-form-label">OPENING TIME</label>
                        <input className="property-form-text" type="time" name={"opening_time"} value={formData.opening_time} onChange={handleChange}/>
                        <label className="property-form-label">CLOSING TIME</label>
                        <input className="property-form-text" type="time" name={"closing_time"} value={formData.closing_time} onChange={handleChange}/>
                        <label className="property-form-label">DESCRIPTION</label>
                        <textarea className="property-form-text" name="description" value={formData.description} id="" cols="10" rows="5" onChange={handleChange}></textarea>
                        <label className="property-form-label">UPLOAD IMAGES</label>
                        <input type="file" id="" name={"images"} multiple onChange={handleImageUpload}/>
                        <label className="property-form-label">LOCATION</label>
                        <input className="property-form-text" type="text" name={"location"} value={formData.location} onChange={handleChange}/>
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

                                onClick={submitForm}
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

export default AddPlace