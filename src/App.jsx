import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from "./Home";
import Login from "./pages/auth/login";
import HomeLayout from "./layouts/home_layout";
import AuthLayout from "./layouts/auth_layout";
import SignUp from "./pages/auth/signup";
import LoginPropertyOwner from "./pages/auth/login_po";
import SignUpPropertyOwner from "./pages/auth/signup_po";
import TravellerLayout from "./layouts/traveller_layout";
import Profile from "./pages/traveller/profile";
import PropertyList from "./pages/traveller/property_list";
import AddProperty from "./pages/traveller/add_property";
import Category from "./pages/traveller/category";

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path={"auth"} element={<AuthLayout/>}>
      <Route path={"login"} element={<Login/>} />
      <Route path={"loginprop"} element={<LoginPropertyOwner/>} />
      <Route path={"register"} element={<SignUp/>} />
      <Route path={"registerprop"} element={<SignUpPropertyOwner/>} />
    </Route>
    <Route path={"/"} element={<HomeLayout/>} >
      <Route index element={<Home/>} />
    </Route>
    <Route path={"traveller"} element={<TravellerLayout/>} >
      <Route path={"profile"} element={<Profile/>} />
      <Route path={"property"} element={<PropertyList/>} />
      <Route path={"addProperty"} element={<AddProperty/>} />
      <Route path={"category"} element={<Category/>} />
    </Route>
  </Route>
));

function App() {
    return (
      <RouterProvider router={router} />
    );
}

export default App;
