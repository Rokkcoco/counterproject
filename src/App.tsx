import {ChangeEvent} from 'react'
import './App.css'
import {Button} from "./components/Button.tsx";
import {Input} from "./components/Input.tsx";
import {CounterDisplay} from "./components/CounterDisplay.tsx";
import {useTypedSelector} from "./hooks/useTypedSelector.ts";
import {useActions} from "./hooks/useActions.ts";
import {counterSelector} from "./redux/selectors.ts";


function App() {
    const {inputMin, inputMax, counter, settingsButtonState,  displayText, incButtonState, resetButtonState, disableValue} = useTypedSelector(counterSelector)
    const { setButtonHandlerAC, incrementCounterAC, resetCounterAC, inputMinValueSetterAC, inputMaxValueSetterAC} = useActions()

    const inputMaxLowerThenInputMin = inputMax <= inputMin
    const counterEqualToInputMax = counter === inputMax
    const disableValueHigherThenInputMin = inputMin < disableValue

    // useEffect(() => {
    //     const minValue = localStorage.getItem("Minimum counter value")
    //     const maxValue = localStorage.getItem("Maximum counter value")
    //     if (minValue && maxValue) {
    //         setStore({
    //             ...store,
    //             inputMin: JSON.parse(minValue),
    //             inputMax: JSON.parse(maxValue),
    //             counter: JSON.parse(minValue)
    //         })
    //     }
    // }, [])


    const setterHandler = () =>setButtonHandlerAC()
    // {
    //     setStore({
    //         ...store,
    //         counter: store.inputMin,
    //         displayText: true,
    //         resetButtonState: false,
    //         incButtonState: false,
    //         settingsButtonState: true,
    //     })
    //     localStorage.setItem("Minimum counter value", JSON.stringify(store.inputMin))
    //     localStorage.setItem("Maximum counter value", JSON.stringify(store.inputMax))
    // }


    const counterHandler = () => incrementCounterAC()
        //setStore({...store, counter: store.counter + 1})


    const resetCounter =() => resetCounterAC()
        //setStore({...store, counter: store.inputMin})


    const inputMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => inputMinValueSetterAC(+e.currentTarget.value)
    // {
    //     setStore({
    //         ...store,
    //         counter: NaN,
    //         settingsButtonState: false,
    //         resetButtonState: true,
    //         incButtonState: true,
    //         displayText: false,
    //         inputMin: Number(e.currentTarget.value)
    //     })
    // }


    const inputMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => inputMaxValueSetterAC(+e.currentTarget.value)
    // {
    //     setStore({
    //         ...store,
    //         counter: NaN,
    //         settingsButtonState: false,
    //         resetButtonState: true,
    //         incButtonState: true,
    //         displayText: false,
    //         inputMax: Number(e.currentTarget.value)
    //     })
    // }


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

                    <span className="buttonSetter"><Button callback={resetCounter} name={"reset"}
                                                           disabled={resetButtonState}/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default App
