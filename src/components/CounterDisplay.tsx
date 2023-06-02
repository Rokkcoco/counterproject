import s from "./CounterDisplay.module.css"

type CounterDisplayType = {
    counterValue: number
    displayText: boolean
    counterLimit: boolean
    errorLimit: boolean
}
export const CounterDisplay = ({counterValue, displayText, counterLimit, errorLimit}:CounterDisplayType) => {
    return (
        <div className={counterLimit || errorLimit ? `${s.display} ${s.max}` : `${s.display}`}>
            {errorLimit ? "incorrect value" : counterValue===null ? "set value and press set button" : displayText ? counterValue : "set value and press set button"}
        </div>
    );
};

