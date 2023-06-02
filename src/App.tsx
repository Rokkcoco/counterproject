import {ChangeEvent, useEffect, useState} from 'react'
import './App.css'
import {Button} from "./components/Button.tsx";
import {Input} from "./components/Input.tsx";
import {CounterDisplay} from "./components/CounterDisplay.tsx";

type StoreType = {
    inputMin: number,
    inputMax: number,
    counter: number,
    disableValue: number,
    displayText: boolean,
    resetButtonState: boolean,
    incButtonState: boolean,
    settingsButtonState: boolean
}

function App() {
    const [inputMin, setInputMin] = useState(0)
    const [inputMax, setInputMax] = useState(5)

    const [counter, setCounter] = useState(inputMin)
    const [displayText, setDisplayText] = useState(true)
    const [resetButtonState, setResetButtonState] = useState(false)
    const [incButtonState, setIncButtonState] = useState(false)
    const [settingsButtonState, setSettingsButtonState] = useState(false)

    const [store, setStore] = useState<StoreType>({
        inputMin: 0,
        inputMax: 5,
        counter: 0,
        disableValue: 0,
        displayText: true,
        resetButtonState: false,
        incButtonState: false,
        settingsButtonState: false
    })
    const disableValue = 0
    const inputMaxLowerThenInputMin = inputMax <= inputMin
    const counterEqualToInputMax = counter === inputMax
    const disableValueHigherThenInputMin = inputMin < disableValue
    const counterEqualNull = counter === null

    const disableValue2 = store.disableValue
    const inputMaxLowerThenInputMin2 = store.inputMax <= store.inputMin
    const counterEqualToInputMax2 = store.counter === store.inputMax
    const disableValueHigherThenInputMin2 = store.inputMin < store.disableValue
    const counterEqualNull2 = store.counter === null

    useEffect(() => {
        const minValue = localStorage.getItem("Minimum counter value")
        const maxValue = localStorage.getItem("Maximum counter value")
        if (minValue && maxValue) {
            setInputMin(JSON.parse(minValue))
            setInputMax(JSON.parse(maxValue))
            setCounter(JSON.parse(minValue))
            setStore({...store,
                inputMin: JSON.parse(minValue),
                inputMax: JSON.parse(maxValue),
                counter: JSON.parse(minValue)})
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

    const setterHandlerTwooo = () => {
        setStore({...store,
        displayText: true,
        resetButtonState: false,
        incButtonState: false,
        settingsButtonState: true,
        })
        localStorage.setItem("Minimum counter value", JSON.stringify(inputMin))
        localStorage.setItem("Maximum counter value", JSON.stringify(inputMax))
    }

    const counterHandler = () => setCounter(state => state + 1)
    const counterHandlerTwooo = () => setStore({...store, counter: store.counter +1})


    const resetCounter = () => setCounter(inputMin)

    const resetCounterTwo = () => setStore({...store, counter: store.inputMin})

    const inputMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCounter(NaN)
        setSettingsButtonState(false)
        setResetButtonState(true)
        setIncButtonState(true)
        setDisplayText(false)
        setInputMin(Number(e.currentTarget.value))

    }

    const inputMinValueHandlerTwooo = (e: ChangeEvent<HTMLInputElement>) => {
        setStore({...store,
            counter: NaN,
        settingsButtonState: false,
        resetButtonState: true,
        incButtonState: true,
            displayText: false,
            inputMin: Number(e.currentTarget.value)
        })
    }

    const inputMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCounter(NaN)
        setSettingsButtonState(false)
        setResetButtonState(true)
        setIncButtonState(true)
        setDisplayText(false)
        setInputMax(Number(e.currentTarget.value))
    }

    const inputMaxValueHandlerTwooo = (e: ChangeEvent<HTMLInputElement>) => {
        setStore({...store,
            counter: NaN,
            settingsButtonState: false,
            resetButtonState: true,
            incButtonState: true,
            displayText: false,
            inputMax: Number(e.currentTarget.value)
        })
    }
    //Переделать юзстейт в объект
    //Добавить типизации от Игната
    //добавить {...restPros}
    //вынести в переменные

    return (
        <div className='main'>

            <div className="inputs">
                <div className="input">Minimum value:<Input value={inputMin} type={"number"}
                                                            onChange={inputMinValueHandler}
                                                            error={inputMaxLowerThenInputMin || disableValueHigherThenInputMin}/>
                </div>
                <div className="input">Maximum value:<Input value={inputMax} type={"number"}
                                                            onChange={inputMaxValueHandler}
                                                            error={inputMaxLowerThenInputMin}/></div>
                <div className="buttonSetter"><Button callback={setterHandler} name={"setter"}
                                                      disabled={settingsButtonState || disableValueHigherThenInputMin || inputMaxLowerThenInputMin}/>
                </div>
            </div>


            <div className="inputs">
                <CounterDisplay counterLimit={counterEqualToInputMax} counterValue={counter} displayText={displayText}
                                errorLimit={inputMaxLowerThenInputMin || disableValueHigherThenInputMin}/>
                <div className="buttonsDisplay"><span className="buttonSetter"> <Button callback={counterHandler}
                                                                                        name={"counter"}
                                                                                        disabled={incButtonState || counterEqualToInputMax || counterEqualNull}/></span>
                    <span className="buttonSetter"><Button callback={resetCounter} name={"reset"}
                                                           disabled={resetButtonState || counterEqualNull}/></span>
                </div>
            </div>
        </div>
    )
}

export default App
