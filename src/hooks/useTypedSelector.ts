import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppStoreType} from "../redux/store.ts";

export const useTypedSelector:TypedUseSelectorHook<AppStoreType> = useSelector