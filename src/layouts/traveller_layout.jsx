import {Outlet} from "react-router-dom";
import Footer from "../components/footer";
import TravellerNavbar from "../components/traveller_navbar";

function TravellerLayout() {
    return (
        <div className={'nunito-sans-light'}>
            <TravellerNavbar/>
            <div className={'flex'}>
                <div className={"w-[60%] max-2xl:pt-14 min-h-full"}>
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