import {
    incrementCounterACType,
    inputMaxValueSetterACType,
    inputMinValueSetterACType, resetCounterAC,
    setButtonHandlerAC
} from "./action-creators.ts";

export const initState = {
    inputMin: 0,
    inputMax: 5,
    counter: 0,
    disableValue: 0,
    displayText: true,
    resetButtonState: false,
    incButtonState: false,
    settingsButtonState: false
}

export const counterReducer = (state: InitStateType = initState, action: counterReducerActionType): InitStateType => {
    switch (action.type) {
        case "INCREASE-COUNTER":
            return {...state, counter: state.counter + 1}
        case "RESET-COUNTER":
            return {...state, counter: state.inputMin}
        case "INPUT-MAX-VALUE-SET":
            return {
                ...state,
                counter: NaN,
                settingsButtonState: false,
                resetButtonState: true,
                incButtonState: true,
                displayText: false,
                inputMax: action.payload.number
            }
        case "INPUT-MIN-VALUE-SET":
            return {
                ...state,
                counter: NaN,
                settingsButtonState: false,
                resetButtonState: true,
                incButtonState: true,
                displayText: false,
                inputMin: action.payload.number
            }
        case "SET-BUTTON-HANDLER":
            return {
                ...state,
                counter: state.inputMin,
                displayText: true,
                resetButtonState: false,
                incButtonState: false,
                settingsButtonState: true
            }
        default:
            return state
    }
}

export type counterReducerActionType =
    incrementCounterACType
    | resetCounterAC
    | inputMinValueSetterACType
    | inputMaxValueSetterACType
    | setButtonHandlerAC


export type InitStateType = typeof initState
