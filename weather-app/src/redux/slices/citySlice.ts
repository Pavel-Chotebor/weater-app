import {createSlice} from '@reduxjs/toolkit'

export interface CitySlice {
    cityDetail: any
}

const initialState: CitySlice = {
    cityDetail: {}
}

export const citySlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        setCityDetail: (state, action) => {
            state.cityDetail = action.payload
        },

    }
})

export const {setCityDetail} = citySlice.actions

export const cityReducer = citySlice.reducer


