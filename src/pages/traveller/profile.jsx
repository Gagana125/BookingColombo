import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Container, Divider, FormControl, IconButton, InputAdornment, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import React from "react";

function Profile() {
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    return(
        <Container>
            <Stack direction='row' justifyContent='space-between' marginTop='3vh' marginLeft='15vw'>
                <img className="profile-image" src="/woman.avif" alt="" />
                <Stack direction='column'>
                    <Typography sx={{color:'#26626A', fontSize:'large', fontWeight:'bolder', marginBottom:'1vh'}}>RACHEL KAREN GREEN</Typography>
                    <Stack direction='row' width='30vw' justifyContent='space-between'>
                        <Typography>EMAIL : rachelgreen@gmail.com</Typography>
                        <Typography>PHONE: +94 123456789</Typography>
                    </Stack>
                    <Divider style={{backgroundColor:'black', width:'40vw'}}></Divider>
                    <Stack direction='row' style={{marginTop:'2vh'}}>
                        <Typography>Profile Completion </Typography>
                        <Divider orientation="vertical" flexItem style={{backgroundColor:'black', marginInline:'3vw'}}/>
                        <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginRight:'1vh'}}>MY BOOKINGS</Button>
                        <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginRight:'1vh'}}>WISH LIST</Button>
                    </Stack>
                </Stack>
            </Stack>
            <Typography sx={{
                color:'#26626A', 
                fontSize:'large', 
                fontWeight:'bolder', 
                marginBottom:'1vh', 
                justifyContent:'center', 
                alignItems:'center',
                alignContent:'center'
            }}>
                USER PROFILE
            </Typography>
            <Stack direction='row' justifyContent='space-around' width='50vw' alignItems='center'>
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="First Name"
                    defaultValue="Keren"
                    style={{backgroundColor:'#26626A', borderRadius:'5px', color:'white', width: '30vw', margin:'2vh'}}
                />
                <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}}>EDIT</Button>
                <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}}>SAVE</Button>
            </Stack>
            <Stack direction='row' justifyContent='space-around' width='50vw' alignItems='center'>
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Last Name"
                    defaultValue="Green"
                    style={{backgroundColor:'#26626A', borderRadius:'5px', color:'white', width: '30vw', margin:'2vh'}}
                />
                <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}}>EDIT</Button>
                <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}}>SAVE</Button>
            </Stack>
            <Stack direction='row' justifyContent='space-around' width='50vw' alignItems='center'>
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Email"
                    defaultValue="keren@gmail.com"
                    style={{backgroundColor:'#26626A', borderRadius:'5px', color:'white', width: '30vw', margin:'2vh'}}
                />
                <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}}>EDIT</Button>
                <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}}>SAVE</Button>
            </Stack>
            <Stack direction='row' justifyContent='space-around' width='50vw' alignItems='center'>
                {/* <TextField
                    disabled
                    id="outlined-disabled"
                    label="Password"
                    defaultValue=".........."
                    style={{backgroundColor:'#26626A', borderRadius:'5px', color:'white', width: '30vw', margin:'2vh'}}
                /> */}
                <OutlinedInput
                    disabled
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    defaultValue='abcd'
                    style={{backgroundColor:'#26626A', color:'black', width:'30vw', marginLeft:'0.7vw'}}
                />
                <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}}>EDIT</Button>
                <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}}>SAVE</Button>
            </Stack>
            <Stack direction='row' justifyContent='space-around' width='50vw' alignItems='center'>
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Phone Number"
                    defaultValue="0754898652"
                    style={{backgroundColor:'#26626A', borderRadius:'5px', color:'white', width: '30vw', margin:'2vh'}}
                />
                <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}}>EDIT</Button>
                <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}}>SAVE</Button>
            </Stack>
            <Button sx={{
                borderRadius:'15px', 
                backgroundColor:'#A15D48', 
                color:'white', 
                width:'10vw', 
                alignContent:'center', 
                justifyContent:'center', 
                marginTop:'5vh',
                marginBottom:'4vh',
                marginLeft:'2vw'
            }}>
                Delete Account
            </Button>
                    
        </Container>
    )
}

export default Profile