import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer.ts";


const reducers = combineReducers({
    counter: counterReducer
})

const store =legacy_createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>

export default store