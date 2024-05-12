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
import AddPlace from "./pages/admin/add_place";
import EditProperty from "./pages/propertyOwner/edit_property";
import EditPlace from "./pages/admin/edit_place";
import OwnerProfile from "./pages/propertyOwner/owner_profile";
import Booking from "./pages/traveller/bookings";
import WishList from "./pages/traveller/wishlist";
import Explore from "./pages/traveller/explore";
import ExploreMore from "./pages/propertyOwner/explore_more";
import ViewDetails from "./pages/traveller/details";
import AdminLayout from "./layouts/admin_layout";
import BookingDetails from "./pages/traveller/booking_details";
import AdminLogin from "./pages/auth/admin_login.jsx";
import Reserve from "./pages/traveller/reserve";

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path={"auth"} element={<AuthLayout/>}>
      <Route path={"login"} element={<Login/>} />
      <Route path={"loginprop"} element={<LoginPropertyOwner/>} />
      <Route path={"register"} element={<SignUp/>} />
      <Route path={"registerprop"} element={<SignUpPropertyOwner/>} />
        <Route path={"adminLogin"} element={<AdminLogin/>}/>
    </Route>
    <Route path={"/"} element={<HomeLayout/>} >
      <Route index element={<Home/>} />
    </Route>
    <Route path={"traveller"} element={<TravellerLayout/>} >
      <Route path={"profile"} element={<Profile/>} />
      <Route path={"property"} element={<PropertyList/>} />
      <Route path={"category"} element={<Category/>} />
      <Route path={"booking"} element={<Booking/>} />
      <Route path={"wishlist"} element={<WishList/>} />
      <Route path={"explore"} element={<Explore/>} />
      <Route path={"details"} element={<ViewDetails/>} />
      <Route path={"bookingDetails"} element={<BookingDetails/>} />
      <Route path={"reserve"} element={<Reserve/>} />
    </Route>
    <Route path={"propertyOwner"} element={<PropertyOwnerLayout/>} >
      <Route path={"profile"} element={<OwnerProfile/>} />
      <Route path={"viewProperty"} element={<ViewProperty/>} />
      <Route path={"addProperty"} element={<AddProperty/>} />
      <Route path={"editProperty/:id"} element={<EditProperty/>} loader={({params}) => {
          return params.id;
      }}/>
      <Route path={"explore"} element={<ExploreMore/>} />
    </Route>
    <Route path={"admin"} element={<AdminLayout />}>
      <Route path={"addPlace"} element={<AddPlace/>} />
      <Route path={"editPlace/:id"} element={<EditPlace/>} loader={({params}) => {
          return params.id;
      }}/>
    </Route>
  </Route>
));

function App() {
    return (
      <RouterProvider router={router} />
    );
}

export default App;
