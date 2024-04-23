import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar() {
    return (
        <Container >
            <div className="custom-image"></div>
            <Stack direction="row" justifyContent="space-around" className="text-container">
            <div className="colombo-text"> 
                    <Typography style={{color:'#CAB1AA', fontSize:'25px'}}>COLOMBO</Typography>
                    <Typography style={{color:'white', fontSize:'30px'}}>UNLOCKED</Typography>
                </div>
                <Button style={{color:'white'}}>HOME</Button>
                <Button style={{color:'white'}}>STAYS</Button>
                <Button style={{color:'white'}}>EXPLORE MORE</Button>
                <div className="colombo-text"> 
                    <Button style={{color:'white'}}>LIST YOUR PROPERTY</Button>
                    <Button style={{color:'white'}}>USER PROFILE</Button>
                </div>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" style={{color:'white', background:'none'}}>
                        LOGIN
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">TRAVELLER</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">PROPERTY OWNER</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" style={{color:'white', background:'none'}}>
                        SIGN UP
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">TRAVELLER</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">PROPERTY OWNER</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </Stack>
        </Container>
    )
}

export default Navbar;
