import {ChangeEvent, useEffect} from 'react'
import './App.css'
import {Button} from "./components/Button.tsx";
import {Input} from "./components/Input.tsx";
import {CounterDisplay} from "./components/CounterDisplay.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./redux/store.ts";
import {
    incrementCounterAC,
    InitStateType,
    inputMaxValueSetterAC,
    inputMinValueSetterAC,
    resetCounterAC
} from "./redux/counter-reducer.ts";



function App() {
    const dispatch = useDispatch()
    const store = useSelector<AppStoreType, InitStateType>(state => state.counter)



    const inputMaxLowerThenInputMin = store.inputMax <= store.inputMin
    const counterEqualToInputMax = store.counter === store.inputMax
    const disableValueHigherThenInputMin = store.inputMin < store.disableValue

    useEffect(() => {
        const minValue = localStorage.getItem("Minimum counter value")
        const maxValue = localStorage.getItem("Maximum counter value")
        if (minValue && maxValue) {
            setStore({
                ...store,
                inputMin: JSON.parse(minValue),
                inputMax: JSON.parse(maxValue),
                counter: JSON.parse(minValue)
            })
        }
    }, [])


    const setterHandler = () => {
        setStore({
            ...store,
            counter: store.inputMin,
            displayText: true,
            resetButtonState: false,
            incButtonState: false,
            settingsButtonState: true,
        })
        localStorage.setItem("Minimum counter value", JSON.stringify(store.inputMin))
        localStorage.setItem("Maximum counter value", JSON.stringify(store.inputMax))
    }


    const counterHandler = () => dispatch(incrementCounterAC())
        //setStore({...store, counter: store.counter + 1})


    const resetCounter = () => dispatch(resetCounterAC())
        //setStore({...store, counter: store.inputMin})


    const inputMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(inputMinValueSetterAC(+e.currentTarget.value))
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


    const inputMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(inputMaxValueSetterAC(+e.currentTarget.value))
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
                <div className="input">Minimum value:<Input value={store.inputMin} type={"number"}
                                                            onChange={inputMinValueHandler}
                                                            error={inputMaxLowerThenInputMin || disableValueHigherThenInputMin}/>
                </div>
                <div className="input">Maximum value:<Input value={store.inputMax} type={"number"}
                                                            onChange={inputMaxValueHandler}
                                                            error={inputMaxLowerThenInputMin}/>
                </div>
                <div className="buttonSetter"><Button callback={setterHandler} name={"setter"}
                                                      disabled={store.settingsButtonState || disableValueHigherThenInputMin || inputMaxLowerThenInputMin}/>
                </div>
            </div>


            <div className="inputs"><CounterDisplay counterLimit={counterEqualToInputMax} counterValue={store.counter}
                                                    displayText={store.displayText}
                                                    errorLimit={inputMaxLowerThenInputMin || disableValueHigherThenInputMin}/>
                <div className="buttonsDisplay">
                    <span className="buttonSetter"><Button callback={counterHandler}
                                                           name={"counter"}
                                                           disabled={store.incButtonState || counterEqualToInputMax}/></span>

                    <span className="buttonSetter"><Button callback={resetCounter} name={"reset"}
                                                           disabled={store.resetButtonState}/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default App
