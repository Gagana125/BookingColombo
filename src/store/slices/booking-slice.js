import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api"

const bookingSlice = createSlice({
    name : "booking",
    initialState: {
        booking : {},
        bookings : [],
        allBookings : [],
        errors : {
            addBooking : '',
            getBooking : '',
            getAllBooking : '',
            deleteBooking : '',
        },
        message : {
            addBooking : '',
            getBooking : '',
            getAllBooking : '',
            deleteBooking : '',
        }
    },
    reducers : {
    },
    extraReducers : (builder) => {
        builder.addCase(addBooking.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.message.addBooking = action.payload.message;
                state.booking = action.payload.booking;
                setTimeout(() => {
                    window.location.reload()
                }, 500);
            }else{
                state.errors.addBooking = action.payload.errors;
            }
        }).addCase(getBooking.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.bookings = action.payload.booking;
                state.message.getBooking = action.payload.message;
            } else {
                state.errors.getBooking = action.payload.message;
            }
        }).addCase(getAllBooking.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.allBookings = action.payload.booking;
                state.message.getAllBooking = action.payload.message;
            } else {
                state.errors.getAllBooking = action.payload.message;
            }
        }).addCase(deleteBooking.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.message.deleteBooking = action.payload.message;
                window.location.reload();
            } else {
                state.errors.deleteBooking = action.payload.message;
            }
        })
    }
})
export default bookingSlice.reducer

export const addBooking = createAsyncThunk(
    'booking/addBooking',
    async (formData) => {
        return api.post('/bookings/add-booking', formData,{
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response.data)
            return {
                statusFlag: 'success',
                message: response.data.message,
                booking: response.data.booking
            }
        }).catch(error => {
            console.log(error.response)
            return {
                statusFlag: 'error',
                errors: error.response.data
            }
        })
    }
)

export const getBooking = createAsyncThunk(
    'booking/getBooking',
    async (date) => {
        return api.get(`/bookings/get-bookings/${date}`).then(response => {
            console.log(response);
            return {
                statusFlag: 'success',
                booking: response.data.bookings,
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

export const getAllBooking = createAsyncThunk(
    'booking/getAllBooking',
    async (id) => {
        return api.get(`/bookings/get-all-bookings/${id}`).then(response => {
            console.log(response);
            return {
                statusFlag: 'success',
                booking: response.data.bookings,
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

export const deleteBooking = createAsyncThunk(
    'place/deleteBooking',
    async (id) => {
        return api.delete(`/bookings/delete-bookings/${id}`).then(response => {

            return {
                statusFlag: 'success',
                message: response.data.message
            }
        }).catch(error => {
            console.log(error);
            return {
                statusFlag: 'error',
                message: error.response.data.message
            }
        })
    }
)
