import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as CounterActionCreators from "../redux/action-creators.ts";

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(CounterActionCreators, dispatch)
}