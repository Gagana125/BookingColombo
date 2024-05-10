import {configureStore} from "@reduxjs/toolkit";
import travellerSlice from "./slices/traveller-slice.js";
import propertyOwnerSlice from "./slices/property-owner-slice.js";

export default configureStore({
  reducer: {
    // Add your reducers here
    traveller: travellerSlice,
    propertyOwner: propertyOwnerSlice
  }
})