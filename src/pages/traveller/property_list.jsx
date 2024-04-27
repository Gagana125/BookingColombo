import { Container, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from "react-router-dom";

function PropertyList() {
    const images = [
        '/1.jpeg',
        '/2.jpg',
        '/3.jpeg',
        '/4.jpg',
        '/5.jpeg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    const goToPrev = () => {
      setCurrentIndex(prevIndex);
    };

    const goToNext = () => {
      setCurrentIndex(nextIndex);
    };

    return(
        <Container>
            <Stack direction='row' justifyContent='space-around' marginTop='5vh' alignItems='center'>
                <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>Category</Typography>
                <FormControl sx={{ minWidth: '10vw' }}>
                    <InputLabel id="demo-simple-select-label">
                        Categories
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Categories"
                    >
                        <MenuItem>
                            <Link to={'/traveller/category'} style={{textDecoration:'none', color:'black'}}>Coffee Shops</Link>
                        </MenuItem>
                        <MenuItem>
                            <Typography>Kovils</Typography>
                        </MenuItem>
                    </Select>
                </FormControl>
                <div className="pa2">
                    <input 
                      className="search-bar"
                      type = "search" 
                      placeholder = "Search Places" 
                    />
                </div>
                <Link to={'/propertyOwner/addProperty'} style={{textDecoration:'none', color:'black', cursor:'pointer', marginTop:'2vh'}}>
                    <AddCircleOutlineIcon/>
                    Add a Property
                </Link>
            </Stack>
            <Typography sx={{
                color:'#26626A', 
                fontSize:'x-large', 
                fontWeight:'bolder', 
                marginBottom:'2vh', 
                marginTop:'5vh', 
                alignContent:'center'
            }}>
                Travel Destinations
            </Typography>
            <div className="image-slider">
                <div className="slider-images">
                    <div className="image-container">
                      <img src={images[prevIndex]} alt="Previous" className="prev-image" />
                      <KeyboardArrowLeft className="arrow left-arrow" onClick={goToPrev} style={{color:'black'}} />
                    </div>
                    <img src={images[currentIndex]} alt="Current" className="current-image" />
                    <div className="image-container">
                      <KeyboardArrowRight className="arrow right-arrow" onClick={goToNext} style={{color:'black'}}/> 
                      <img src={images[nextIndex]} alt="Next" className="next-image" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default PropertyList;
