import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppStateType} from "../redux/store.ts";

export const useTypedSelector:TypedUseSelectorHook<AppStateType> = useSelector