import {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes} from "react";
import s from "./Input.module.css"

type DefaulInputPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>

type InputType = DefaulInputPropsType & {
    error?: boolean
}
export const Input:FC<InputType> = ({ error, type, value, onChange, ...restProps}) => {
    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) =>  onChange && onChange(event)

    return (
        <input className={error ? s.error : ''} type={type} value={value} onChange={onChangeHandler} {...restProps}/>
    )
}

