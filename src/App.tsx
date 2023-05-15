import {useEffect, useRef, useState} from 'react'
import './App.css'
import {Button} from "./components/Button.tsx";
import {Input} from "./components/Input.tsx";


function App() {
    const inputMin = useRef<HTMLInputElement>(null)
    const inputMax = useRef<HTMLInputElement>(null)
    const [minCount, setMinCount] = useState(0)
    const [maxCount, setMaxCount] = useState(0)

    useEffect(() => {
        const minValue = localStorage.getItem("Minimum counter value")
        const maxValue = localStorage.getItem("Maximum counter value")
        const actualcounter = localStorage.getItem("Current number")
        if (inputMin.current && inputMax.current && minValue && maxValue && actualcounter) {
            inputMin.current.valueAsNumber = Number(JSON.parse(minValue))
            inputMax.current.valueAsNumber = Number(JSON.parse(maxValue))
            setMinCount(Number(JSON.parse(actualcounter)))
        }
    }, [])


    useEffect(() => {
            localStorage.setItem("Minimum counter value", JSON.stringify(inputMin.current?.valueAsNumber))
    }, [inputMin.current?.valueAsNumber])

    useEffect(()=>{
        localStorage.setItem("Maximum counter value", JSON.stringify(inputMax.current?.valueAsNumber))
    }, [inputMax.current?.valueAsNumber])

    useEffect(() =>{
        localStorage.setItem("Current number", JSON.stringify(minCount))
    },[minCount])

    const setterHandler = () => {
        if (inputMin.current && inputMax.current) {
            setMinCount(inputMin.current.valueAsNumber)
            setMaxCount(inputMax.current.valueAsNumber)
        }
    }


    const counterHandler = () => {
        setMinCount(minCount + 1)
    }

    const resetCounter = () => {
        inputMin.current && setMinCount(inputMin.current.valueAsNumber)
    }

    const counterDisabledResult = () => {
        console.log("counter")
        return maxCount === minCount
    }

    const resetCounterDisabledResult = () => {
        console.log("reset")
        return maxCount !== minCount

    }

    // const countSetterDisabledResult = () => {
    //     if (inputMin.current !== null) {
    //         return inputMin.current.valueAsNumber < 0
    //     }
    //     return false
    // }
    return (
        <div>
            {minCount}
            <Input inputMin={inputMin} type={"number"}/>
            <Input inputMax={inputMax} type={"number"}/>
            <Button callback={setterHandler} name={"setter"} disabled={!!(inputMin.current && inputMin.current.valueAsNumber < 0)}/>
            <Button callback={counterHandler} name={"counter"} disabled={counterDisabledResult()}/>
            <Button callback={resetCounter} name={"reset"} disabled={resetCounterDisabledResult()}/>
        </div>
    )
}

export default App
