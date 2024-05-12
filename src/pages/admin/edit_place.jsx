import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteDialog from "../../components/delete_dialog";
import { useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePlace, getPlace, updatePlace } from "../../store/slices/place-slice";

function EditPlace(){
    const id = useLoaderData();
    const dispatch = useDispatch();
    console.log(id);

    const [formData, setFormData] = React.useState({
        category: '',
        place: '',
        opening_time: '',
        closing_time: '',
        description: '',
        location: '',
        images: []
    });

    const allPlaces = useSelector((state) => state.place.places);

    // console.log(place);
    console.log(allPlaces);

    useEffect(() => {
        dispatch(getPlace(id))
    }, [dispatch]);

    let place = useSelector((state) => state.place.onePlace);
    console.log(place);


    const clearFormData = (e) => {
        e.preventDefault();
        setFormData({
            category: '',
            place: '',
            opening_time: '',
            closing_time: '',
            description: '',
            location: '',
            images: []
        })
    }

    useEffect(() => {
        if(place !== undefined) {
            setFormData({
                category: place.category,
                place: place.name,
                opening_time: place.openTime,
                closing_time: place.closingTime,
                description: place.description,
                location: place.location,
                images: place.images
            });
        }
    }, [place]);

    const handleImageUpload = (e) => {
        e.preventDefault();
        setFormData({...formData, images: e.target.files})
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
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
        dispatch(updatePlace(data));
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
      dispatch(deletePlace(id));
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
                        Edit the place to visit
                    </Typography>
                    <Typography sx={{color:'#A15D48', fontSize:'medium', fontWeight:'bolder', marginBottom:'2vh'}}>
                        Fill ONLY the details to be updated
                    </Typography>
                    <form>
                        <label className="property-form-label">PLACE ID</label>
                        <input className="property-form-text" type="text" disabled value={id} name={"placeCode"} onChange={handleChange}/>
                        <label className="property-form-label">CATEGORY</label>
                        <select className="property-form-dropdown" name="category" value={formData.category} onChange={handleChange}>
                            {/* <option >Category</option> */}
                            <option>CAFES</option>
                            <option selected>COFFEE SHOPS</option>
                            <option>KOVIL</option>
                        </select>
                        <label className="property-form-label">NAME OF THE PLACE</label>
                        <input className="property-form-text" type="text" name="place" value={formData.place} onChange={handleChange}/>
                        <label className="property-form-label">OPENING TIME</label>
                        <input className="property-form-text" type="time" name="opening_time" value={formData.opening_time} onChange={handleChange} />
                        <label className="property-form-label">CLOSING TIME</label>
                        <input className="property-form-text" type="time" name="closing_time" value={formData.closing_time} onChange={handleChange}/>
                        <label className="property-form-label">DESCRIPTION</label>
                        <textarea className="property-form-textarea" name="description" id="" cols="50" rows="4" value={formData.description} onChange={handleChange}>
                         
                        </textarea>
                        <label className="property-form-label">UPLOAD IMAGES</label>
                        <input type="file" name="property-images" id="" onChange={handleChange}/>
                        <label className="property-form-label">LOCATION</label>
                        <input className="property-form-text" type="text" name="location" value={formData.location} onChange={handleChange}/>
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
                                onClick={handleSubmit}
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
                                onClick={clearFormData}
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