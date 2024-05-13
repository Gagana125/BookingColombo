import { Button, Container, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import ReviewDialog from "../../components/review_dialog";
import { useDispatch, useSelector } from "react-redux";
import { getPlaces, deletePlace } from "../../store/slices/place-slice";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {addReview, getReviewByPlace} from "../../store/slices/review-slice.js";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteDialog from "../../components/delete_dialog";

function PropertyList() {
    const travellerIsLoggedIn = useSelector((state)=>state.traveller.loggedIn);
    const propertyOwnerIsLoggedIn = useSelector((state)=>state.propertyOwner.loggedIn);
    const adminIsLoggedIn = useSelector((state)=>state.admin.loggedIn);

    const traveller = useSelector((state) => state.traveller.localStorage);
    const reviews = useSelector((state) => state.review.reviews);

    const allPlaces = useSelector((state) => state.place.places);
    const dispatch = useDispatch();
    const [filteredPlaces, setFilteredPlaces] = useState([]); // State to store filtered places
    const [selectedCategory, setSelectedCategory] = useState(""); // State to store selected category
    const [showReviewBoxes, setShowReviewBoxes] = useState({});
    const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
    const [review, setReview] = useState({
        rating: 0,
        review: '',
    }); // State to store review content
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const handleDeleteDialogOpen = () => {
        setDeleteDialogOpen(true);
    };

    const handleDeleteDialogClose = () => {
        setDeleteDialogOpen(false);
    };

    const handleDeleteConfirmation = (id) => {
        console.log('Delete confirmed');
        setDeleteDialogOpen(false);
        dispatch(deletePlace(id));
    };

    const handleReviewClick = (placeId) => {
        setShowReviewBoxes(prevState => ({
            ...prevState,
            [placeId]: !prevState[placeId] // Toggle the state for the clicked place
        }));
    };
    

    const handleReviewSubmit = (placeId) => {
        setReviewDialogOpen(false);
        let data = new FormData();
        data.append('rating', review.rating);
        data.append('review', review.review);
        data.append('placeCode', placeId);
        data.append('travellerID', traveller.id)

        dispatch(addReview(data));

        setReview({
            rating: 0,
            review: ''
        });
        setShowReviewBoxes(prevState => ({
            ...prevState,
            [placeId]: false // Set the review box state for the specific place to false
        }));
    };


    const handleReviewDialogOpen = (placeCode) => {
        dispatch(getReviewByPlace(placeCode))
        setReviewDialogOpen(true);
      };
    
      const handleReviewDialogClose = () => {
        setReviewDialogOpen(false);
      };

    useEffect(() => {
        dispatch(getPlaces());
    }, [dispatch]);

    // Function to handle category selection change
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        console.log(filteredPlaces);
        // Filter places based on selected category
        if (category) {
            const filteredPlaces = allPlaces.filter(place => place.category.toLowerCase() === category.toLowerCase());
            setFilteredPlaces(filteredPlaces);
        } else {
            // If no category selected, show all places
            setFilteredPlaces([]);
        }
    };

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
            {
                adminIsLoggedIn &&
                <div>
                    <Link to={'/admin/addPlace'}><button backgroundColor='#A15D48' className={"mt-5 rounded border-0 py-2 px-5"}>Add Places</button></Link>
                </div>
            }
            <Stack direction='row' justifyContent='space-around' marginTop='5vh' alignItems='center'>
                <Typography sx={{color:'#26626A', fontSize:'x-large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>Category</Typography>
                <FormControl sx={{ minWidth: '10vw' }}>
                    <InputLabel id="demo-simple-select-label">
                        Categories
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        label="Categories"
                    >
                        <MenuItem value="Coffee Shops">COFFEE SHOP</MenuItem>
                        <MenuItem value="Cafes">CAFE</MenuItem>
                        <MenuItem value="Kovils">KOVIL</MenuItem>
                    </Select>
                </FormControl>
                <div className="pa2">
                    <input 
                      className="search-bar"
                      type = "search" 
                      placeholder = "Search Places" 
                    />
                </div>
            </Stack>
            {selectedCategory ? (
                <Container>
                    <Typography sx={{
                        color:'#26626A', 
                        fontSize:'x-large', 
                        fontWeight:'bolder', 
                        marginBottom:'2vh', 
                        marginTop:'5vh', 
                        alignContent:'center'
                    }}>
                        {selectedCategory.toUpperCase()}
                    </Typography>
                    <Stack direction='row' justifyContent='space-around'>
                        {/* Render cards for filtered places */}
                        {filteredPlaces.map(place => (
                            <div key={place.id} className={"category-card"}>
                                {/* Render card content */}
                                <img className="category-image"  src={'http://localhost:3000/'+place.images[0].image} alt={place.name} />
                                <Typography>{place.name}</Typography>
                                {/* <Typography>{place.reviews} reviews</Typography> */}
                                <Typography>{place.description}</Typography>
                                <Typography>Open: {place.openTime}</Typography>
                                <Typography>Close: {place.closingTime}</Typography>
                                <Typography>Location: {place.location}</Typography>
                                <Stack direction='row' justifyContent='space-between' width='15vw' marginBottom='3vh'>
                                    <Rating
                                        name="simple-controlled"
                                        // value={value}
                                        onChange={(event, newValue) => {
                                            setReview({...review, rating: newValue})
                                        }}
                                    />
                                    <MapsUgcOutlinedIcon onClick={() => handleReviewClick(place.id)} />
                                </Stack>
                                {showReviewBoxes[place.id] && ( // Check if review box should be shown for this place
                                    <>
                                        <textarea
                                            value={review.review}
                                            onChange={(e) => setReview({...review, review: e.target.value})}
                                            placeholder="Write your review..."
                                            rows="5"
                                            style={{ width: '100%', marginTop: '1rem', backgroundColor:'#77A6AC', color:'white', marginBottom:'3px' }}
                                        />
                                        <Button onClick={() => handleReviewSubmit(place.placeCode)} variant="contained" style={{width: '100%', backgroundColor:'#A15D48', marginBottom:'3vh'}}>Submit Review</Button>
                                    </>
                                )}
                                <Stack direction='row' width='12vw' justifyContent='space-between'>
                                    <Button variant="outlined" onClick={() => handleReviewDialogOpen(place.placeCode)} style={{marginBottom:'10vh'}}>
                                        Reviews
                                    </Button>
                                    {console.log(place.id)}
                                    {
                                        adminIsLoggedIn &&
                                        <div>
                                            <Link to={'/admin/editPlace/'+place.placeCode}>
                                                <EditIcon style={{cursor:'pointer', color:'black'}} />
                                            </Link>
                                            <DeleteOutlinedIcon style={{cursor:'pointer'}} onClick={handleDeleteDialogOpen}/>
                                            <DeleteDialog
                                                open={deleteDialogOpen}
                                                onClose={handleDeleteDialogClose}
                                                onConfirm={() => handleDeleteConfirmation(place.placeCode)}
                                                title="DELETE PLACE?"
                                                content="Are you sure you want to delete this place?"
                                            />
                                        </div>
                                    }
                                    
                                </Stack>
                                
                                <ReviewDialog 
                                    open={reviewDialogOpen}
                                    onClose={handleReviewDialogClose}
                                    content={reviews !== undefined ? reviews : []}
                                />
                            </div>
                        ))}
                    </Stack>
                </Container>
            ) : (
                <Container>
                    <Typography sx={{
                        color:'#26626A', 
                        fontSize:'x-large', 
                        fontWeight:'bolder', 
                        marginBottom:'3vh', 
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
            )}
        </Container>
    )
}

export default PropertyList;