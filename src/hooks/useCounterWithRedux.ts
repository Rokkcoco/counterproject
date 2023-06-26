import {useTypedSelector} from "./useTypedSelector.ts";
import {counterSelector} from "../redux/selectors.ts";
import {useActions} from "./useActions.ts";
import {ChangeEvent} from "react";


export const useCounterWithRedux = () => {
    const {
        inputMin, inputMax, counter,
        settingsButtonState, displayText, incButtonState,
        resetButtonState, disableValue
    } = useTypedSelector(counterSelector)
    const {
        setButtonHandlerAC, incrementCounterAC, resetCounterAC, inputMinValueSetterAC, inputMaxValueSetterAC
    } = useActions()

    const setterHandler = () => setButtonHandlerAC()
    const counterHandler = () => incrementCounterAC()
    const resetCounter =() => resetCounterAC()
    const inputMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => inputMinValueSetterAC(+e.currentTarget.value)
    const inputMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => inputMaxValueSetterAC(+e.currentTarget.value)


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
        disableValue,
        incrementCounterAC,
        resetCounterAC,
        inputMinValueSetterAC,
        inputMaxValueSetterAC,
        setterHandler,
        counterHandler,
        resetCounter,
        inputMinValueHandler,
        inputMaxValueHandler
    }
}