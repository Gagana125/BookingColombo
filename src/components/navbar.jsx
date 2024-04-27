import { Button, Container, FormControl, Stack, Typography, MenuItem, Select, InputLabel } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Container >
      <div className="custom-image"></div>
      <Stack direction="row" justifyContent="space-around" className="text-container">
        <img src="/logo.png" className="logo"/>
        <Link style={{ color: 'white', textDecoration: 'none' }}>HOME</Link>
        <Link style={{ color: 'white', textDecoration: 'none' }}>STAYS</Link>
        <Link style={{ color: 'white', textDecoration: 'none' }}>EXPLORE MORE</Link>
        <div className="colombo-text">
          <Link to={'/traveller/property'} style={{ color: 'white', textDecoration: 'none' }}>LIST YOUR PROPERTY</Link>
          <Link to={'/traveller/profile'} style={{ color: 'white', textDecoration: 'none' }}>USER PROFILE</Link>
        </div>
        <FormControl sx={{ minWidth: '7vw' }}>
          <InputLabel id="demo-simple-select-label">LOGIN</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Login"
          // onChange={handleChange}
          >
            <MenuItem>
              <Link to={'/auth/login'} style={{ color: 'black', textDecoration: 'none' }}>TRAVELLER</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/auth/loginprop'} style={{ color: 'black', textDecoration: 'none' }}>PROPERTY OWNER</Link>
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: '7vw' }}>
          <InputLabel id="demo-simple-select-label">SIGN UP</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Login"
          // onChange={handleChange}
          >
            <MenuItem>
              <Link to={'/auth/register'} style={{ color: 'black', textDecoration: 'none' }}>TRAVELLER</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/auth/registerprop'} style={{ color: 'black', textDecoration: 'none' }}>PROPERTY OWNER</Link>
            </MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Container>
  )
}

export default Navbar;
