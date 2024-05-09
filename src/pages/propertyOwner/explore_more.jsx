import { AddCircleOutline } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from "react-router-dom";

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

function ExploreMore() {
    const [activeTab, setActiveTab] = useState("hotel");

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };

    return(
        <Container>
            {/* <Button style={{backgroundColor:'#A15D48', borderRadius:'5px', marginTop:'5vh', marginLeft:'65vw'}}>
            <Link to={'/traveller/addPlace'} 
                style={{textDecoration:'none',  color:'white', cursor:'pointer'}}>
                <AddCircleOutline/>
                Add a Place
            </Link> 
            </Button> */}
            <Tabs
                activeKey={activeTab}
                onSelect={handleTabChange}
                id="justify-tab-example"
                className="mb-3"
                justify
                style={{marginTop:'5vh'}}
            >
                <Tab eventKey="hotel" title={<CustomTabButton label="HOTELS" isActive={activeTab === "hotel"} onClick={() => handleTabChange("hotel")}/>}>
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
                            marginTop:'3vh'
                        }}>
                            SEE DETAILS
                        </Button>
                    </Stack>
                    <Stack direction='column' style={{backgroundColor:'#D9D9D9'}} marginBottom='2vh' width='18vw' margin='2vw' padding='1vw'>
                        <img className="explore-img" src="/b3.jfif" alt="" />
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
                            SEE DETAILS
                        </Button>
                    </Stack>
                    <Stack direction='column' marginBottom='2vh' width='18vw' margin='2vw' padding='1vw'>
                        <img className="explore-img" src="/b2.jfif" alt="" />
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
                            SEE DETAILS
                        </Button>
                    </Stack>
                    </div>
                    
                </Tab>
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
                            SEE DETAILS
                        </Button>
                    </Stack>
                    <Stack direction='column' style={{backgroundColor:'#D9D9D9'}} marginBottom='2vh' width='18vw' margin='2vw' padding='1vw'>
                        <img className="explore-img" src="/b3.jfif" alt="" />
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
                            SEE DETAILS
                        </Button>
                    </Stack>
                    <Stack direction='column' marginBottom='2vh' width='18vw' margin='2vw' padding='1vw'>
                        <img className="explore-img" src="/b2.jfif" alt="" />
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
                            SEE DETAILS
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
                            SEE DETAILS
                        </Button>
                    </Stack>
                    <Stack direction='column' style={{backgroundColor:'#D9D9D9'}} marginBottom='2vh' width='18vw' margin='2vw' padding='1vw'>
                        <img className="explore-img" src="/b3.jfif" alt="" />
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
                            SEE DETAILS
                        </Button>
                    </Stack>
                    <Stack direction='column' marginBottom='2vh' width='18vw' margin='2vw' padding='1vw'>
                        <img className="explore-img" src="/b2.jfif" alt="" />
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
                            SEE DETAILS
                        </Button>
                    </Stack>
                    </div>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default ExploreMore