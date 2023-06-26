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

export type incrementCounterACType = ReturnType<typeof incrementCounterAC>
export type resetCounterAC = ReturnType<typeof resetCounterAC>
export type inputMinValueSetterACType = ReturnType<typeof inputMinValueSetterAC>
export type inputMaxValueSetterACType = ReturnType<typeof inputMaxValueSetterAC>
export type setButtonHandlerAC = ReturnType<typeof setButtonHandlerAC>