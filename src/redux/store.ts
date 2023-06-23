import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer.ts";
import { saveState} from "../utils/localStorageUtils.ts";




const reducers = combineReducers({
    counter: counterReducer
})
// let counter = {
//     inputMin: 0,
//     inputMax: 5,
//     counter: 0,
//     disableValue: 0,
//     displayText: true,
//     resetButtonState: false,
//     incButtonState: false,
//     settingsButtonState: false}
let preloadedState
// let counter = {name: 0};
const minValue = localStorage.getItem("Minimum counter value")
if (minValue ) {
    console.log(minValue)
    preloadedState = JSON.parse(minValue)


}
const store =legacy_createStore(reducers,preloadedState)


store.subscribe(() => {
    console.log(store.getState().counter)
   saveState(store.getState().counter)
})

export type AppStoreType = ReturnType<typeof reducers>

export default store