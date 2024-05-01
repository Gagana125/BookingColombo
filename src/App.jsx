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
import AddProperty from "./pages/propertyOwner/add_property";
import Category from "./pages/traveller/category";
import PropertyOwnerLayout from "./layouts/propertyOwner_layout";
import ViewProperty from "./pages/propertyOwner/view_property";
import AddPlace from "./pages/traveller/add_place";
import EditProperty from "./pages/propertyOwner/edit_property";
import EditPlace from "./pages/traveller/edit_place";
import OwnerProfile from "./pages/propertyOwner/owner_profile";
import Booking from "./pages/traveller/bookings";
import WishList from "./pages/traveller/wishlist";
import Explore from "./pages/traveller/explore";
import ExploreMore from "./pages/propertyOwner/explore_more";

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
      <Route path={"addPlace"} element={<AddPlace/>} />
      <Route path={"editPlace"} element={<EditPlace/>} />
      <Route path={"category"} element={<Category/>} />
      <Route path={"booking"} element={<Booking/>} />
      <Route path={"wishlist"} element={<WishList/>} />
      <Route path={"explore"} element={<Explore/>} />
    </Route>
    <Route path={"propertyOwner"} element={<PropertyOwnerLayout/>} >
      <Route path={"profile"} element={<OwnerProfile/>} />
      <Route path={"viewProperty"} element={<ViewProperty/>} />
      <Route path={"addProperty"} element={<AddProperty/>} />
      <Route path={"editProperty"} element={<EditProperty/>} />
      <Route path={"explore"} element={<ExploreMore/>} />
    </Route>
  </Route>
));

function App() {
    return (
      <RouterProvider router={router} />
    );
}

export default App;
