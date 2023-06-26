import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as UserActionCreators from "../redux/action-creators.ts";

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UserActionCreators, dispatch)
}