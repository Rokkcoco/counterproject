import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer.ts";
import {loadState, saveState} from "../utils/localStorageUtils.ts";




const reducers = combineReducers({
    counter: counterReducer,
    inputMin: counterReducer
})


const store =legacy_createStore(reducers,loadState())
console.log(store.getState().counter)

store.subscribe(() => {
    console.log(store.getState().counter)
   saveState(store.getState().counter)
})
// export type StoreType = typeof store
export type AppStoreType = ReturnType<typeof reducers>

export default store