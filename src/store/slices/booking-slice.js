import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api"

const bookingSlice = createSlice({
    name : "booking",
    initialState: {
        booking : {},
        bookings : [],
        errors : {
            addBooking : '',
        },
        message : {
            addBooking : '',
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


