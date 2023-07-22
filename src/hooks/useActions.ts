import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as CounterActionCreators from "../redux/action-creators.ts";
import {useMemo} from "react";

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(CounterActionCreators, dispatch),[])
}