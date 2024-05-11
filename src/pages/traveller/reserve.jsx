import { Container, FormControl, Stack, TextField, Button, Typography } from "@mui/material";
import React from "react";

function Reserve () {
    return(
        <Container>
            <Typography style={{marginTop:'5vh', color:'#A15D48', fontWeight:'bold', fontSize:'x-large', marginBottom:'2vh'}}>
                RESERVE THE HOTEL
            </Typography>
            <Stack direction='column' width='55vw' alignItems='center'>
                <FormControl variant="outlined" fullWidth>
                    <TextField id="name" label="Name" style={{backgroundColor:'#26626A', color:'white', borderRadius:'5px', marginBottom:'3vh'}} />
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <TextField id="email" label="Email" style={{backgroundColor:'#26626A', color:'white', borderRadius:'5px', marginBottom:'3vh'}} />
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <TextField id="phone" label="Phone Number" style={{backgroundColor:'#26626A', color:'white', borderRadius:'5px', marginBottom:'3vh'}} />
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <TextField id="arrivalDate" label="Arrival Date" type="date" style={{backgroundColor:'#26626A', color:'white', borderRadius:'5px', marginBottom:'3vh'}} InputLabelProps={{shrink: true}} />
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <TextField id="departureDate" label="Departure Date" type="date" style={{backgroundColor:'#26626A', color:'white', borderRadius:'5px', marginBottom:'3vh'}} InputLabelProps={{shrink: true}} />
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <TextField id="noOfPeople" label="No. of People" type="number" style={{backgroundColor:'#26626A', color:'white', borderRadius:'5px', marginBottom:'3vh'}} />
                </FormControl>
                <Button variant="contained" style={{backgroundColor:'#A15D48', width:'10vw', marginBottom:'10vh'}}>
                    RESERVE
                </Button>
            </Stack>
            
        </Container>
    )
}

export default Reserve;
