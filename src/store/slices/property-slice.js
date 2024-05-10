import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api"

const propertySlice = createSlice({
    name : "property",
    initialState: {
        properties : [],
        errors : {
            getProperties : '',
        },
        message : {
            getProperties : '',
        }
    },
    reducers : {
    },
    extraReducers : (builder) => {
        builder.addCase(getProperties.fulfilled,(state, action) => {
            if(action.payload.statusFlag === 'success'){
                state.properties = action.payload.property;
                state.errors.getProperties = '';
                state.message.getProperties = action.payload.message;
            } else{
                state.message.getProperties = '';
                state.errors.getProperties = action.payload.errors;
            }
        })
    }
})

export default propertySlice.reducer

export const getProperties = createAsyncThunk(
    "propertyOwner/getProperties",
    async (id) => {
      return api
        .get(`/property/get-properties/${id}`)
        .then((response) => {
            // console.log(response);
          return {
            statusFlag: "success",
            message: response.data.message,
            property: response.data.data
          };
        })
        .catch((error) => {
            // console.log(error);
          return {
            statusFlag: "error",
            errors: error.response.data.message
          };
        });
    }
);