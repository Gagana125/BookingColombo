import {Outlet} from "react-router-dom";
import ResponsiveAppBar from "../components/navbar.jsx";
import AuthBackgroundImage from "../assets/images/auth-background.jpg";

function AuthLayout() {
    return (
        <div className={'nunito-sans-light'}>
            <ResponsiveAppBar sticky={false}/>
            <div className={'flex'}>
                <div className={"w-[60%] max-2xl:pt-14"}>
                    <main>
                        <Outlet />
                    </main>
                </div>
                <div className={"w-[40%]"}>
                    <img src={AuthBackgroundImage}
                         alt="background image"
                        className={"object-cover w-full mt-1 opacity-75"}
                    />
                </div>
            </div>

        </div>
    );
}

export default AuthLayout;