import {AppStateType} from "./store.ts";

export const counterSelector = (state: AppStateType) =>state.counter.counter
export const resetButtonStateSelector = (state: AppStateType) =>state.counter.resetButtonState
export const incButtonStateSelector = (state: AppStateType) =>state.counter.incButtonState
export const inputMinSelector = (state: AppStateType) =>state.counter.inputMin
export const settingsButtonStateSelector = (state: AppStateType) =>state.counter.settingsButtonState
export const disableValueSelector = (state: AppStateType) =>state.counter.disableValue
export const displayTextSelector = (state: AppStateType) =>state.counter.displayText
export const inputMaxSelector = (state: AppStateType) =>state.counter.inputMax