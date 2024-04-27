import {Outlet} from "react-router-dom";
import Footer from "../components/footer";
import OwnerNavbar from "../components/owner_navbar";

function PropertyOwnerLayout() {
    return (
        <div className={'nunito-sans-light'}>
            <OwnerNavbar/>
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

export default PropertyOwnerLayout;