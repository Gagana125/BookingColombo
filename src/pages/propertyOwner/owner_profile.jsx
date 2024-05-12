import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Container, Divider, FormControl, IconButton, InputAdornment, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import DeleteDialog from "../../components/delete_dialog";
import { Link } from "react-router-dom";
import ReportDialog from "../../components/report_dialog";
import { useSelector } from "react-redux";

function OwnerProfile() {
    const propertyOwnerIsLoggedIn = useSelector((state)=>state.propertyOwner.loggedIn);
    if(!propertyOwnerIsLoggedIn) {
        window.location.href = '/auth/loginprop';
    }
    const propertyOwner = useSelector((state) => state.propertyOwner.localStorage);

    const [showPassword, setShowPassword] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [reportDialogOpen, setReportDialogOpen] = useState(false);

    // State variables to manage edit mode for each field
    const [editFirstName, setEditFirstName] = useState(false);
    const [editLastName, setEditLastName] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [editPassword, setEditPassword] = useState(false);
    const [editPhoneNumber, setEditPhoneNumber] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleDeleteDialogOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };

  const handleDeleteConfirmation = () => {
    console.log('Delete confirmed');
    setDeleteDialogOpen(false);
  };

  const handleReportDialogOpen = () => {
    setReportDialogOpen(true);
  };

  const handleReportDialogClose = () => {
    setReportDialogOpen(false);
  };

    return(
        <Container>
            <Stack direction='row' justifyContent='space-between' marginTop='3vh' marginLeft='10vw'>
                <img className="profile-image" src="/propertyOwner.png" alt="" />
                <Stack direction='column' width='50vw' marginTop='4vh'>
                    <Typography sx={{color:'#26626A', fontSize:'large', fontWeight:'bolder', marginBottom:'1vh'}}>
                        {propertyOwner.firstName + ' ' + propertyOwner.lastName}
                    </Typography>
                    <Stack direction='row' width='45vw' justifyContent='space-between'>
                        <Typography>EMAIL : {propertyOwner.email}</Typography>
                        <Typography>PHONE: {propertyOwner.contact}</Typography>
                    </Stack>
                    <Divider style={{backgroundColor:'black', width:'45vw'}}></Divider>
                    <Stack direction='row' style={{marginTop:'2vh'}}>
                        <Typography>Profile Completion </Typography>
                        <Divider orientation="vertical" flexItem style={{backgroundColor:'black', marginInline:'3vw'}}/>
                        <Button 
                            style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginRight:'1vh'}}
                        >
                            <Link to={'/propertyOwner/viewProperty'} style={{textDecoration:'none', color:'white'}}>MY PROPERTIES</Link>
                        </Button>
                        <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginRight:'1vh'}}>
                            <Link to={'/propertyOwner/addProperty'} style={{textDecoration:'none', color:'white'}}>ADD NEW PROPERTY</Link>
                        </Button>
                        <Button 
                            style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginRight:'1vh'}}
                            onClick={handleReportDialogOpen}
                        >
                            VIEW REPORTS
                        </Button>
                        <ReportDialog
                            open={reportDialogOpen}
                            onClose={handleReportDialogClose}
                        />
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
            <TextField
                    disabled
                    id="outlined-disabled"
                    label="Profile ID"
                    defaultValue="PO9878"
                    style={{backgroundColor:'#8FBC8F', borderRadius:'5px', color:'white', width: '30vw', margin:'2vh', marginLeft:'4vw'}}
                />
            <Stack direction='row' justifyContent='space-around' width='50vw' alignItems='center'>
                <TextField
                    disabled={!editFirstName}
                    id="outlined-disabled"
                    label="First Name"
                    defaultValue={propertyOwner.firstName}
                    style={{backgroundColor:'#8FBC8F', borderRadius:'5px', color:'white', width: '30vw', margin:'2vh'}}
                />
                {!editFirstName ? ( 
                    <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}} onClick={() => setEditFirstName(true)}>EDIT</Button>
                ) : ( 
                    <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}} onClick={() => setEditFirstName(false)}>SAVE</Button>
                )}
            </Stack>
            <Stack direction='row' justifyContent='space-around' width='50vw' alignItems='center'>
                <TextField
                    disabled={!editLastName}
                    id="outlined-disabled"
                    label="Last Name"
                    defaultValue={propertyOwner.lastName}
                    style={{backgroundColor:'#8FBC8F', borderRadius:'5px', color:'white', width: '30vw', margin:'2vh'}}
                />
                {!editLastName ? ( 
                    <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}} onClick={() => setEditLastName(true)}>EDIT</Button>
                ) : ( 
                    <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}} onClick={() => setEditLastName(false)}>SAVE</Button>
                )}
            </Stack>
            <Stack direction='row' justifyContent='space-around' width='50vw' alignItems='center'>
                <TextField
                    disabled={!editEmail}
                    id="outlined-disabled"
                    label="Email"
                    defaultValue={propertyOwner.email}
                    style={{backgroundColor:'#8FBC8F', borderRadius:'5px', color:'white', width: '30vw', margin:'2vh'}}
                />
                {!editEmail ? ( 
                    <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}} onClick={() => setEditEmail(true)}>EDIT</Button>
                ) : ( 
                    <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}} onClick={() => setEditEmail(false)}>SAVE</Button>
                )}
            </Stack>
            <Stack direction='row' justifyContent='space-around' width='50vw' alignItems='center'>
                {/* <TextField
                    disabled
                    id="outlined-disabled"
                    label="Password"
                    defaultValue=".........."
                    style={{backgroundColor:'#8FBC8F', borderRadius:'5px', color:'white', width: '30vw', margin:'2vh'}}
                /> */}
                <OutlinedInput
                    disabled={!editPassword}
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
                    defaultValue={propertyOwner.password}
                    style={{backgroundColor:'#8FBC8F', color:'black', width:'30vw', marginLeft:'0.7vw'}}
                />
                {!editPassword ? ( 
                    <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}} onClick={() => setEditPassword(true)}>EDIT</Button>
                ) : ( 
                    <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}} onClick={() => setEditPassword(false)}>SAVE</Button>
                )}
            </Stack>
            <Stack direction='row' justifyContent='space-around' width='50vw' alignItems='center'>
                <TextField
                    disabled={!editPhoneNumber}
                    id="outlined-disabled"
                    label="Phone Number"
                    defaultValue={propertyOwner.contact}
                    style={{backgroundColor:'#8FBC8F', borderRadius:'5px', color:'white', width: '30vw', margin:'2vh'}}
                />
                {!editPhoneNumber ? ( 
                    <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}} onClick={() => setEditPhoneNumber(true)}>EDIT</Button>
                ) : ( 
                    <Button style={{backgroundColor:'#77A6AC', color:'white', borderRadius:'15px', marginTop:'2vh', width:'6vw', height:'4vh'}} onClick={() => setEditPhoneNumber(false)}>SAVE</Button>
                )}
            </Stack>
            <Button 
            sx={{
                borderRadius:'15px', 
                backgroundColor:'#A15D48', 
                color:'white', 
                width:'10vw', 
                alignContent:'center', 
                justifyContent:'center', 
                marginTop:'5vh',
                marginBottom:'4vh',
                marginLeft:'2vw'
            }}
            onClick={handleDeleteDialogOpen}
            >
                Delete Account
            </Button>
            <DeleteDialog
                open={deleteDialogOpen}
                onClose={handleDeleteDialogClose}
                onConfirm={handleDeleteConfirmation}
                title="DELETE ACCOUNT?"
                content="Are you sure you want to delete this account?"
            />
                    
        </Container>
    )
}

export default OwnerProfile