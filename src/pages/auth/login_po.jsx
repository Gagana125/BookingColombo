import * as React from 'react';
import { Container } from "react-bootstrap";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slices/property-owner-slice';

function LoginPropertyOwner() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email : '',
    password : ''
});
const successMessage = useSelector((state) => state.propertyOwner.message.login);
const errors = useSelector((state) => state.propertyOwner.errors.login);

const handleChange = (e) => {
    setFormData((state) => ({
        ...state,
        [e.target.name] : e.target.value
    }))
}

const handleLogin = () => {
    dispatch(login(formData));
    // console.log(formData);
}

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    return(
        <Container>
            <Stack direction='row' justifyContent='space-around' alignContent='center'>
                <Stack direction='column' width='35vw'>
                    <Typography style={{marginTop:'20vh', color:'#A15D48', fontWeight:'bold', fontSize:'large', marginBottom:'2vh'}}>LOGIN</Typography>
                    <FormControl sx={{ m: 1, width: '30vw', backgroundColor:'#26626A', borderRadius:'5px' }} variant="outlined">
                        <TextField id="email" label="Email" style={{color:'white'}} name={"email"} value={formData.email} onChange={handleChange}/>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch', backgroundColor:'#77A6AC', borderRadius:'5px' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password" style={{color:'white'}} >Password</InputLabel>
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
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <Stack direction='column' justifyContent='center' alignContent='center'>
                        <Button 
                          sx={{
                          borderRadius:'15px', 
                          backgroundColor:'#A15D48', 
                          color:'white', 
                          width:'6vw', 
                          alignContent:'center', 
                          justifyContent:'center', 
                          marginTop:'5vh'
                        }}
                        onClick={handleLogin}
                        >
                          Login
                          {/* <Link to={'/propertyOwner/viewProperty'} style={{color:'white', textDecoration:'none'}}>Login</Link> */}
                        </Button>
                        <Typography style={{fontSize:'small', marginBottom:'10vh'}}>FORGOT YOUR PASSWORD? <Link style={{color:'red', textDecoration:'none', cursor:'pointer'}}>RESET PASSWORD</Link></Typography>
                    </Stack>
                    
                </Stack>
                <div>
                    <img className='login-image2' src="/login2.png" alt="" />
                </div>
            </Stack>
            
        </Container>
    )
}

export default LoginPropertyOwner