import * as React from 'react';
import { Container } from "react-bootstrap";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/slices/traveller-slice.js";
import {Bounce, toast, ToastContainer} from "react-toastify";
import {useEffect} from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = React.useState(false);
    const [formData, setFormData] = React.useState({
        email : '',
        password : ''
    });
    const successMessage = useSelector((state) => state.traveller.message.login);
    const errors = useSelector((state) => state.traveller.errors.login);

    const handleChange = (e) => {
        setFormData((state) => ({
            ...state,
            [e.target.name] : e.target.value
        }))
    }

    const handleLogin = () => {
        dispatch(login(formData));
    }

    const successNotify = () => toast.success(successMessage, {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    return(
        <Container>
            <Stack direction='row' justifyContent='space-around' alignContent='center'>
                <Stack direction='column' width='35vw'>
                    <Typography style={{marginTop:'20vh', color:'#A15D48', fontWeight:'bold', fontSize:'large', marginBottom:'2vh'}}>LOGIN</Typography>
                    {
                        errors ? <Typography style={{color:'red', marginBottom:'2vh'}}>Invalid Credentials!</Typography> : <div></div>
                    }
                    <FormControl sx={{ m: 1, width: '30vw', backgroundColor:'#77A6AC', borderRadius:'5px' }} variant="outlined">
                        <TextField id="email" label="Email" style={{color:'white'}} name={"email"} value={formData.email} onChange={handleChange}/>
                    </FormControl>
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
                            name={"password"}
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <Stack direction='column' justifyContent='center' alignItems='center'>
                        <Button sx={{borderRadius:'15px', backgroundColor:'#A15D48', color:'white', width:'6vw', alignContent:'center', justifyContent:'center', marginTop:'5vh'}} onClick={handleLogin}>Login</Button>
                        <Typography style={{fontSize:'small', marginBottom:'10vh'}}>FORGOT YOUR PASSWORD? <Link style={{color:'red', textDecoration:'none', cursor:'pointer'}}>RESET PASSWORD</Link></Typography>
                    </Stack>
                    
                </Stack>
                <div>
                    <img className='login-image' src="/login.jpeg" alt="" />
                </div>
            </Stack>
            <ToastContainer/>
            {
                successMessage ? successNotify() : <div></div>
            }
        </Container>
    )
}

export default Login