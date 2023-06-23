
import {InitStateType} from "../redux/counter-reducer.ts";



export const loadState = () => {
    let res = {}
    try {
        const minValue = localStorage.getItem('Minimum counter value');
        const maxValue = localStorage.getItem("Maximum counter value");

        if (!minValue && maxValue) {
            return undefined;
        }
        if (minValue && maxValue) {
            res = {  inputMin:(JSON.parse(minValue)), inputMax: (JSON.parse(maxValue))}
            return res
            //res
        }

    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: InitStateType) => {
    try {
        const minValue = JSON.stringify(state.inputMin);
        const maxValue = JSON.stringify(state.inputMax);
        localStorage.setItem('Minimum counter value', minValue);
        localStorage.setItem('Maximum counter value', maxValue);
    } catch {
        // ignore write errors
    }
};