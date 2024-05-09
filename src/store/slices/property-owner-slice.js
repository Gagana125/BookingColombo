import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api"

const propertyOwnerSlice = createSlice({
    name : "propertyOwner",
    initialState: {
        propertyOwner : {},
        loggedIn : !!localStorage.getItem('propertyOwner'),
        localStorage : localStorage.getItem('propertyOwner') ? JSON.parse(localStorage.getItem('propertyOwner')) : {},
        errors : {
            login : '',
            register: ''
        },
        message : {
            login : '',
            register: ''
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
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.loggedIn = true;
                state.localStorage = action.payload.propertyOwner;
                localStorage.setItem('propertyOwner', JSON.stringify(action.payload.propertyOwner));
                state.message.login = action.payload.message;
                state.errors.login = {};
                setTimeout(() => {
                    window.location.href = '/propertyOwner/profile';
                }, 1500);
            } else {
                state.errors.login = action.payload.errors;
            }
        }).addCase(register.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.message.register = action.payload.message;
                state.errors.register = {};
                setTimeout(() => {
                    window.location.href = '/auth/login';
                }, 1500);
            } else {
                state.errors.register = action.payload.errors;
            }
        })
    }
})

export const {logout} = propertyOwnerSlice.actions
export default propertyOwnerSlice.reducer

export const login = createAsyncThunk(
    'propertyOwner/login',
    async (formData) => {
        return api.post('/property-owners/login-property-owner', formData).then((response) => {
            console.log(response);
            return {
                statusFlag: 'success',
                message: response.data.message,
                propertyOwner: response.data.data
            };
        }).catch((error) => {
            console.log(error);
            return {
                statusFlag: 'error',
                errors: error.response.data.message
            };
        })
    }
)

export const register = createAsyncThunk(
    'propertyOwner/register',
    async (formData) => {
        return api.post('/property-owners/register-property-owner', formData).then((response) => {
            return {
                statusFlag: 'success',
                message: response.data.message,
                propertyOwner: response.data.data
            };
        }).catch((error) => {
            return {
                statusFlag: 'error',
                errors: error.response.data.message
            };
        })
    }
)

export const addProperty = createAsyncThunk(
    'propertyOwner/add',
    async (formData) => {
        return api.post('/property-owners/add-property', formData).then((response) => {
            return {
                statusFlag: 'success',
                message: response.data.message,
                propertyOwner: response.data.data
            };
        }).catch((error) => {
            return {
                statusFlag: 'error',
                errors: error.response.data.message
            };
        })
    }
)

