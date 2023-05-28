import {ChangeEvent, FC} from "react";
import s from "./Input.module.css"

type InputType = {
    value: number
    type:string
    onChange: (value: number)=>void
    error?: boolean
}
export const Input:FC<InputType> = ({value, type, onChange, error}) => {
    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        onChange(Number(event.currentTarget.value))
    }
    return (
        <input className={error ? s.error : ''} type={type} value={value} onChange={onChangeHandler}/>
    )
}

