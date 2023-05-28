import {useEffect, useState} from 'react'
import './App.css'
import {Button} from "./components/Button.tsx";
import {Input} from "./components/Input.tsx";
import {CounterDisplay} from "./components/CounterDisplay.tsx";


function App() {
    const [inputMin, setInputMin] = useState(0)
    const [inputMax, setInputMax] = useState(5)
    const [counter, setCounter] = useState(0)
    const [displayText, setDisplayText] = useState(true)
    const disableValue = 0


    useEffect(() => {
        const minValue = localStorage.getItem("Minimum counter value")
        const maxValue = localStorage.getItem("Maximum counter value")
        const actualCounter = localStorage.getItem("Current number")
        if (minValue && maxValue && actualCounter) {
            setInputMin(JSON.parse(minValue))
            setInputMax(JSON.parse(maxValue))
            setCounter(JSON.parse(actualCounter))
        }
    }, [])


    useEffect(() => {
            localStorage.setItem("Minimum counter value", JSON.stringify(inputMin))
    }, [inputMin])

    useEffect(()=>{
        localStorage.setItem("Maximum counter value", JSON.stringify(inputMax))
    }, [inputMax])

    useEffect(() =>{
        localStorage.setItem("Current number", JSON.stringify(counter))
    },[counter])

    const setterHandler = () => {
    setCounter(inputMin)
        setDisplayText(true)
    }

    const counterHandler = () => {
        setCounter(state => state + 1)
    }

    const resetCounter = () => {
        setCounter(inputMin)
    }

    const inputMinValueHandler = (value: number) => {
        setInputMin(value)
        setDisplayText(false)
    }

    const inputMaxValueHandler = (value: number) => {
        setInputMax(value)
        setDisplayText(false)
    }

    return (
        <div>
            <CounterDisplay counterLimit={counter===inputMax} counterValue={counter} displayText={displayText} errorLimit={inputMax === inputMin ||inputMin < disableValue} />
            <Input value={inputMin} type={"number"} onChange={inputMinValueHandler} error={inputMax === inputMin || inputMin < disableValue}/>
            <Input value={inputMax} type={"number"} onChange={inputMaxValueHandler} error={inputMax === inputMin}/>
            <Button callback={setterHandler} name={"setter"} disabled={inputMin < disableValue}/>
            <Button callback={counterHandler} name={"counter"} disabled={inputMin < disableValue || counter===inputMax}/>
            <Button callback={resetCounter} name={"reset"} disabled={inputMin < disableValue} />
        </div>
    )
}

export default App
