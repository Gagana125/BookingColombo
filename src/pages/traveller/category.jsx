import { Button, Container, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import * as React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';

function Category() {
    const [value, setValue] = React.useState(2);
    const [showReviewBox, setShowReviewBox] = React.useState(false);
    const [reviewContent, setReviewContent] = React.useState('');

    const handleReviewClick = () => {
        setShowReviewBox(true);
    };

    const handleReviewSubmit = () => {
        console.log('Review submitted:', reviewContent);
        setReviewContent('');
        setShowReviewBox(false);
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
                        label="Categories"
                    >
                        <MenuItem>
                            <Typography>Coffee Shops</Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography>Kovils</Typography>
                        </MenuItem>
                    </Select>
                </FormControl>
                <Link to={'/traveller/addProperty'} style={{textDecoration:'none', color:'black', cursor:'pointer', marginTop:'2vh'}}>
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
                COFFEE SHOPS
            </Typography>
            <Stack direction='row' justifyContent='space-around'>
                <Stack direction='column' width='15vw'>
                    <img className="category-image" src="/5.jpeg" alt="" />
                    <Typography>CARAMEL PUMPKIN</Typography>
                    <Typography>90 reviews</Typography>
                    <Typography>#8 of 39 Quick Bites in Colombo$$ - $$$, Quick Bites, Cafe, Vegetarian Friendly</Typography>
                    <Typography>Open:</Typography>
                    <Typography>Close:</Typography>
                    <Typography>Loc:</Typography>
                    <Stack direction='row' justifyContent='space-between' width='15vw' marginBottom='3vh'>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                        />
                        <MapsUgcOutlinedIcon onClick={handleReviewClick}/>
                    </Stack>
                    {showReviewBox && (
                        <textarea
                            value={reviewContent}
                            onChange={(e) => setReviewContent(e.target.value)}
                            placeholder="Write your review..."
                            rows="5"
                            style={{ width: '100%', marginTop: '1rem', backgroundColor:'#77A6AC', color:'white', marginBottom:'3px' }}
                        />
                    )}
                    {showReviewBox && (
                        <Button onClick={handleReviewSubmit} variant="contained" style={{backgroundColor:'#A15D48', marginBottom:'3vh'}}>Submit Review</Button>
                    )}
                    <Button variant="outlined" style={{marginBottom:'3vh'}}>Reviews</Button>
                </Stack>
                <Stack direction='column' width='15vw'>
                    <img className="category-image" src="/tea.jpeg" alt="" />
                    <Typography>TEA AVENUE</Typography>
                    <Typography>90 reviews</Typography>
                    <Typography>#8 of 39 Quick Bites in Colombo$$ - $$$, Quick Bites, Cafe, Vegetarian Friendly</Typography>
                    <Typography>Open:</Typography>
                    <Typography>Close:</Typography>
                    <Typography>Loc:</Typography>
                    <Stack direction='row' justifyContent='space-between' width='15vw' marginBottom='3vh'>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                        />
                        <MapsUgcOutlinedIcon/>
                    </Stack>
                    <Button variant="outlined" style={{marginBottom:'3vh'}}>Reviews</Button>
                </Stack>
                <Stack direction='column' width='15vw'>
                    <img className="category-image" src="/nawala.jpg" alt="" />
                    <Typography>JAVA LOUNGE</Typography>
                    <Typography>90 reviews</Typography>
                    <Typography>#8 of 39 Quick Bites in Colombo$$ - $$$, Quick Bites, Cafe, Vegetarian Friendly</Typography>
                    <Typography>Open:</Typography>
                    <Typography>Close:</Typography>
                    <Typography>Loc:</Typography>
                    <Stack direction='row' justifyContent='space-between' width='15vw' marginBottom='3vh'>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                        />
                        <MapsUgcOutlinedIcon sx={{cursor:'pointer'}}/>
                    </Stack>
                    <Button variant="outlined" style={{marginBottom:'3vh'}}>Reviews</Button>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Category;
