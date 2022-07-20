import { AnyAction } from "redux";
import { IStore } from "./types";

const initialState = {
    list: [],
}

const exchangeRateReducer = (state: IStore = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'exchange/setExchange':
            return{...state, list: [...action.payload]}
        default:
            return state;
    }
}

export default exchangeRateReducer;