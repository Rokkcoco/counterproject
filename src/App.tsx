import {useEffect, useState} from 'react'
import './App.css'
import {Button} from "./components/Button.tsx";
import {Input} from "./components/Input.tsx";
import {CounterDisplay} from "./components/CounterDisplay.tsx";


function App() {
    const [inputMin, setInputMin] = useState(0)
    const [inputMax, setInputMax] = useState(5)

    const [counter, setCounter] = useState(inputMin)
    const [displayText, setDisplayText] = useState(true)
    const [resetButtonState, setResetButtonState] = useState(false)
    const [incButtonState, setIncButtonState] = useState(false)
    const [settingsButtonState, setSettingsButtonState] = useState(false)
    const disableValue = 0


    useEffect(() => {
        const minValue = localStorage.getItem("Minimum counter value")
        const maxValue = localStorage.getItem("Maximum counter value")
        if (minValue && maxValue) {
            setInputMin(JSON.parse(minValue))
            setInputMax(JSON.parse(maxValue))
            setCounter(JSON.parse(minValue))
        }
    }, [])


    const setterHandler = () => {
        setCounter(inputMin)
        setDisplayText(true)
        setResetButtonState(false)
        setIncButtonState(false)
        setSettingsButtonState(true)
        localStorage.setItem("Minimum counter value", JSON.stringify(inputMin))
        localStorage.setItem("Maximum counter value", JSON.stringify(inputMax))
    }

    const counterHandler = () => {
        setCounter(state => state + 1)
    }

    const resetCounter = () => {
        setCounter(inputMin)
    }

    const inputMinValueHandler = (value: number) => {
        setCounter(NaN)
        setSettingsButtonState(false)
        setResetButtonState(true)
        setIncButtonState(true)
        setDisplayText(false)
        setInputMin(value)
    }

    const inputMaxValueHandler = (value: number) => {
        setCounter(NaN)
        setSettingsButtonState(false)
        setResetButtonState(true)
        setIncButtonState(true)
        setDisplayText(false)
        setInputMax(value)
    }


    return (
        <div className='main'>

            <div className="inputs">
                <div className="input">Minimum value:<Input value={inputMin} type={"number"}
                                                            onChange={inputMinValueHandler}
                                                            error={inputMax <= inputMin || inputMin < disableValue}/>
                </div>
                <div className="input">Maximum value:<Input value={inputMax} type={"number"}
                                                            onChange={inputMaxValueHandler}
                                                            error={inputMax <= inputMin}/></div>
                <div className="buttonSetter"><Button callback={setterHandler} name={"setter"}
                                                      disabled={settingsButtonState || inputMin < disableValue || inputMax <= inputMin}/>
                </div>
            </div>


            <div className="inputs">
                <CounterDisplay counterLimit={counter === inputMax} counterValue={counter} displayText={displayText}
                                errorLimit={inputMax <= inputMin || inputMin < disableValue}/>
                <div className="buttonsDisplay"><span className="buttonSetter"> <Button callback={counterHandler}
                                                                                        name={"counter"}
                                                                                        disabled={incButtonState || counter === inputMax || counter === null}/></span>
                    <span className="buttonSetter"><Button callback={resetCounter} name={"reset"}
                                                           disabled={resetButtonState || counter === null}/></span>
                </div>
            </div>
        </div>
    )
}

export default App
