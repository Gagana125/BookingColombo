import {configureStore} from "@reduxjs/toolkit";
import travellerSlice from "./slices/traveller-slice.js";
import propertyOwnerSlice from "./slices/property-owner-slice.js";
import propertySlice from "./slices/property-slice.js";
import adminSlice from "./slices/admin-slice.js";
import placeSlice from "./slices/place-slice.js";
import reviewSlice from "./slices/review-slice.js";
import wishlistSlice from "./slices/wishlist-slice.js";
import bookingSlice from "./slices/booking-slice.js";
import reportsSlice from "./slices/reports-slice.js";

export default configureStore({
  reducer: {
    traveller: travellerSlice,
    propertyOwner: propertyOwnerSlice,
    property: propertySlice,
    admin : adminSlice,
    place : placeSlice,
    review : reviewSlice,
    wishlist : wishlistSlice,
    booking : bookingSlice,
    reports : reportsSlice
  }
})