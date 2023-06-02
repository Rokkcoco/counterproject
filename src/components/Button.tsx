import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type DefaulInputPropsType = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

type ButtonType = DefaulInputPropsType & {
    callback: ()=>void
}
export const Button= ({callback, name, disabled, ...restProps}:ButtonType) => {
    return (
        <button onClick={callback} disabled={disabled} {...restProps}>{name}</button>
    );
};

