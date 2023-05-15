import {FC} from "react";

type ButtonType = {
    callback: ()=>void
    name:string
    disabled: boolean
}
export const Button:FC<ButtonType> = ({callback, name, disabled}) => {
    return (
        <button onClick={callback} disabled={disabled}>{name}</button>
    );
};

