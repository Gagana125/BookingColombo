import {configureStore} from "@reduxjs/toolkit";
import travellerSlice from "./slices/traveller-slice.js";

export default configureStore({
  reducer: {
    // Add your reducers here
    traveller: travellerSlice
  }
})