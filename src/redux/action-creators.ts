export const incrementCounter = () => ({
    type: "counter/counter-reducer/INCREASE-COUNTER"
}) as const

export const resetCounter = () => ({
    type: "counter/counter-reducer/RESET-COUNTERR"
}) as const

export const inputMinValueSetter = (number: number) => ({
    type: "counter/counter-reducer/INPUT-MIN-VALUE-SET",
    payload: {
        number
    }
}) as const

export const inputMaxValueSetter = (number: number) => ({
    type: "counter/counter-reducer/INPUT-MAX-VALUE-SET",
    payload: {
        number
    }
}) as const

export const setButtonHandler = () => ({
    type: "counter/counter-reducer/SET-BUTTON-HANDLER"
}) as const

