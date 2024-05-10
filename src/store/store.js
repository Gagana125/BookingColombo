import {configureStore} from "@reduxjs/toolkit";
import travellerSlice from "./slices/traveller-slice.js";
import propertyOwnerSlice from "./slices/property-owner-slice.js";
import propertySlice from "./slices/property-slice.js";

export default configureStore({
  reducer: {
    // Add your reducers here
    traveller: travellerSlice,
    propertyOwner: propertyOwnerSlice,
    property: propertySlice
  }
})