import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function Home () {
    return (
        <Container>
            <Navbar/>
            <Stack direction="column" marginTop="15vh" width="16vw">
                <Typography style={{color:"#26626A", fontWeight:'bold'}}>BOOK A PLACE TO STAY </Typography>
                <Typography>Colombo's charm doesn't have to break the bank! Discover a curated selection of guesthouses, boutique hotels, and serviced apartments – all designed for budget-conscious explorers.  Escape the ordinary and immerse yourself in vibrant local experiences, all within easy reach.  Book your perfect Colombo stay and get ready for an unforgettable adventure!</Typography>
            </Stack>
            <Stack direction="column" marginTop="15vh" width="16vw">
                <Typography style={{color:"#26626A", fontWeight:'bold'}}>EXPLORE MORE FIND MORE PLACES TO VISIT </Typography>
                <Typography>
                    Dive into the vibrant soul of Sri Lanka! Colombo beckons with its captivating blend of history, culture, and urban energy. Explore hidden gems, iconic landmarks, and bustling markets. Whether you seek colonial charm, contemporary vibes, or a taste of authentic Sri Lanka, Colombo has something to surprise and delight you.  Unleash your inner explorer and start planning your unforgettable adventure today!
                </Typography>
            </Stack>
            <Footer/>
        </Container>
    )
}

export default Home