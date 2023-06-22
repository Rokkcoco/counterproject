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
type InitStateType = typeof initState
const counterReducer = (state: InitStateType = initState, action: counterReducerActionType) => {
    switch (action.type) {
        case "INCREASE-COUNTER":
            return {...state, counter: state.counter + 1}
        case "RESET-COUNTER":
            return {...state, counter: }
    }
}


const incrementCounterAC = () => ({
    type: "INCREASE-COUNTER"
}) as const

const resetCounterAC = () => ({
    type: "RESET-COUNTER"
}) as const
type counterReducerActionType =  incrementCounterACType | resetCounterAC
type incrementCounterACType = ReturnType<typeof incrementCounterAC>
type resetCounterAC = ReturnType<typeof resetCounterAC>