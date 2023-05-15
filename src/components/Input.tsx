import {FC, RefObject} from "react";

type InputType = {
    inputMin?: RefObject<HTMLInputElement>
    inputMax?: RefObject<HTMLInputElement>
    type:string
}
export const Input:FC<InputType> = ({inputMin, inputMax, type}) => {
    return (
        <input type={type} ref={inputMin || inputMax}/>
    )
}

