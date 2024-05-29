import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../models";
import { authReducer } from "./auth/reducer";

export interface AppState {
    auth: AuthState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    auth: authReducer
}