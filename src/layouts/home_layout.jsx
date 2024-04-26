import {Outlet} from "react-router-dom";
// import ResponsiveAppBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Navbar from "../components/navbar.jsx";

function HomeLayout() {
    return (
        <div className={'nunito-sans-light'}>
            <Navbar sticky={true}/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
}

export default HomeLayout;