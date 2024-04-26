import * as React from 'react';
import { Container } from "react-bootstrap";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function SignUpPropertyOwner() {
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    return(
        <Container>
            <Stack direction='row' justifyContent='space-around' alignContent='center'>
                <Stack direction='column' width='36vw'>
                    <Typography style={{marginTop:'20vh', color:'#A15D48', fontWeight:'bold', fontSize:'large', marginBottom:'2vh'}}>CREATE A NEW ACCOUNT</Typography>
                    <Typography style={{fontSize:'small', marginBottom:'3vh'}}>ALREADY A MEMBER? <Link to={'/auth/login'} style={{color:'red', textDecoration:'none', cursor:'pointer'}}>LOGIN</Link></Typography>
                    <Stack direction='row' justifyContent='space-between'>
                        <FormControl variant="outlined">
                            <TextField id="email" label="First Name" style={{backgroundColor:'#26626A',color:'white', borderRadius:'5px', marginBottom:'3vh'}} />
                        </FormControl>
                        <FormControl variant="outlined">
                            <TextField id="email" label="Last Name" style={{backgroundColor:'#26626A',color:'white', borderRadius:'5px', marginBottom:'3vh'}} />
                        </FormControl>
                    </Stack>
                    <FormControl variant="outlined">
                        <TextField id="email" label="Email" style={{backgroundColor:'#26626A',color:'white', borderRadius:'5px', marginBottom:'3vh'}} />
                    </FormControl>
                    <Stack direction='row' justifyContent='space-between'>
                        <FormControl sx={{ m: 1, width: '25ch', backgroundColor:'#77A6AC', borderRadius:'5px' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password" style={{color:'white'}}>Password</InputLabel>
                            <OutlinedInput
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
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch', backgroundColor:'#77A6AC', borderRadius:'5px' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password" style={{color:'white'}}>Confirm Password</InputLabel>
                            <OutlinedInput
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
                            />
                        </FormControl>
                    </Stack>
                    <FormControl variant="outlined">
                        <TextField id="phone" label="Phone Number" style={{backgroundColor:'#26626A',color:'white', borderRadius:'5px', marginBottom:'3vh'}} />
                    </FormControl>
                    <Stack direction='column' justifyContent='center' alignContent='center'>
                        <Button sx={{borderRadius:'15px', backgroundColor:'#A15D48', color:'white', width:'10vw', alignContent:'center', justifyContent:'center', marginBottom:'5vh'}}>CREATE ACCOUNT</Button>
                    </Stack>
                </Stack>
                <div>
                    <img className='signup-image2' src="/signup2.jfif" alt="" />
                </div>
            </Stack>
            
        </Container>
    )
}

export default SignUpPropertyOwner