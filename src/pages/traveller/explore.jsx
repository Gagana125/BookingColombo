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
    const [filteredProperties, setFilteredProperties] = useState([]);

    const handleTabChange = (tab) => {
        setFilteredProperties([]);
      setActiveTab(tab);
      properties.filter((property) => {
        if (property.type === tab.substring(0, tab.length - 1)) {
          setFilteredProperties([...filteredProperties, property]);
        }
      })
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
                <Tab eventKey="hotels" title={<CustomTabButton label="Hotels" isActive={activeTab === "hotels"} onClick={() => handleTabChange("hotels")} />}>
                    <div className="explore-tabs-content">
                        {
                            filteredProperties.map((property) => {
                                return (
                                    <Stack direction='column' marginBottom='2vh' width='18vw' margin='2vw' padding='1vw'>
                                        <img className="explore-img" src={'http://localhost:3000/'+property.images[0].image} alt="" />
                                        <Stack direction='column' width='16vw' marginTop='5vh'>
                                            <Typography style={{fontWeight:'bolder', fontSize:'large'}}>{property.roomDetails}</Typography>
                                            <Typography style={{fontWeight:'bold', fontSize:'medium', marginBottom:'3vh'}}>{property.location}</Typography>
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
                                            <Link to={'/traveller/details/'+property.propertyCode} style={{textDecoration:'none', color:'white', cursor:'pointer'}}>
                                                SEE DETAILS
                                            </Link>
                                        </Button>
                                    </Stack>
                                )
                            })
                        }
                    </div>
                </Tab>
                <Tab eventKey="apartments" title={<CustomTabButton label="APARTMENTS" isActive={activeTab === "apartment"} onClick={() => handleTabChange("apartments")} />}>
                <div className="explore-tabs-content">
                    {
                        filteredProperties.map((property) => {
                            return (
                                <Stack direction='column' marginBottom='2vh' width='18vw' margin='2vw' padding='1vw'>
                                    <img className="explore-img" src={'http://localhost:3000/'+property.images[0].image} alt="" />
                                    <Stack direction='column' width='16vw' marginTop='5vh'>
                                        <Typography style={{fontWeight:'bolder', fontSize:'large'}}>{property.roomDetails}</Typography>
                                        <Typography style={{fontWeight:'bold', fontSize:'medium', marginBottom:'3vh'}}>{property.location}</Typography>
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
                                        <Link to={'/traveller/details/'+property.propertyCode} style={{textDecoration:'none', color:'white', cursor:'pointer'}}>
                                            SEE DETAILS
                                        </Link>
                                    </Button>
                                </Stack>
                            )
                        })
                    }
                    </div>
                </Tab>
                <Tab eventKey="boutiques" title={<CustomTabButton label="BOUTIQUES" isActive={activeTab === "boutique"} onClick={() => handleTabChange("boutiques")} />}>
                <div className="explore-tabs-content">
                    {
                        filteredProperties.map((property) => {
                            return (
                                <Stack direction='column' marginBottom='2vh' width='18vw' margin='2vw' padding='1vw'>
                                    <img className="explore-img" src={'http://localhost:3000/'+property.images[0].image} alt="" />
                                    <Stack direction='column' width='16vw' marginTop='5vh'>
                                        <Typography style={{fontWeight:'bolder', fontSize:'large'}}>{property.roomDetails}</Typography>
                                        <Typography style={{fontWeight:'bold', fontSize:'medium', marginBottom:'3vh'}}>{property.location}</Typography>
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
                                        <Link to={'/traveller/details/'+property.propertyCode} style={{textDecoration:'none', color:'white', cursor:'pointer'}}>
                                            SEE DETAILS
                                        </Link>
                                    </Button>
                                </Stack>
                            )
                        })
                    }
                    </div>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default Explore