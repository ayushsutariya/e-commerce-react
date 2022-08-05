import { combineReducers } from "redux";
import { Database_Reducer } from "./Database.reducer";

export const all_Reducers = combineReducers({
    Database_Reducer: Database_Reducer
})