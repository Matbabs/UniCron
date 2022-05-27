import { combineReducers } from 'redux'

import cronjobsReducer from './cronjobs'

const rootReducer = combineReducers({
    cronjobs: cronjobsReducer,
})

export default rootReducer