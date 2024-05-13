import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api"

const propertySlice = createSlice({
    name : "property",
    initialState: {
        properties : [],
        allProperties : [],
        property : {},
        errors : {
            getAllProperties : '',
            getProperties : '',
            getProperty : '',
            updateProperty : '',
            deleteProperty : ''
        },
        message : {
            getAllProperties : '',
            getProperties : '',
            getProperty : '',
            updateProperty : '',
            deleteProperty : ''
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
        }).addCase(getProperty.fulfilled,(state, action) => {
            if(action.payload.statusFlag === 'success'){
                state.property = action.payload.property;
                state.errors.getProperty = '';
                state.message.getProperty = action.payload.message;
            } else{
                state.message.getProperty = '';
                state.errors.getProperty = action.payload.errors;
            }
        }).addCase(updateProperty.fulfilled,(state, action) => {
            if(action.payload.statusFlag === 'success'){
                state.errors.updateProperty = '';
                state.message.updateProperty = action.payload.message;
            } else{
                state.message.updateProperty = '';
                state.errors.updateProperty = action.payload.errors;
            }
        }).addCase(deleteProperty.fulfilled,(state, action) => {
            if(action.payload.statusFlag === 'success'){
                state.errors.deleteProperty = '';
                state.message.deleteProperty = action.payload.message;
                window.location.href = '/propertyOwner/viewProperty';
            } else{
                state.message.deleteProperty = '';
                state.errors.deleteProperty = action.payload.errors;
            }
        }).addCase(getAllProperties.fulfilled,(state, action) => {
          if(action.payload.statusFlag === 'success'){
              state.allProperties = action.payload.property;
              state.errors.getProperties = '';
              state.message.getProperties = action.payload.message;
        } else{
            state.message.getAllProperties = '';
            state.errors.getAllProperties = action.payload.errors;
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

export const getProperty = createAsyncThunk(
    "propertyOwner/getProperty",
    async (id) => {
      return api
        .get(`/property/get-property/${id}`)
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

export const updateProperty = createAsyncThunk(
    "propertyOwner/updateProperty",
    async (formData) => {
      return api
        .put(`/property/update-property`, formData)
        .then((response) => {
            // console.log(response);
          return {
            statusFlag: "success",
            message: response.data.message
          };
        })
        .catch((error) => {
            console.log(error);
          return {
            statusFlag: "error",
            errors: error.response.data.message
          };
        });
    }
);

export const deleteProperty = createAsyncThunk(
    "propertyOwner/deleteProperty",
    async (id) => {
      return api
        .delete(`/property/delete-property/${id}`)
        .then((response) => {
            console.log(response);
          return {
            statusFlag: "success",
            message: response.data.message
          };
        })
        .catch((error) => {
            console.log(error);
          return {
            statusFlag: "error",
            errors: error.response.data.message
          };
        });
    }
);

export const getAllProperties = createAsyncThunk(
  "traveller/getAllProperties",
  async (id) => {
    return api
      .get(`/property/get-all-properties`)
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