import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api"

const reviewSlice = createSlice({
    name : "review",
    initialState: {
        review : {},
        reviews : [],
        errors : {
            addReview : '',
            getReviews : '',
            deleteReview : '',
            updateReview : '',
            getReview : '',
            getPlaceReviews : ''
        },
        message : {
            addReview : '',
            getReviews : '',
            deleteReview : '',
            updateReview : '',
            getReview : '',
            getPlaceReviews : ''
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
        builder.addCase(addReview.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.review = action.payload.review;
                state.message.addReview = action.payload.message;
                state.errors.addReview = {};
                window.location.reload()
            } else {
                state.errors.addReview = action.payload.errors;
            }
        }).addCase(getReviews.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.reviews = action.payload.reviews;
                state.message.getReviews = action.payload.message;
            } else {
                state.errors.getReviews = action.payload.message;
            }
        }).addCase(deleteReview.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.message.deleteReview = action.payload.message;
                window.location.reload();
            } else {
                state.errors.deleteReview = action.payload.message;
            }
        }).addCase(updateReview.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.message.updateReview = action.payload.message;
                state.review = action.payload.review;
                setTimeout(() => {
                    // window.location.reload()
                }, 1000);
            } else {
                state.errors.updateReview = action.payload.message;
            }
        }).addCase(getReviewByPlace.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.reviews = action.payload.reviews;
                state.message.getPlaceReviews = action.payload.message;
            } else {
                state.errors.getPlaceReviews = action.payload.message;
            }
        })
    }
})

export const {logout} = reviewSlice.actions
export default reviewSlice.reducer

export const addReview = createAsyncThunk(
    'review/addReview',
    async (formData) => {
        return api.post('/reviews/add-review', formData).then((response) => {
            return {
                statusFlag: 'success',
                message: response.data.message,
                review: response.data.data
            };
        }).catch((error) => {
            return {
                statusFlag: 'error',
                errors: error.response.data.errors
            };
        });
    }
)

export const getReviews = createAsyncThunk(
    'review/getReviews',
    async () => {
        return api.get('/reviews/get-reviews').then((response) => {
            return {
                statusFlag: 'success',
                message: response.data.message,
                reviews: response.data.data
            };
        }).catch((error) => {
            return {
                statusFlag: 'error',
                errors: error.response.data.errors
            };
        });
    }
)

export const deleteReview = createAsyncThunk(
    'review/deleteReview',
    async (id) => {
        return api.delete(`/reviews/delete-review/${id}`).then((response) => {
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

export const updateReview = createAsyncThunk(
    'review/updateReview',
    async (formData) => {
        return api.put(`/reviews/update-review/${formData.id}`, formData).then((response) => {
            return {
                statusFlag: 'success',
                message: response.data.message,
                review: response.data.data
            };
        }).catch((error) => {
            return {
                statusFlag: 'error',
                errors: error.response.data.errors
            };
        });
    }
)

export const getReviewByPlace = createAsyncThunk(
    'review/getReviewByPlace',
    async (id) => {
        return api.get(`/reviews/get-place-reviews/${id}`).then((response) => {
            // console.log(response);
            return {
                statusFlag: 'success',
                message: response.data.message,
                reviews: response.data.data
            };
        }).catch((error) => {
            return {
                statusFlag: 'error',
                errors: error.response.data.errors
            };
        });
    }
)




