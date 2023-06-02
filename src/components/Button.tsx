import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";

type DefaulInputPropsType = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

type ButtonType = DefaulInputPropsType & {
    callback: ()=>void
}
export const Button:FC<ButtonType> = ({callback, name, disabled, ...restProps}) => {
    return (
        <button onClick={callback} disabled={disabled} {...restProps}>{name}</button>
    );
};

