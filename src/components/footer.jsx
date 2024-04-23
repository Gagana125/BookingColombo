import { Container, Icon, Stack, Typography } from "@mui/material";
import React from "react";

function Footer() {
    return(
        <Container>
            <div className="footer-image"></div>
            <Stack direction="row" justifyContent="space-around">
            <Typography>Information </Typography>

                <Stack direction="column"> 
                    <Typography>Information </Typography>
                    <Typography>Contact Us </Typography>
                    <Typography>Email  </Typography>
                </Stack>

                <Stack direction="column"> 
                    <Icon></Icon>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Footer