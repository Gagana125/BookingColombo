import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function TravellerLayout() {
    return (
        <div className={'nunito-sans-light'}>
            <Navbar/>
            <div className={'flex'}>
                <div className={"w-[60%] max-2xl:pt-14"}>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default TravellerLayout;