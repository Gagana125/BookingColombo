import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api"

const adminSlice = createSlice({
    name : "admin",
    initialState: {
        admin : {},
        loggedIn : !!localStorage.getItem('admin'),
        localStorage : localStorage.getItem('admin') ? JSON.parse(localStorage.getItem('admin')) : {},
        errors : {
            login : '',
        },
        message : {
            login : '',
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
                state.localStorage = action.payload.admin;
                localStorage.setItem('admin', JSON.stringify(action.payload.admin));
                state.message.login = action.payload.message;
                state.errors.login = {};
                setTimeout(() => {
                    window.location.href = "/traveller/property";
                }, 1000);
            } else {
                state.errors.login = action.payload.errors;
            }
        })
    }
})

export const {logout} = adminSlice.actions
export default adminSlice.reducer

export const login = createAsyncThunk(
    'admin/login',
    async (formData) => {
        return api.post('/admin/login', formData).then((response) => {
            console.log(response);
            return {
                statusFlag: 'success',
                message: response.data.message,
                admin: response.data.data
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


