import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api"

const travellerSlice = createSlice({
    name : "traveller",
    initialState: {
        traveller : {},
        loggedIn : !!localStorage.getItem('traveller'),
        localStorage : localStorage.getItem('traveller') ? JSON.parse(localStorage.getItem('traveller')) : {},
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
                state.localStorage = action.payload.traveller;
                localStorage.setItem('traveller', JSON.stringify(action.payload.traveller));
                state.message.login = action.payload.message;
                state.errors.login = {};
                setTimeout(() => {
                    window.location.href = '/';
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

export const {logout} = travellerSlice.actions
export default travellerSlice.reducer

export const login = createAsyncThunk(
    'traveller/login',
    async (formData) => {
        return api.post('/travellers/login-traveller', formData).then((response) => {
            return {
                statusFlag: 'success',
                message: response.data.message,
                traveller: response.data.data
            };
        }).catch((error) => {
            return {
                statusFlag: 'error',
                errors: error.response.data.message
            };
        })
    }
)

export const register = createAsyncThunk(
    'traveller/register',
    async (formData) => {
        return api.post('/travellers/register-traveller', formData).then((response) => {
            return {
                statusFlag: 'success',
                message: response.data.message,
                traveller: response.data.data
            };
        }).catch((error) => {
            return {
                statusFlag: 'error',
                errors: error.response.data.message
            };
        })
    }
)

