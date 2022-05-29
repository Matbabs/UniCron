import { combineReducers } from 'redux'

import cronjobsReducer from './cronjobs'
import requestReducer  from './request'

const rootReducer = combineReducers({
    cronjobs: cronjobsReducer,
    request: requestReducer
})

export default rootReducer