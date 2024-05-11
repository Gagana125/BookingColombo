import { Button, Container, Stack, Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import {Link, useLoaderData} from "react-router-dom";
import DeleteDialog from "../../components/delete_dialog";
import {useDispatch, useSelector} from "react-redux";
import {deleteProperty, getProperty, updateProperty} from "../../store/slices/property-slice.js";

function EditProperty(){
    const id = useLoaderData();
    const dispatch = useDispatch();
    const propertyOwnerIsLoggedIn = useSelector((state)=>state.propertyOwner.loggedIn);

    if(!propertyOwnerIsLoggedIn) {
        window.location.href = '/auth/loginprop';
    }
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const [formData, setFormData] = useState({
        propertyCode: '',
        type: '',
        roomDetails: '',
        price: '',
        facilityDetails: '',
        location: '',
    });

  const handleDeleteDialogOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };

    useEffect(() => {
        dispatch(getProperty(id))
    }, [dispatch]);

    let property = useSelector((state) => state.property.property);

    const clearFormData = (e) => {
        e.preventDefault();
        setFormData({
            propertyCode: '',
            type: '',
            roomDetails: '',
            price: '',
            facilityDetails: '',
            location: '',
            images: []
        })
    }

    useEffect(() => {
        if(property !== undefined) {
            setFormData({
                propertyCode: property.propertyCode,
                type: property.type,
                roomDetails: property.roomDetails,
                price: property.price,
                facilityDetails: property.facilityDetails,
                location: property.location,
                images: property.images
            });
        }
    }, [property]);
  const handleDeleteConfirmation = (id) => {
    setDeleteDialogOpen(false);
    dispatch(deleteProperty(id));
  };

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
        const data = new FormData();
        data.append('propertyCode', formData.propertyCode);
        data.append('type', formData.type);
        data.append('roomDetails', formData.roomDetails);
        data.append('price', formData.price);
        data.append('facilityDetails', formData.facilityDetails);
        data.append('location', formData.location);
        for(let i=0; i<formData.images.length; i++) {
            data.append('images', formData.images[i]);
        }

        dispatch(updateProperty(data));
    }


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
                    {
                        formData !== undefined ? <form encType={'multipart/form-data'} onSubmit={handleSubmit}>
                            <label className="property-form-label">PROPERTY ID</label>
                            <input className="property-form-text" type="text" disabled value={formData.propertyCode} name={"propertyCode"} onChange={handleChange}/>
                            <label className="property-form-label">SELECT THE TYPE OF PROPERTY</label>
                            <select className="property-form-dropdown" value={formData.type} name={"type"} onChange={handleChange}>
                                {/* <option>Category</option> */}
                                <option selected>HOTEL</option>
                                <option>RESTAURANTS</option>
                            </select>
                            <label className="property-form-label">ROOM DETAILS</label>
                            <textarea className="property-form-textarea" name={"roomDetails"} id="" cols="50" rows="4" value={formData.roomDetails} onChange={handleChange}>
                            </textarea>
                            <label className="property-form-label">PRICE PER NIGHT</label>
                            <input className="property-form-text" type="text" value={formData.price} name={"price"} onChange={handleChange}/>
                            <label className="property-form-label">PROPERTY FACILITY DETAILS</label>
                            <textarea className="property-form-textarea" name={"facilityDetails"} id="" cols="50" rows="4" value={formData.facilityDetails} onChange={handleChange}>
                            </textarea>
                            <label className="property-form-label">ADD PROPERTY IMAGES</label>
                            <input type="file" name="images" id="" onChange={handleImageUpload} multiple/>
                            <label className="property-form-label">ADD PROPERTY LOCATION</label>
                            <input className="property-form-text" type="text" name={"location"} value={formData.location} onChange={handleChange}/>
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

                                    type={'submit'}
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
                                    DELETE PROPERTY
                                </Button>
                                <DeleteDialog
                                    open={deleteDialogOpen}
                                    onClose={handleDeleteDialogClose}
                                    onConfirm={() => handleDeleteConfirmation(property.propertyCode)}
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

                                    onClick={clearFormData}
                                >
                                    CLEAR DETAILS
                                </Button>
                            </Stack>

                        </form> : <div></div>
                    }

                </Stack>
            </Stack>
        </Container>
    )
}

export default EditProperty