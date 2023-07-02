import {useTypedSelector} from "./useTypedSelector.ts";
import {counterSelector} from "../redux/selectors.ts";
import {useActions} from "./useActions.ts";
import {ChangeEvent} from "react";


export const useCounterWithRedux = () => {
    const {inputMin,
        inputMax,
        counter,
        settingsButtonState,
        displayText,
        incButtonState,
        resetButtonState,
        disableValue} = useTypedSelector(counterSelector)
    const {setButtonHandler,
        incrementCounter,
        resetCounter,
        inputMinValueSetter,
        inputMaxValueSetter} = useActions()

    const setterHandler = () => setButtonHandler()
    const counterHandler = () => incrementCounter()
    const resetCounterHandler =() => resetCounter()
    const inputMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => inputMinValueSetter(+e.currentTarget.value)
    const inputMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => inputMaxValueSetter(+e.currentTarget.value)


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