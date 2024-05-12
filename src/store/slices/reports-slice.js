import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api"

const reportsSlice = createSlice({
    name : "reports",
    initialState: {
        reservationCount : null,
        propertyCount : null,
        revenue : null,
    },
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(reservationCounts.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.reservationCount = action.payload.data;
            }
        }).addCase(propertyCounts.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.propertyCount = action.payload.data;
            }
        }).addCase(revenueCounts.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.revenue = action.payload.data;
            }
        })
    }
})

export default reportsSlice.reducer

export const reservationCounts = createAsyncThunk(
    'reports/reservationCounts',
    async (id) => {
        return api.get('/reports/reservation-counts/'+id).then(response => {
            return {
                statusFlag: 'success',
                data: response.data.data
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

export const propertyCounts = createAsyncThunk(
    'reports/propertyCounts',
    async (id) => {
        return api.get('/reports/property-counts/'+id).then(response => {
            return {
                statusFlag: 'success',
                data: response.data.data
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


export const revenueCounts = createAsyncThunk(
    'reports/revenueCounts',
    async (id) => {
        return api.get('/reports/revenue-generated/'+id).then(response => {
            return {
                statusFlag: 'success',
                data: response.data.data

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


