import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api"

const wishlistSlice = createSlice({
    name : "wishlist",
    initialState: {
        wishlist : {},
        wishlists : [],
        errors : {
            addWishlist : '',
            getWishlist : '',
            removeWishlist : ''
        },
        message : {
            addWishlist : '',
            getWishlist : '',
            removeWishlist : ''
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
       builder.addCase(addWishlist.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.message.addWishlist = action.payload.message;
                state.wishlist = action.payload.wishlist;
            }else{
                state.errors.addWishlist = action.payload.errors;
            }
       }).addCase(getWishlist.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.wishlists = action.payload.wishlists;
                state.message.getWishlist = action.payload.message;
            }else{
                state.errors.getWishlist = action.payload.errors;
            }
       }).addCase(removeWishlist.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.message.removeWishlist = action.payload.message;
            }else{
                state.errors.removeWishlist = action.payload.errors;
            }
       })
    }
})

export const {logout} = wishlistSlice.actions
export default wishlistSlice.reducer

export const addWishlist = createAsyncThunk(
    'wishlist/addWishlist',
    async (formData) => {
        return api.post('/travellers/add-to-wishlist', formData).then((response) => {
            return {
                statusFlag: 'success',
                message: response.data.message,
                wishlist: response.data.data
            };
        }).catch((error) => {
            return {
                statusFlag: 'error',
                errors: error.response.data.errors
            };
        });
    }
)

export const getWishlist = createAsyncThunk(
    'wishlist/getWishlist',
    async (traveller) => {
        console.log(traveller);
        return api.get('/travellers/get-wishlist-by-traveller/'+traveller).then((response) => {
            return {
                statusFlag: 'success',
                message: response.data.message,
                wishlists: response.data.data
            };
        }).catch((error) => {
            return {
                statusFlag: 'error',
                errors: error.response.data.errors
            };
        });
    }
)

export const removeWishlist = createAsyncThunk(
    'wishlist/removeWishlist',
    async (id) => {
        return api.delete(`/travellers/remove-wishlist/${id}`).then((response) => {
            return {
                statusFlag: 'success',
                message: response.data.message
            };
        }).catch((error) => {
            return {
                statusFlag: 'error',
                errors: error.response.data.errors
            };
        });
    }
)


