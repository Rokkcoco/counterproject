import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer.ts";
import {loadState, saveState} from "../utils/localStorageUtils.ts";
import {throttle} from "lodash";





const rootReducer = combineReducers({
    counter: counterReducer
})


const store =legacy_createStore(rootReducer,loadState())



store.subscribe(throttle(() => {
    saveState( store.getState().counter);
}, 1000));
// export type StoreType = typeof store ???
export type AppStateType = ReturnType<typeof rootReducer>

export default store

// @ts-ignore
window.store = store

