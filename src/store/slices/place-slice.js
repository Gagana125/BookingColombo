import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api"

const placeSlice = createSlice({
    name : "place",
    initialState: {
        place : {},
        onePlace : {},
        places : [],
        errors : {
            addPlace : '',
            getPlaces : '',
            deletePlace : '',
            updatePlace : '',
            getPlace : ''
        },
        message : {
            addPlace : '',
            getPlaces : '',
            deletePlace : '',
            updatePlace : '',
            getPlace : ''
        }
    },
    reducers : {
        // logout(state)
        // {
        //     state.localStorage = {};
        //     localStorage.removeItem('traveller');
        //     state.errors = {};
        //
        //     window.location.href = '/traveller/login';
        // },
    },
    extraReducers : (builder) => {
        builder.addCase(addPlace.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.place = action.payload.place;
                state.message.addPlace = action.payload.message;
                state.errors.addPlace = {};
                // setTimeout(() => {
                //     // window.location.reload()
                // }, 1000);
                window.location.href = '/traveller/property';
            } else {
                state.errors.addPlace = action.payload.errors;
            }
        }).addCase(getPlaces.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.places = action.payload.places;
                state.message.getPlaces = action.payload.message;
            } else {
                state.errors.getPlaces = action.payload.message;
            }
        }).addCase(deletePlace.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.message.deletePlace = action.payload.message;
                window.location.reload();
            } else {
                state.errors.deletePlace = action.payload.message;
            }
        }).addCase(updatePlace.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.message.updatePlace = action.payload.message;
                window.location.reload();
            } else {
                state.errors.updatePlace = action.payload.message;
            }
        }).addCase(getPlace.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.onePlace = action.payload.place;
                state.message.getPlace = action.payload.message;
            } else {
                state.errors.getPlace = action.payload.message;
            }
        })
    }
})

export const {logout} = placeSlice.actions
export default placeSlice.reducer

export const addPlace = createAsyncThunk(
    'place/addPlace',
    async (formData) => {
        return api.post('/admin/add-place', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }

        }).then((response) => {
            console.log(response);
            return {
                statusFlag: 'success',
                message: response.data.message,
                place: response.data.data
            };
        }).catch((error) => {
            console.log(error);
            return {
                statusFlag: 'error',
                message: error.response.data.message,
                errors: error.response.data.errors
            };
        });
    }
)

export const getPlaces = createAsyncThunk(
    'place/getPlaces',
    async () => {
        return api.get('/admin/get-places').then(response => {
            console.log(response);
            return {
                places: response.data.data,
                statusFlag: 'success',
                message: response.data.message
            }
        }).catch(error => {
            console.log(error.response.data);
            return {
                statusFlag: 'error',
                message: error.response.data.message
            }
        })
    }
)

export const deletePlace = createAsyncThunk(
    'place/deletePlace',
    async (id) => {
        return api.delete(`/admin/delete-place/${id}`).then(response => {
            return {
                statusFlag: 'success',
                message: response.data.message
            }
        }).catch(error => {
            return {
                statusFlag: 'error',
                message: error.response.data.message
            }
        })
    }
)

export const updatePlace = createAsyncThunk(
    'place/updatePlace',
    async (formData) => {
        console.log(formData);
        return api.put('/admin/update-place', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            // console.log(response);
            return {
                statusFlag: 'success',
                message: response.data.message
            }
        }).catch(error => {
            return {
                statusFlag: 'error',
                message: error.response.data.message
            }
        })
    }
)

export const getPlace = createAsyncThunk(
    'place/getPlace',
    async (id) => {
        return api.get(`/admin/get-place/${id}`).then(response => {
            console.log(response);
            return {
                statusFlag: 'success',
                place: response.data.data,
                message: response.data.message
            }
        }).catch(error => {
            return {
                statusFlag: 'error',
                message: error.response.data.message
            }
        })
    }
)


