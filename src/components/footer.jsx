import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return(
        <Container>
            <div className="footer-image"></div>
            <Stack direction="row" justifyContent="space-around" className="text-container" alignContent='center'>
                <Stack direction="row" justifyContent="space-around" width='40vw'>
                    <Stack direction="column"> 
                        <Typography>INFROMATION </Typography>
                        <Typography>CONTACT US</Typography>
                        <Typography>EMAIL  </Typography>
                    </Stack>
                    <Stack direction="column"> 
                        <FacebookIcon sx={{color:"blue"}}></FacebookIcon>
                        <WhatsAppIcon sx={{color:"green"}}></WhatsAppIcon>
                        <InstagramIcon></InstagramIcon>
                    </Stack>
                    <Stack direction="column"> 
                        <Typography>contactus@colombounlocked.com </Typography>
                        <Typography>+94 123456789</Typography>
                    </Stack>
                </Stack>

                <Stack direction="column">
                    <div className="colombo-text">
                        <Typography style={{ color: '#CAB1AA', fontSize: '25px' }}>COLOMBO</Typography>
                        <Typography style={{ color: 'white', fontSize: '30px' }}>UNLOCKED</Typography>
                    </div>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Footer