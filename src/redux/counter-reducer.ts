import {CounterReducerActionType} from "./action-types.ts";

export const initState = {
    inputMin: 0,
    inputMax: 5,
    counter: 0 as number | null,
    disableValue: 0,
    displayText: true,
    resetButtonState: false,
    incButtonState: false,
    settingsButtonState: false
}

export const counterReducer = (state: InitStateType = initState, action: CounterReducerActionType): InitStateType => {
    switch (action.type) {
        case "counter/counter-reducer/INCREASE-COUNTER":
            return {...state, counter: state.counter as number + 1 }
        case "counter/counter-reducer/RESET-COUNTER":
            return {...state, counter: state.inputMin}
        case "counter/counter-reducer/INPUT-MAX-VALUE-SET":
            return {
                ...state,
                counter: null,
                settingsButtonState: false,
                resetButtonState: true,
                incButtonState: true,
                displayText: false,
                inputMax: action.payload.number
            }
        case "counter/counter-reducer/INPUT-MIN-VALUE-SET":
            return {
                ...state,
                counter: null,
                settingsButtonState: false,
                resetButtonState: true,
                incButtonState: true,
                displayText: false,
                inputMin: action.payload.number
            }
        case "counter/counter-reducer/SET-BUTTON-HANDLER":
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


export type InitStateType = typeof initState
