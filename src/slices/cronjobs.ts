import { createSlice } from '@reduxjs/toolkit'

const URL = "http://localhost:8080"

const initialState = {
    loading: false,
    hasErrors: false,
    cronjobs: [],
}

const cronjobsSlice = createSlice({
    name: 'cronjobs',
    initialState,
    reducers: {
        getcronjobs: state => {
            state.loading = true
        },
        getcronjobsSuccess: (state, { payload }) => {
            state.cronjobs = payload
            state.loading = false
            state.hasErrors = false
        },
        getcronjobsFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    },
})

export default cronjobsSlice.reducer

export const cronjobsSelector = (state: any) => state.cronjobs

export function getCronjobsThunk() {
    return (dispatch: any) => {
        dispatch(cronjobsSlice.actions.getcronjobs())
        try {
            fetch(`${URL}/crontab`)
                .then(res => res.json())
                .then(res => dispatch(cronjobsSlice.actions.getcronjobsSuccess(res)))
        } catch (error) {
            dispatch(cronjobsSlice.actions.getcronjobsFailure())
        }
    }
}

export function putCronjobsThunk(cronjobs: any[]) {
    return (dispatch: any) => {
        fetch(`${URL}/crontab`, {
            method: 'PUT',
            headers: {},
            body: JSON.stringify(cronjobs)
        }).then(_ => dispatch(getCronjobsThunk()))
    }
}

export function postCronjobsThunk(cronjob: any) {
    return (dispatch: any) => {
        fetch(`${URL}/crontab`, {
            method: 'POST',
            headers: {},
            body: JSON.stringify(cronjob)
        }).then(_ => dispatch(getCronjobsThunk()))
    }
}