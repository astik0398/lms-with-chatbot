import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import { reducer as userReducer } from "./UserReducer/reducer"
import { reducer as teacherReducer } from './TeacherReducer/reducer'
import { reducer as courseReducer } from './CourseReducer/reducer'
import {thunk} from 'redux-thunk'


const middleware = [thunk]
const rootReducer = combineReducers({
    userReducer,
    teacherReducer,
    courseReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(...middleware))