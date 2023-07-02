import s from "./CounterDisplay.module.css"
import {useCounterWithRedux} from "../hooks/useCounterWithRedux.ts";

// type CounterDisplayType = {
//     counterValue: number
//     displayText: boolean
//     counterLimit: boolean
//     errorLimit: boolean
// }
//{counterValue, displayText, counterLimit, errorLimit}:CounterDisplayType
export const CounterDisplay = () => {
    const {counterEqualToInputMax ,
        counter,
        displayText,
        inputMaxLowerThenInputMin,
        disableValueHigherThenInputMin} = useCounterWithRedux()
    return (
        <div className={counterEqualToInputMax || inputMaxLowerThenInputMin || disableValueHigherThenInputMin ? `${s.display} ${s.max}` : `${s.display}`}>
            {(inputMaxLowerThenInputMin || disableValueHigherThenInputMin)
                ? "incorrect value" : counter ===null
                    ? "set value and press set button" : displayText
                        ? counter : "set value and press set button"}
        </div>
    );
};

