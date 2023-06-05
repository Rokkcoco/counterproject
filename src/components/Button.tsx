import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type DefaulInputPropsType = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

type ButtonType = DefaulInputPropsType & {
    callback: ()=>void
}

export const Button= ({name, callback, ...restProps}:ButtonType) => {
    return (
        <button {...restProps} onClick={callback}>{name}</button>
    );
};

//disabled={disabled}