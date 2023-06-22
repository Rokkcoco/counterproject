const initState = {
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
                inputMax: Number(action.payload.number)
            }
        case "INPUT-MIN-VALUE-SET":
            return {
                ...state,
                counter: NaN,
                settingsButtonState: false,
                resetButtonState: true,
                incButtonState: true,
                displayText: false,
                inputMin: Number(action.payload.number)
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


export const incrementCounterAC = () => ({
    type: "INCREASE-COUNTER"
}) as const

export const resetCounterAC = () => ({
    type: "RESET-COUNTER"
}) as const

export const inputMinValueSetterAC = (number: number) => ({
    type: "INPUT-MIN-VALUE-SET",
    payload: {
        number
    }
}) as const

export const inputMaxValueSetterAC = (number: number) => ({
    type: "INPUT-MAX-VALUE-SET",
    payload: {
        number
    }
}) as const

export const setButtonHandlerAC = () => ({
    type: "SET-BUTTON-HANDLER"
}) as const

export type counterReducerActionType =
    incrementCounterACType
    | resetCounterAC
    | inputMinValueSetterACType
    | inputMaxValueSetterACType
    | setButtonHandlerAC
type incrementCounterACType = ReturnType<typeof incrementCounterAC>
type resetCounterAC = ReturnType<typeof resetCounterAC>
type inputMinValueSetterACType = ReturnType<typeof inputMinValueSetterAC>
type inputMaxValueSetterACType = ReturnType<typeof inputMaxValueSetterAC>
type setButtonHandlerAC = ReturnType<typeof setButtonHandlerAC>

export type InitStateType = typeof initState

// type StoreType = {
//     inputMin: number,
//     inputMax: number,
//     counter: number,
//     disableValue: number,
//     displayText: boolean,
//     resetButtonState: boolean,
//     incButtonState: boolean,
//     settingsButtonState: boolean
// }