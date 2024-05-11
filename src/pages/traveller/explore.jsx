import { AddCircleOutline } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProperties } from "../../store/slices/property-slice";
import { TabPane } from "react-bootstrap";

function CustomTabButton({ label, isActive, onClick }) {
    return (
      <Button
        onClick={onClick}
        style={{
          backgroundColor: isActive ? '#A15D48' : '#77A6AC', 
          color: 'white',
          borderRadius: '10px', 
          margin: '2px', 
        }}
      >
        {label}
      </Button>
    );
}

function Explore() {
    const travellerIsLoggedIn = useSelector((state)=>state.traveller.loggedIn);
    const adminIsLoggedIn = useSelector((state)=>state.admin.loggedIn);
    if(!travellerIsLoggedIn && !adminIsLoggedIn){
        window.location.href = '/auth/login';
    }
    const [activeTab, setActiveTab] = useState("hotel");
    const dispatch = useDispatch();
    const properties = useSelector((state) => state.property.allProperties);
    console.log(properties);
    const images = [];

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };

    useEffect(() => {
        // console.log(properties);
        dispatch(getAllProperties());
    },[dispatch]);

    return(
        <Container>
            <Tabs
                activeKey={activeTab}
                onSelect={handleTabChange}
                id="justify-tab-example"
                className="mb-3"
                justify
                style={{marginTop:'5vh'}}
            >
                {
                    properties.length > 0 ? properties.map((property, index) => {
                        // console.log(property.images);
                        property.images.map((image) => {
                            images.push(image.image);
                        })
                        return (
                            <div key={index}>
                                {console.log(property.type == 'hotel')}
                                {property.type == 'hotel' ?
                                <TabPane eventKey="hotel" title={<CustomTabButton label="HOTELS" isActive={activeTab === "hotel"} onClick={() => handleTabChange("hotel")}/>}>
                                    <div className="explore-tabs-content">
                                    <Stack direction='column' marginBottom='2vh' width='18vw' margin='2vw' padding='1vw'>
                                        <img className="explore-img" src="/b.jfif" alt="" />
                                        <Stack direction='column' width='16vw' marginTop='5vh'>
                                            <Typography style={{fontWeight:'bolder', fontSize:'large'}}>{property.name}</Typography>
                                            <Typography style={{fontWeight:'bold', fontSize:'small', marginBottom:'3vh'}}>15, Sir Chittampalam A Gardiner Mawatha, 00200</Typography>
                                        </Stack>
                                        <Stack direction='column' width='16vw' justifyContent='space-between'>
                                            <Button style={{
                                                backgroundColor:'#77A6AC', 
                                                color:'white', 
                                                borderRadius:'15px', 
                                                marginLeft:'1vw',
                                                width:'15vw', 
                                                height:'6vh',
                                                marginTop:'3vh'
                                            }}>
                                                <Link to={'/traveller/details'} style={{textDecoration:'none', color:'white', cursor:'pointer'}}>
                                                SEE DETAILS
                                            </Link>
                                            </Button>
                                            <Button style={{
                                                backgroundColor:'#77A6AC', 
                                                color:'white', 
                                                borderRadius:'15px', 
                                                marginLeft:'1vw',
                                                width:'15vw', 
                                                height:'6vh',
                                                marginTop:'3vh'
                                            }}>
                                                <Link style={{textDecoration:'none', color:'white', cursor:'pointer'}}>
                                                <AddCircleOutline/>
                                                    ADD TO WISHLIST
                                                </Link>
                                            </Button>
                                        </Stack>
                
                                    </Stack>
                                    </div>
                                    
                                </TabPane> : <Typography>No hotels</Typography>
                                }
                                

                            </div>
                        )
                    }) : <Typography sx={{color:'#26626A', fontSize:'large', fontWeight:'bolder', marginBottom:'1vh', marginTop:'5vh'}}>No properties found</Typography>
                } 
                
                <Tab eventKey="apartment" title={<CustomTabButton label="APARTMENTS" isActive={activeTab === "apartment"} onClick={() => handleTabChange("apartment")} />}>
                <div className="explore-tabs-content">
                    <Stack direction='column' marginBottom='2vh' width='18vw' margin='2vw' padding='1vw'>
                        <img className="explore-img" src="/b.jfif" alt="" />
                        <Stack direction='column' width='16vw' marginTop='5vh'>
                            <Typography style={{fontWeight:'bolder', fontSize:'large'}}>CINNAMON LAKESIDE - COLOMBO</Typography>
                            <Typography style={{fontWeight:'bold', fontSize:'small', marginBottom:'3vh'}}>15, Sir Chittampalam A Gardiner Mawatha, 00200</Typography>
                        </Stack>
                        <Button style={{
                            backgroundColor:'#77A6AC', 
                            color:'white', 
                            borderRadius:'15px', 
                            marginLeft:'1vw',
                            width:'15vw', 
                            height:'6vh',
                            marginTop:'8vh'
                        }}>
                            <Link to={'/traveller/details'} style={{textDecoration:'none', color:'white', cursor:'pointer'}}>
                            SEE DETAILS
                        </Link>
                        </Button>
                    </Stack>
                    </div>
                </Tab>
                <Tab eventKey="boutique" title={<CustomTabButton label="BOUTIQUES" isActive={activeTab === "boutique"} onClick={() => handleTabChange("boutique")} />}>
                <div className="explore-tabs-content">
                    <Stack direction='column' marginBottom='2vh' width='18vw' margin='2vw' padding='1vw'>
                        <img className="explore-img" src="/b.jfif" alt="" />
                        <Stack direction='column' width='16vw' marginTop='5vh'>
                            <Typography style={{fontWeight:'bolder', fontSize:'large'}}>CINNAMON LAKESIDE - COLOMBO</Typography>
                            <Typography style={{fontWeight:'bold', fontSize:'small', marginBottom:'3vh'}}>15, Sir Chittampalam A Gardiner Mawatha, 00200</Typography>
                        </Stack>
                        <Button style={{
                            backgroundColor:'#77A6AC', 
                            color:'white', 
                            borderRadius:'15px', 
                            marginLeft:'1vw',
                            width:'15vw', 
                            height:'6vh',
                            marginTop:'8vh'
                        }}>
                            <Link to={'/traveller/details'} style={{textDecoration:'none', color:'white', cursor:'pointer'}}>
                            SEE DETAILS
                        </Link>
                        </Button>
                    </Stack>
                    </div>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default Explore