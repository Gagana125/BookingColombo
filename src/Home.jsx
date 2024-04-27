import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function Home () {
    return (
        <Container>
            <Stack direction='row' justifyContent='space-evenly'>
                <Stack direction="column" marginTop="15vh" width="16vw">
                    <Typography style={{color:"#26626A", fontWeight:'bold'}}>BOOK A PLACE TO STAY </Typography>
                    <Typography>Colombo's charm doesn't have to break the bank! Discover a curated selection of guesthouses, boutique hotels, and serviced apartments – all designed for budget-conscious explorers.  Escape the ordinary and immerse yourself in vibrant local experiences, all within easy reach.  Book your perfect Colombo stay and get ready for an unforgettable adventure!</Typography>
                </Stack>
                <div className="home-img-container">
                    <img className="home-image" src="/home.jfif" alt="" />
                    <img className="home-image2" src="/h2.jfif" alt="" />
                    <img className="home-image2" src="/c.jfif" alt="" />
                    <img className="home-image" src="/h3.jfif" alt="" />
                </div>
                {/* <Stack direction="column" marginTop="15vh">
                    <img className="home-image" src="/home.jfif" alt="" />
                    <img className="home-image2" src="/h2.jfif" alt="" />
                </Stack>
                <Stack direction="column" marginTop="15vh">
                    <img className="home-image2" src="/c.jfif" alt="" />
                    <img className="home-image" src="/h3.jfif" alt="" />
                </Stack> */}
            </Stack>
            <Stack direction='row'>
                <img className="home-image4" src="/h5.jfif" alt="" />
                <div className="home-img-container2">
                    <img className="home-image3" src="/h7.jfif" alt="" />
                    <img className="home-image3" src="/h8.jfif" alt="" />
                    <img className="home-image3" src="/b.jfif" alt="" />
                    <img className="home-image3" src="/h3.jfif" alt="" />
                </div>
                <img className="home-image4" src="/h6.jfif" alt="" />
            </Stack>
            <Stack direction='row' marginBottom='3vh'>
                <img className="home-image4" src="/h5.jfif" alt="" />
                <Stack direction="column">
                    <img className="home-image5" src="/h7.jfif" alt="" />
                    <img className="home-image5" src="/h8.jfif" alt="" />
                </Stack>
                <Stack direction="column" width="20vw">
                    <Typography style={{color:"#26626A", fontWeight:'bold'}}>EXPLORE MORE FIND MORE PLACES TO VISIT </Typography>
                    <Typography>
                        Dive into the vibrant soul of Sri Lanka! Colombo beckons with its captivating blend of history, culture, and urban energy. Explore hidden gems, iconic landmarks, and bustling markets. Whether you seek colonial charm, contemporary vibes, or a taste of authentic Sri Lanka, Colombo has something to surprise and delight you.  Unleash your inner explorer and start planning your unforgettable adventure today!
                    </Typography>
            </Stack>
            </Stack>
            
            
            {/* <Footer/> */}
        </Container>
    )
}

export default Home