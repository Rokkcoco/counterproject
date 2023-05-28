import {FC} from "react";
import s from "./CounterDisplay.module.css"

type CounterDisplayType = {
    counterValue: number
    displayText: boolean
    counterLimit: boolean
    errorLimit: boolean
}
export const CounterDisplay:FC<CounterDisplayType> = ({counterValue, displayText, counterLimit, errorLimit}) => {
    return (
        <div className={counterLimit || errorLimit ? `${s.display} ${s.max}` : `${s.display}`}>
            {errorLimit ? "incorrect value" : displayText ? counterValue : "set value and press set button"}
        </div>
    );
};

