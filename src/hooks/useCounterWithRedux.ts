import {useTypedSelector} from "./useTypedSelector.ts";
import {
    counterSelector,
    disableValueSelector, displayTextSelector, incButtonStateSelector,
    inputMaxSelector,
    inputMinSelector, resetButtonStateSelector,
    settingsButtonStateSelector
} from "../redux/counter-selectors.ts";
import {useActions} from "./useActions.ts";
import {ChangeEvent} from "react";


export const useCounterWithRedux = () => {
    //разбить на множество? хотя компонент один
    const counter = useTypedSelector(counterSelector)
    const inputMax = useTypedSelector(inputMaxSelector)
    const inputMin = useTypedSelector(inputMinSelector)
    const disableValue = useTypedSelector(disableValueSelector)
    const settingsButtonState = useTypedSelector(settingsButtonStateSelector)
    const resetButtonState = useTypedSelector(resetButtonStateSelector)
    const incButtonState = useTypedSelector(incButtonStateSelector)
    const displayText = useTypedSelector(displayTextSelector)
    const {setButtonHandler,
        incrementCounter,
        resetCounter,
        inputMinValueSetter,
        inputMaxValueSetter} = useActions()

    const setterHandler = () => setButtonHandler()
    const counterHandler = () => incrementCounter()
    const resetCounterHandler =() => resetCounter()
    const inputMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => inputMinValueSetter(Math.floor(+e.currentTarget.value))
    const inputMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => inputMaxValueSetter(Math.floor(+e.currentTarget.value))


    const inputMaxLowerThenInputMin = inputMax <= inputMin
    const counterEqualToInputMax = counter === inputMax
    const disableValueHigherThenInputMin = inputMin < disableValue

    return {
        inputMin,
        inputMax,
        resetButtonState,
        incButtonState,
        displayText,
        counter,
        settingsButtonState,
        inputMaxLowerThenInputMin,
        counterEqualToInputMax,
        disableValueHigherThenInputMin,
        setterHandler,
        counterHandler,
        resetCounterHandler,
        inputMinValueHandler,
        inputMaxValueHandler
    }
}