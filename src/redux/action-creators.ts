export const incrementCounter = () => ({
    type: "INCREASE-COUNTER"
}) as const

export const resetCounter = () => ({
    type: "RESET-COUNTER"
}) as const

export const inputMinValueSetter = (number: number) => ({
    type: "INPUT-MIN-VALUE-SET",
    payload: {
        number
    }
}) as const

export const inputMaxValueSetter = (number: number) => ({
    type: "INPUT-MAX-VALUE-SET",
    payload: {
        number
    }
}) as const

export const setButtonHandler = () => ({
    type: "SET-BUTTON-HANDLER"
}) as const

export type incrementCounterACType = ReturnType<typeof incrementCounter>
export type resetCounterAC = ReturnType<typeof resetCounter>
export type inputMinValueSetterACType = ReturnType<typeof inputMinValueSetter>
export type inputMaxValueSetterACType = ReturnType<typeof inputMaxValueSetter>
export type setButtonHandlerAC = ReturnType<typeof setButtonHandler>