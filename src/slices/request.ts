import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    minutes: "",
    hours: "",
    dayMonth: "",
    month: "",
    dayWeek: "",
    job: ""
}

const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        setMinutes: (state, { payload }) => {
            state.minutes = payload
        },
        setHours: (state, { payload }) => {
            state.hours = payload
        },
        setDayMonth: (state, { payload }) => {
            state.dayMonth = payload
        },
        setMonth: (state, { payload }) => {
            state.month = payload
        },
        setDayWeek: (state, { payload }) => {
            state.dayWeek = payload
        },
        setJob: (state, { payload }) => {
            state.job = payload
        },
        clear: state => {
            state.minutes = ""
            state.hours = ""
            state.dayMonth = ""
            state.month = ""
            state.dayWeek = ""
            state.job = ""
        }
    },
})

export default requestSlice.reducer

export const {setMinutes, setHours, setDayMonth, setMonth, setDayWeek, setJob, clear} = requestSlice.actions

export const requestSelector = (state: any) => state.request