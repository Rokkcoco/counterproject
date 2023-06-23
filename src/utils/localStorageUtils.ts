
import {initState} from "../redux/counter-reducer.ts";
import {AppStoreType} from "../redux/store.ts";


export const loadState = () => {
    let res = {}
    try {
        const minValue = localStorage.getItem('Minimum counter value');
        const maxValue = localStorage.getItem("Maximum counter value");

        if (!minValue && maxValue) {
            return undefined;
        }
        if (minValue && maxValue) {
            res = {...initState,  inputMin:(JSON.parse(minValue)), inputMax: (JSON.parse(maxValue))}
            return res
            //res
        }

    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppStoreType) => {
    try {
        const minValue = JSON.stringify(state.counter.inputMin);
        const maxValue = JSON.stringify(state.counter.inputMax);
        localStorage.setItem('Minimum counter value', minValue);
        localStorage.setItem('Maximum counter value', maxValue);
    } catch {
        // ignore write errors
    }
};