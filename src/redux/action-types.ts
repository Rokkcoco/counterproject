import * as actions from './action-creators.ts'

type ActionsType = typeof actions
type ActionCreatorsNamesType = keyof ActionsType
type ActionCreatorType = ActionsType[ActionCreatorsNamesType]
export type CounterReducerActionType = ReturnType <ActionCreatorType>