import './App.css'
import {Button} from "./components/Button.tsx";
import {Input} from "./components/Input.tsx";
import {CounterDisplay} from "./components/CounterDisplay.tsx";
import {useCounterWithRedux} from "./hooks/useCounterWithRedux.ts";


function App() {
    const {
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
    } = useCounterWithRedux()

    return (
        <div className='main'>

            <div className="inputs">
                <div className="input">Minimum value:<Input value={inputMin} type={"number"}
                                                            onChange={inputMinValueHandler}
                                                            error={inputMaxLowerThenInputMin || disableValueHigherThenInputMin}/>
                </div>
                <div className="input">Maximum value:<Input value={inputMax} type={"number"}
                                                            onChange={inputMaxValueHandler}
                                                            error={inputMaxLowerThenInputMin}/>
                </div>
                <div className="buttonSetter"><Button callback={setterHandler} name={"setter"}
                                                      disabled={settingsButtonState || disableValueHigherThenInputMin || inputMaxLowerThenInputMin}/>
                </div>
            </div>


            <div className="inputs"><CounterDisplay counterLimit={counterEqualToInputMax} counterValue={counter}
                                                    displayText={displayText}
                                                    errorLimit={inputMaxLowerThenInputMin || disableValueHigherThenInputMin}/>
                <div className="buttonsDisplay">
                    <span className="buttonSetter"><Button callback={counterHandler}
                                                           name={"counter"}
                                                           disabled={incButtonState || counterEqualToInputMax}/></span>

                    <span className="buttonSetter"><Button callback={resetCounterHandler} name={"reset"}
                                                           disabled={resetButtonState}/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default App



