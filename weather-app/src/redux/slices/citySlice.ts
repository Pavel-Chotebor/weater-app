import {createSlice} from '@reduxjs/toolkit'
import { City } from '../../models'

export interface CitySlice {
    cityDetail: City | null
}

const initialState: CitySlice = {
    cityDetail: null
}

export const citySlice = createSlice({
    name: "city",
    initialState: initialState,
    reducers: {
        setCityDetail: (state, action) => {
            state.cityDetail = action.payload
        },

    }
})

export const {setCityDetail} = citySlice.actions

export const cityReducer = citySlice.reducer


